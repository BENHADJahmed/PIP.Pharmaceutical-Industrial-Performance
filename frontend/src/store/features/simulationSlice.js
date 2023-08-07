import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const simulationSlice = createSlice({
  name: "simulation",
  initialState: {
    simulations: {
      simulation1: {
        simulationProducts: localStorage.getItem("simulation1")
          ? JSON.parse(localStorage.getItem("simulation1"))
          : [],
        totalTemps1: 0,
        totalQuantity1: 0,
        simulationId : "simulation1",
      },
      simulation2: {
        simulationProducts: localStorage.getItem("simulation2")
          ? JSON.parse(localStorage.getItem("simulation2"))
          : [],
        totalTemps2: 0,
        totalQuantity2: 0,
        simulationId : "simulation2",
      },
    },
  },
  reducers: {
    addToSimulation(state, action) {
      const {payload} = action;
      const simulation = state.simulations[payload.simulationId]
      console.log(payload.payload);
      console.log(state.simulations.simulation1.simulationProducts);
      const itemInSimulation = simulation.simulationProducts.find(
        (item) => item._id === payload.payload._id
      );

      if (itemInSimulation) {
        itemInSimulation.productQuantity++;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        simulation.simulationProducts.push({
          ...payload.payload,
          productQuantity: 1,
        });
        toast.success("Product added to simulation", {
          position: "bottom-left",
        });
      }
      localStorage.setItem(
        `${payload.simulationId}`,
        JSON.stringify(simulation.simulationProducts)
      );
    },
    decreaseSimulation(state, action) {
      const {payload} = action;
      const simulation = state.simulations[payload.simulationId]
      const item = simulation.simulationProducts.find((item) => item._id === payload.payload._id);

      if (item.productQuantity === 1) {
        simulation.simulationProducts = simulation.simulationProducts.filter((item) => item._id !== payload.payload._id)

        toast.error("Product removed from simulation", {
          position: "bottom-left",
        });
        
      } else  {
        item.productQuantity--;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      }

      localStorage.setItem(
        `${payload.simulationId}`,
        JSON.stringify(simulation.simulationProducts)
      );
    },
    removeFromSimulation(state, action) {
      const {payload} = action;
      const simulation = state.simulations[payload.simulationId]
      simulation.simulationProducts = simulation.simulationProducts.filter((item) => item._id !== payload.payload._id)
          toast.error("Product removed from simulation", {
            position: "bottom-left",})
            localStorage.setItem(
              `${payload.simulationId}`,
              JSON.stringify(simulation.simulationProducts))
    },
    getTotals(state) {
      let totalQuantity1 = 0;
      let totalQuantity2 = 0;
      let totalTemps1 = 0;
      let totalTemps2 = 0;

      state.simulations.simulation1.simulationProducts.map((item) => totalQuantity1 += item.productQuantity)
      state.simulations.simulation2.simulationProducts.map((item) => totalQuantity2 += item.productQuantity)
      state.simulations.simulation1.simulationProducts.map((item) => totalTemps1 += item.productQuantity*item.temps1)
      state.simulations.simulation2.simulationProducts.map((item) => totalTemps2 += item.productQuantity*item.temps2)

      state.simulations.simulation1.totalQuantity1 = totalQuantity1;
      state.simulations.simulation1.totalTemps1 = totalTemps1;
      state.simulations.simulation2.totalQuantity2 = totalQuantity2;
      state.simulations.simulation2.totalTemps2 = totalTemps2;

    }, 
    
    clearSimulation(state, action) {
      const {payload} = action;
      const simulation = state.simulations[payload.simulationId]
      simulation.simulationProducts = [];
      localStorage.setItem(
        `${payload.simulationId}`,
        JSON.stringify(simulation.simulationProducts))
      toast.error("Simulation cleared", { position: "bottom-left" });
    },
  },
});
//export the functions to be imported
export const { addToSimulation, decreaseSimulation, removeFromSimulation, getTotals, clearSimulation } = simulationSlice.actions;
export default simulationSlice.reducer;

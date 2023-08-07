import asyncHandler from "express-async-handler";
import Blisters from "../models/blisterModel.js";

// Obtenir tous les Blisters
const getAllBlisters = asyncHandler(async (req, res) => {
  const blisters = await Blisters.find();
  res.json({ blisters });
});

const addUpdateBlisters = asyncHandler(async (req, res) => {
  const { annee, nombres } = req.body;
  const existingBlisters = await Blisters.exists({ annee });
  if (existingBlisters){
    await Blisters.updateOne({annee : annee} , {nombres : nombres})
    res.end()
  }
  else 
  {const blisters = new Blisters({
    annee,
    nombres,
  });
  await blisters.save();

  res.end();}
});

const deleteBlisters = asyncHandler (async (req,res)=>{
  const id = req.params.id
  await Blisters.findByIdAndDelete(id);
  res.end();
})


export { getAllBlisters, addUpdateBlisters, deleteBlisters };
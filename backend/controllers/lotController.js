import asyncHandler from "express-async-handler";
import Lots from "../models/lotModel.js";

// Obtenir tous les lots
const getAllLots = asyncHandler(async (req, res) => {
  const lots = await Lots.find();
  res.json({ lots });
});

const addUpdateLots = asyncHandler(async (req, res) => {
  const { annee, nombres } = req.body;
  const existingLots = await Lots.exists({ annee });
  if (existingLots){
    await Lots.updateOne({annee : annee} , {nombres : nombres})
    res.end()
  }
  else 
  {const lots = new Lots({
    annee,
    nombres,
  });
  await lots.save();

  res.end();}
});

const deleteLots = asyncHandler (async (req,res)=>{
  const id = req.params.id
  await Lots.findByIdAndDelete(id);
  res.end();
})

export { getAllLots , addUpdateLots, deleteLots };

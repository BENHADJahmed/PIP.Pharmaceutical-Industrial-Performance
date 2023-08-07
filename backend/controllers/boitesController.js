import asyncHandler from "express-async-handler";
import Boites from "../models/boitesModel.js";

// Obtenir toutes les boîtes
const getAllBoites = asyncHandler(async (req, res) => {
  const boites = await Boites.find();
  res.json({ boites });
});

const addUpdateBoites = asyncHandler(async (req, res) => {
  const { annee, nombres } = req.body;
  const existingBoites = await Boites.exists({ annee });
  if (existingBoites){
    await Boites.updateOne({annee : annee} , {nombres : nombres})
    res.end()
  }
  else 
  {const boites = new Boites({
    annee,
    nombres,
  });
  await boites.save();

  res.end();}
});

const deleteBoites = asyncHandler (async (req,res)=>{
  const id = req.params.id
  await Boites.findByIdAndDelete(id);
  res.end();
})

export { getAllBoites , deleteBoites, addUpdateBoites };

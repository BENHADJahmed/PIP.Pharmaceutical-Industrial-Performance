import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// Obtient toutes les product
const getAllProduct = asyncHandler(async (req, res) => {
  const product = await Product.find();
  res.json({ product });
});

const addProduct = asyncHandler(async (req, res) => {
  const { name, temps1, temps2, img } = req.body;

  // Vérifie si un produit avec le même nom existe déjà
  const existingProduct = await Product.exists({ name });

  if (existingProduct) {  
    return res.end();
  }
  const product = new Product({
    name,
    temps1,
    temps2,
    img,
  });
  await product.save();

  res.end();
});

  const updateProduct = asyncHandler (async (req,res) =>{
      const id = req.params.id
      const { name, temps1, temps2, img } = req.body;
      await Product.findByIdAndUpdate(id , {
          name : name,
          temps1 : temps1,
          temps2 : temps2,
          img : img
      })
      res.end();
  })

  const deleteProduct = asyncHandler (async (req,res)=>{
    const id = req.params.id
    await Product.findByIdAndDelete(id);
    res.end();
  })


export { getAllProduct, addProduct, updateProduct, deleteProduct};
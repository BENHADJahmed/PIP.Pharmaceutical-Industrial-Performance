// api.js
import axios from 'axios';

export async function getAllBoites() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/getAllBoites');
    return response.data.boites;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAllLots() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/getAllLots');
    return response.data.lots;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAllBlisters() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/getAllBlisters');
    return response.data.blisters;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const deleteDataActivite = async (type, id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:5000/api/delete${type}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la suppression des données.');
  }
};

export const addOrUpdateDataActivite = async (type, data) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/api/addUpdate${type}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour des données.');
  }
};

export const getAllMachines = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/getAllMachines');
    return response.data.machines;
  } catch (error) {
    console.error(error);
    return []; // En cas d'erreur, renvoyer une liste vide
  }
};

export const updateProduct = async (itemId, formData) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/api/updateProduct/${itemId}`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('La mise à jour a échoué.'); // Vous pouvez personnaliser le message d'erreur si nécessaire
  }
};

export const deleteProduct = async (itemId) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:5000/api/deleteProduct/${itemId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('La suppression a échoué.'); // Vous pouvez personnaliser le message d'erreur si nécessaire
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/addProduct', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de l\'ajout du produit.'); // Vous pouvez personnaliser le message d'erreur si nécessaire
  }
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/getAllProduct');
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw new Error('Erreur lors de la récupération des produits.');
  }
};
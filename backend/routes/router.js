import express from "express"
import { getAllBoites , addUpdateBoites, deleteBoites } from "../controllers/boitesController.js"
import { getAllLots , addUpdateLots, deleteLots } from "../controllers/lotController.js"
import { getAllBlisters, addUpdateBlisters, deleteBlisters } from "../controllers/blisterController.js"
import { getAllMachines } from "../controllers/machineController.js"
import { getAllProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js"
import { addUser , getAllUser, compareUser } from "../controllers/userController.js"
const router = express.Router()

router.route('/api/getAllBoites').get(getAllBoites);
router.route('/api/getAllLots').get(getAllLots);
router.route('/api/getAllBlisters').get(getAllBlisters);
router.route('/api/getAllMachines').get(getAllMachines);
router.route('/api/getAllProduct').get(getAllProduct);
router.route('/api/addProduct').post(addProduct);
router.route('/api/updateProduct/:id').post(updateProduct);
router.route('/api/deleteProduct/:id').delete(deleteProduct);
router.route('/api/addUpdateBlisters').post(addUpdateBlisters);
router.route('/api/deleteBlisters/:id').delete(deleteBlisters);
router.route('/api/addUpdateBoites').post(addUpdateBoites);
router.route('/api/deleteBoites/:id').delete(deleteBoites);
router.route('/api/addUpdateLots').post(addUpdateLots);
router.route('/api/deleteLots/:id').delete(deleteLots);
router.route('/api/addUser').post(addUser);
router.route('/api/getAllUser').get(getAllUser);
router.route('/api/compareUser').post(compareUser);












export default router
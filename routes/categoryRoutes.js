import express from 'express'
import formidable from 'express-formidable';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController, categoryPhotoController } from "../controllers/categoryController.js"

const router = express.Router()

//routes
//create category
router.post('/create-category', requireSignIn, isAdmin, formidable(), createCategoryController);

// get photo 
router.get('/category-photo/:id', categoryPhotoController);

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

//getAll category
router.get('/get-category', categoryController);

//single category
router.get('/single-category/:slug', singleCategoryController);

//delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);

export default router
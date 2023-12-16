import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { photo } = req.files || {};  // Use default empty object if req.files is undefined

        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name required' });

            case photo && photo.size > 5000000:
                return res
                    .status(500)
                    .send({ error: "Photo is required and should be less than 5MB" });
        }

        const category = await new categoryModel({ ...req.fields, slug: slugify(name) });

        if (photo) {
            category.photo.data = fs.readFileSync(photo.path);
            category.photo.contentType = photo.type;
        }

        await category.save();

        res.status(201).send({
            success: true,
            message: "Category created successfully",
            category
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            error,
            message: 'Error in creating the category'
        });
    }
};

//updateCategoryController
export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        const { id } = req.params
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        res.status(200).send({
            success: true,
            message: 'Category Updated Successfully',
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Updating category',
            error,

        })
    }
};

//categoryController

export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: 'All Category list',
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in get All category',
            error,
        })
    }
};

//singleCategoryController

export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({
            success: true,
            message: 'Get Single Category Successfully',
            category,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Get error in single category',
            error,
        })
    }
};
//deleteCategoryController

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'Category Deleted Successfully',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Delete category',
            error,
        })
    }
}
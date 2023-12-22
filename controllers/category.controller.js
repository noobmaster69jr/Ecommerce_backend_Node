const categoryService = require('../services/category.service')
const getAllCategories = async (req, res) => {

    const response = await categoryService.getAllCategories();
    return res.json({
        message: 'Successfully fetched the category',
        success: true,
        "code": 200,
        data: response
    })
}

const getCategory = async (req, res) => {
    const response = await categoryService.getCategory(req.params.id)
    return res.json({
        message: "Successfully fetched a category",
        success: true,
        code: 200,
        data: response
    })
}

const createCategory = async (req, res) => {
    const response = await categoryService.createCategory(req.body)
    return res.json({
        message: "successfully created a new Category",
        success: true,
        code: 201,
        data: response
    })
}

const deleteCategory = async (req, res) => {
    const id = req.params.id
    await categoryService.deleteCategory(id);
    return res.json({
        message: "Successfully deleted a category",
        success: true,
        code: 200
    })
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory, 
    deleteCategory
}
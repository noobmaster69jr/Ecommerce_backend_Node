const categoryService = require('../services/category.service')
const getCategory = async (req, res) => {

    const response = await categoryService.getAllCategories();
    return res.json({
        message: 'Successfully fetched the category',
        success: true,
        "code": 200,
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
module.exports = {
    getCategory,
    createCategory
}
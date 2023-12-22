const Category = require('../models/index').Category

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
}

module.exports = {
    getAllCategories
}
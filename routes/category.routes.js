const categoryController = require('../controllers/category.controller')

const routes = (app) => {
    app.get('/ecom/api/v1/categories', categoryController.getAllCategories)
    app.post('/ecom/api/v1/categories', categoryController.createCategory)
    app.delete('/ecom/api/v1/categories/:id', categoryController.deleteCategory)
    app.get('/ecom/api/v1/categories/:id', categoryController.getCategory)
}

module.exports = routes;
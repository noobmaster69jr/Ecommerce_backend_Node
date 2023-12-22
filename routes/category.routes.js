const categoryController = require('../controllers/category.controller')

const routes = (app) => {
    app.get('/ecom/api/v1/categories', categoryController.getCategory)
    app.post('/ecom/api/v1/categories', categoryController.createCategory)
    app.delete('/ecom/api/v1/categories/:id', categoryController.deleteCategory)
}

module.exports = routes;
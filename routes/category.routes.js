const categoryController = require('../controllers/category.controller')

const routes = (app) => {
    app.get('/ecom/api/v1/categories', categoryController.getCategory)

}

module.exports = routes;
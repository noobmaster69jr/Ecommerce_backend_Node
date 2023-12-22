const getCategory = (req, res) => {

    return res.json({
        message: 'Successfully fetched the category',
        success: true,
        "code": 200,
        data: {
            "name": "electronics",
            "description": "dummy description"
        }
    })
}

module.exports = {
    getCategory
}
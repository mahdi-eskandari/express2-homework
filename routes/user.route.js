const express = require("express");
const {
    getAllProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteSingleProduct
} = require("../controllers/blogs.controller");
const router = express.Router();



router.get('/', getAllProduct)

router.get('/:id', getSingleProduct)

router.post('/', createProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteSingleProduct)


module.exports = router;
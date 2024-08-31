const Product = require('../models/Product'); // Adjust the path if necessary

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addProduct = async (req, res) => {
    const { name, prod_id, price, description } = req.body;
    const image = req.file.path; // If using multer for file uploads

    try {
        const newProduct = new Product({
            name,
            prod_id,
            price,
            description,
            image,
            images: req.files.map(file => file.path) // If using multer for multiple files
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

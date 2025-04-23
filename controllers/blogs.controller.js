let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

const getAllProduct = (req, res) => {
  res.status(200).json(products)
}


const getSingleProduct = (req, res) => {
  const productID = Number(req.params.id);
  const findProduct = products.find((ob) => ob.id === productID)
  if (findProduct) {
    res.status(200).json(findProduct)
    return
  }
  else {
    res.status(404).json({ msg: 'user not found' })
  }
}


const createProduct = (req, res) => {
  const { name } = req.body
  const price = Number(req.body.price)

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  }

  products.push(newProduct)
  res.status(200).json(newProduct)

}


const updateProduct = (req, res) => {
  const id = Number(req.params.id)
  const { name, price } = req.body

  const findProductId = products.find((ob) => ob.id === id)
  if (!findProductId) {
    res.status(404).json({ msg: 'not found' })
    return
  }

  if (name) {
    findProductId.name = name
  }
  if (price) {
    findProductId.price = price
  }
  res.status(200).json({ msg: 'products update', products })

  /*  👇👇ooooorrrrrrr   */

  // const { id } = req.params;

  // const updatedProduct = products.map((ob) => {
  //   if (Number(id) === ob.id) {
  //     return {
  //       ...ob,
  //       ...req.body,
  //     };
  //   }

  //   return ob;
  // });

  // products = updatedProduct;

  // res.status(200).json({ msg: 'products update', products })

}



const deleteSingleProduct = (req, res) => {
  const id = Number(req.params.id);

  const newBlogsData = products.filter((ob) => ob.id !== id);

  newBlogsData.forEach((product, index) => {
    product.id = index + 1;
  });
  products = newBlogsData;

  res.status(204).json({ msg: "Deleted Successfully" });
}

module.exports = { getAllProduct, getSingleProduct, createProduct, updateProduct, deleteSingleProduct };

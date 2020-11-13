import AsyncHandler from 'express-async-handler'
import Product from '../model/productModel.js'



// @desc Fetch all product
//@route Get /api/products
//@access Public Route
const getProduct = AsyncHandler(async(req,res) => { 

    const keyword = req.query.keyword ? { 
        name: {
            $regex: req.query.keyword, 
            $options: 'i'
        }
    } : { 

    }
                                        //spread the keyword empty or not
    const products = await Product.find({...keyword})
       
    res.json(products)


})




// @desc Fetch single product using req.params.id
//@route Get /api/products/:id
//@access Public Route
const getProductByID = AsyncHandler(async(req,res)=> { 

    const product = await Product.findById(req.params.id)

    if(product) { 
        res.json(product)
    } else { 
        res.status(404)
        throw new Error('Product not found')
    }

})

// @desc Delete a product
//@route Delete /api/products/:id
//@access Private Route
const deleteProduct = AsyncHandler(async(req,res)=> { 

    const product = await Product.findById(req.params.id)

    if(product) { 
        await product.remove()
        res.json({message: 'Product removed'})
    } else { 
        res.status(404)
        throw new Error('Product not found')
    }

})

// @desc Create a product
//@route POST /api/products/
//@access Private Route
const createProducts = AsyncHandler(async(req,res)=> { 

        //New product 
        const product = new Product({
            name: 'Sample name',
            price: '0',
            user: req.user._id,
            image: '/images/sample.jpg',
            brand: 'sample brand',
            category: 'sample category',
            countInStock: 0,
            numReviews: 0,
            description: 'sample description'
        })

        const createdProducts = await product.save()

        res.status(201).json(createdProducts)
})


// @desc Update a product
//@route PUT /api/products/:id
//@access Private Route
const updateProduct = AsyncHandler(async(req,res)=> { 


    const {name, price, description, image, brand,category, countInStock,} = req.body
        const product = await Product.findById(req.params.id)

            if(product) { 

                product.name = name
                product.price = price
                product.description = description
                product.image = image
                product.brand = brand
                product.category = category
                product.countInStock = countInStock

                const updatedProduct = await product.save()
                res.status(201).json(updatedProduct)
            } else { 
                res.status(404)
                throw new Error('product not found')
            }



})


//CREATE REVIEW  
// POST /API/products/:id/reviews
const productReview = AsyncHandler(async(req,res)=> { 

    const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)
    

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })

  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})



export {getProduct, getProductByID,deleteProduct,createProducts,updateProduct,productReview}
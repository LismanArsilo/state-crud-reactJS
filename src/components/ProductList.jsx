import { useState } from "react"
import ProductCard from "./ProductCard"

const ProductList = ({products, handleDeleteProduct, handleEditProduct}) => {

  return (
    <div className="grid grid-cols-4 gap-2 px-10">
      {
        products && products.map((product)=>{
          return (
            <ProductCard 
            key={product.id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProduct={handleEditProduct}
            />
          )
        })
      }
    </div>
  )
}

export default ProductList;
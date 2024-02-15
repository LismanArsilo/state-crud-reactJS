import { useState } from "react"
import Products from "./data/Products"
import ProductList from "./components/ProductList"
import ProductCreate from "./components/ProductCreate"
import { IoAddCircle } from "react-icons/io5";

function App() {
  const [products, setProducts] = useState(Products);
  const [createShow, setCreateShow] =useState(false);
  
  const handleShowAdd = (e)=>{
    e.preventDefault();
    setCreateShow(!createShow);
  }

  const handleCreateProduct = (product) =>{
    setProducts([...products, {id: Math.round(Math.random() * 77777), ...product}]);
    setCreateShow(!createShow);
  }

  const handleDeleteProduct = (id) => {
    const updateProduct = products.filter((product)=>{
      return product.id !== id
    });
    setProducts(updateProduct);
  }

  const handleEditProduct = (id, data) => {
    const updateProduct = products.map((prod)=>{
      if (prod.id == id){
       return {...prod, ...data}
      }else{
        return prod
      }
    });
    setProducts(updateProduct);
  }

  return (
    <div>
      <div className="text-center text-xl my-10">Car Collection</div>
      { createShow ||
        <div className="flex justify-end pr-10 my-5 py-5">
        <button className="flex items-center bg-blue-400 py-1 px-4 gap-2 rounded-lg text-lg" onClick={handleShowAdd}> <IoAddCircle />Add Car</button>
      </div>
      }
      {
        createShow && 
           <ProductCreate 
           handleShowAdd = {handleShowAdd}
           handleCreateProduct = {handleCreateProduct}
           />
      }
      <ProductList 
      products = {products}
      handleDeleteProduct = {handleDeleteProduct}
      handleEditProduct = {handleEditProduct}
    />
    </div>
  )
}

export default App

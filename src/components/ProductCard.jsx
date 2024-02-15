import { useState } from "react"
import ProductEdit from "./ProductEdit";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const ProductCard = ({product, handleDeleteProduct, handleEditProduct}) => {
  const [amountProduct, setAmountProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const {id, nama, deskripsi, url} = product;
  
  const decProduct = () => {
    setAmountProduct(amountProduct - 1);
  };
  const incProduct = () => {
    setAmountProduct(amountProduct + 1);
  }

  const handleShowEdit = (e) => {
    e.preventDefault();
    setShowEdit(!showEdit);
  }

  const handleDelete = () => {
    handleDeleteProduct(id)
  }

  return (
    <div className="relative rounded-md shadow-md border border-black w-12/12">
      {
        showEdit ? (
          <div>
            <ProductEdit 
            handleShowEdit = {handleShowEdit}
            handleEditProduct = {handleEditProduct}
            product={product}
            /> 
          </div>
        ) : (
        <>
          <div className="flex absolute gap-2 text-2xl justify-end right-2 top-2">
            <FaUserEdit 
            onClick = {handleShowEdit}
            className="cursor-pointer hover:scale-125 transition-all" 
            />
            <MdDeleteSweep 
            onClick={handleDelete}
            className="cursor-pointer hover:scale-125 transition-all" 
            />
          </div>
          <img src={url} alt="Image Car"  className="w-full h-56 rounded-t-md object-cover"/>
          <div className="flex flex-col p-5 gap-3">
            <p className="font-bold">{nama}</p>
            <p className="text-sm">{deskripsi}</p>
            <div className=" rounded-md">
            {amountProduct <= 0 ? (
              <button className="bg-blue-400 py-1 w-[100%]" onClick={incProduct}>+ Keranjang</button>
              ) :
              <div className="flex justify-center gap-4 border py-1 border-black rounded-md">
              <button onClick={decProduct}>-</button>
              <span>{amountProduct}</span>
              <button onClick={incProduct}>+</button>
              </div>
            }
            </div>
          </div>
        </>
      )
    }
    </div>
  )
}

export default ProductCard
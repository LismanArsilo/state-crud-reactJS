import React, { useState } from 'react'

const ProductEdit = ({handleShowEdit, product, handleEditProduct}) => {
  const initialState = {
    id: product.id,
    nama: product.nama,
    deskripsi: product.deskripsi,
    url: product.url
  }

  const [editProduct, setEditProduct] = useState(initialState);
  const {id, nama, deskripsi, url} = editProduct;

  const handleChange = (e) => {
    e.preventDefault();
    setEditProduct({...editProduct, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct(id, editProduct);
    handleShowEdit(e);
  }

  return (
    <div className='p-2 w-full flex justify-center'>
      <div className=' p-4 w-full'>
        <span className='text-center flex justify-center mb-3 font-bold'>Update Product</span>
        <form className='flex flex-col gap-3'>
          <div className=''>
            <input type="text" className='border border-blue-500 rounded-md p-2 w-full text-sm' placeholder='name' name='nama' value={nama} onChange={handleChange} />
          </div>
          <div>
            <input type="text" className='border border-blue-500 rounded-md p-2 w-full text-sm' placeholder='description' name='deskripsi' value={deskripsi} onChange={handleChange} />
          </div>
          <div>
            <input type="text" className='border border-blue-500 rounded-md p-2 w-full text-sm' placeholder='url' name='url' value={url} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-3'>
            <button onClick={handleShowEdit} className='bg-red-500 py-1 text-white rounded-lg'>Cancel</button>
            <button className='bg-blue-500 py-1 text-white rounded-lg' onClick={handleSubmit}>Save</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ProductEdit
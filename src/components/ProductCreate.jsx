import React, { useState } from 'react'

const ProductCreate = ({handleShowAdd, handleCreateProduct}) => {
  const initialState = {
    nama: '',
    deskripsi: '',
    url: ''
  }

  const [formData, setFormData] = useState(initialState);
  const {nama, deskripsi, url} = formData;
  
  const handleChange= (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateProduct(formData);
  }

  return (
    <div className='flex justify-center'>
      <form className='w-6/12 py-10 px-10 flex flex-col gap-3 mx-auto mt-3 mb-10'>
        <div className='flex justify-center'>
          <label htmlFor="" className='w-2/12'>Name</label>
          <input type="text" value={nama} onChange={handleChange} name='nama' className='border border-blue-500 px-2 py-1 text-sm rounded-md'/>
        </div>
        <div className='flex justify-center'>
          <label htmlFor="" className='w-2/12'>Desc</label>
          <input type="text" value={deskripsi} onChange={handleChange} name='deskripsi' className='border border-blue-500 px-2 py-1 text-sm rounded-md'/>
        </div>
        <div className='flex justify-center'>
          <label htmlFor="" className='w-2/12'>Url</label>
          <input type="text" value={url} onChange={handleChange} name='url' className='border border-blue-500 px-2 py-1 text-sm rounded-md'/>
        </div>
        <div className='flex gap-2 justify-end mr-[27%] mt-3'>
          <button className='bg-green-400 px-3 py-1 rounded-lg' onClick={handleSubmit}>Add Car</button>
          <button className='bg-red-400 px-3 py-1 rounded-lg' onClick={handleShowAdd}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default ProductCreate
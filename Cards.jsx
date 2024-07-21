import React, { createContext, useContext, useState } from 'react'



function Cards({item}) {

  return (
  <>
  
  <div className='mt-8 my-4 p-3'>
  <div className="card bg-white-100 w-90 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}
      <div className='badge badge-secondary'>{item.category}</div>
    </h2>
    <p>{item.title}</p>
 
   <div className="card-actions justify-between">
      <div className='badge badge-outline'>${item.price}</div>
      <div className='cursor-pointer px-2 py-1  hover:bg-pink-500 hover:text-black  duration-200'> <button className="btn btn-primary " >Buy Now</button> </div>
      
    </div>

  </div>
</div>
  </div>

  </>
  )
}

export default Cards




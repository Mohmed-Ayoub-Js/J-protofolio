import React from 'react'
import SwipeableTemporaryDrawer from './Drawer';

const Appbar = () => {
    const link = [
        {
            id:1,
            name:'تواصل معي',
            function:false,
        },
        {
            id:1,
            name:'خبرتي',
            function:false,
        },
    ]
    const imageAdress = "https://lh6.googleusercontent.com/uxZvhgFZ28v04rBheNg-0BFMT8wIUi-207hV7rGZFuxwPIQ7Gj9CzKKJ_KzOoTNaIrQBDxrB5G_Fxnp3M4_01wc=w16383";
  return (
    <div className='flex justify-between items-center p-1 shadow-lg' style={{zIndex:"9000"}}>
        <div className='flex justify-center items-center '>
            <img 
            src={imageAdress}
            alt="image"
            width={50}
            height={70}
            className='m-4'
            />
            <h1 className='md:text-[25px] text-bold'>
                تعريف مختصر عني
            </h1>
        </div>
        <div className='flex justify-center items-center'>
            <ul className='flex justify-center items-center gap-[30px]'>
                {link.map((data) => (
                    <ul key={data.id} style={{cursor:'pointer',transition:"0.5s"}} className='opacity-90 hover:opacity-100 hover:text-red-700 hover:underline transition-all '>
                        {data.name}
                    </ul>
                ))}
            </ul>
            <SwipeableTemporaryDrawer />
        </div>
    </div>
  )
}

export default Appbar
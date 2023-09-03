import React from 'react'
import Button from '@mui/material/Button';

const About = () => {
  const image = "./ImageA.png";
  return (
    <div className='bg-css-custom flex justify-center items-center p-10 flex-col md:flex-row' >
      <div className='flex justify-center items-center flex-col'>
      <h1 className='text-[50px] md:text-[30px] m-10 flex justify-center items-center'>
      حياكم الله في موقعي الخاص لمعرفة المزيد عني اقرأ تفاصيل الموقع
      </h1>        
      <Button variant="contained" className='w-[200px]'><p>تواصل معي</p></Button>

      </div>
      <div>
        <img 
        src={image}
        alt='i'
        />
      </div>
    </div>
  )
}

export default About
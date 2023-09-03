import React from 'react'
import BasicBars from './Charts'
const Skills = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-[40px]'>
          مهاراتي
        </h1>
      </div>
      <div>
        <BasicBars />
      </div>
    </div>
  )
}
export default Skills;
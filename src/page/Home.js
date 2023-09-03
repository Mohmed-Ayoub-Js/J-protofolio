import React from 'react'
import Appbar from '../Components/Appbar'
import About from '../Components/About'
import Divider from '@mui/material/Divider';
import ImageMe from '../Components/ImageMe';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Appbar />
        <About />
        <Divider />
        <ImageMe />
        <Divider style={{marginTop:10}}/>
        <Skills />
        <Divider />
        <Footer />
    </div>
  )
}

export default Home
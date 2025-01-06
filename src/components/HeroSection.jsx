import React from 'react'
import hero from "../assets/hero.jpg"
import GavelIcon from '@mui/icons-material/Gavel';
import Lottie from "lottie-react";
import gavelAnimation from "../assets/gavel.json"
import { Fade } from "react-awesome-reveal";
import { Typography } from '@mui/material';


const HeroSection = () => {
  return (
    <>
    <div style={{ height: '100vh', display:'flex', width:'100vw', justifyContent:'center', backgroundImage: `url(${hero})`, backgroundSize:'cover'}}>
      <div style={{alignSelf:'flex-end', display:'flex', fontSize:'30px', margin:'56px', marginBottom:'14rem'}}>
        <Fade direction="right" triggerOnce>
        <Typography variant='h1' sx={{fontSize:'80px', marginTop:'24px'}}>NSMM Legal</Typography>
        </Fade>  
        <Lottie animationData={gavelAnimation} loop="false" style={{height:'9rem'}}/>
      </div>
    </div>
    
    </>
  )
}

export default HeroSection
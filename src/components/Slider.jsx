import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import members from '../data/members.json'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const Slider = () => {
    const navigate = useNavigate();
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Matches small devices

  const howMany = isSmallScreen ? 1 : 3; 
  return (
   <>
   <div style={{margin:'48px', width:'auto'}}>
    <Swiper
      spaceBetween={50}
      slidesPerView={howMany}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000, // Time in ms between each slide transition (3000ms = 3 seconds)
        disableOnInteraction: false, // Allows autoplay to continue after user interaction
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {members.map((member, index) => (
        <SwiperSlide key={index}>
          <Card sx={{display:'flex', flexDirection:'column', alignItems:'flex-end', padding:'12px'}}>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
    <div style={{width:'inherit', display:'flex', flexDirection:'column'}}>
    <Button onClick={()=>navigate('/team')} sx={{alignSelf:'flex-end', marginTop:'12px'}}> <ArrowForwardIosIcon/>Our Team</Button>
    </div>
    </div>
   </>
  )
}

export default Slider
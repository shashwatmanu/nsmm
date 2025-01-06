import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BusinessIcon from '@mui/icons-material/Business';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useTheme, useMediaQuery } from '@mui/material';

const Menu = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Matches small devices

  const drawerWidth = isSmallScreen ? '60vw' : '30vw'; // Adjust width here
  return (
   <>
   <ul style={{width: drawerWidth}}>
                <div onClick={()=> navigate('/goals')} style={{cursor:'pointer'}}><h3>Misson</h3></div>
                <div onClick={()=> navigate('/team')} style={{cursor:'pointer'}}><h3>Team</h3></div>
                <div onClick={()=> navigate('/expertise')} style={{cursor:'pointer'}}><h3>Expertise</h3></div>
                <Fab variant='extended' onClick={()=>setShowDetails(!showDetails)}><div style={{cursor:'pointer'}}><h3>Contact Us</h3></div></Fab>
        {showDetails && <div style={{marginTop:'48px'}}>
          <div><BusinessIcon/> 121,Vinayak Apartments, C-58/19, Sector-62, Noida-201307 (U.P.)</div>
       <div><LocalPhoneIcon/> 0120-4117114</div>
       <div style={{display:'flex', flexDirection:'column'}}>
       
       <div style={{display:'flex'}}>

      <div><PhoneIphoneIcon/> </div>
      <div>
      <div> +91 8750289028 (Mukesh Mishra) </div>
       <div>+91 9868282032 (N.K. Sinha) </div>
       <div>+91 9873252703 (Kannu Duggal) </div>
       </div>
       </div>
       <div><AlternateEmailIcon/> nsmmlegal@gmail.com</div>
       </div>
       <b style={{position:'fixed', bottom:'24px'}}>Your satisfaction is our success!</b>
          </div>
          
          }
            </ul>
   </>
  )
}

export default Menu
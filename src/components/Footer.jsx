import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Footer = () => {
  return (<>
   <>
   <div>
       <hr/>
       <div style={{display:'flex', justifyContent:'space-between', padding:'24px', paddingLeft:'4rem', paddingRight:'4rem'}}>
        <div>
       <h3>Contact Us:</h3>
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
</div>
       <div><AlternateEmailIcon/> nsmmlegal@gmail.com</div>
       </div>
       <b style={{alignSelf:'center'}}>Your satisfaction is our success!</b>
       </div>
   </div>
   </>
  </>
    
  )
}

export default Footer
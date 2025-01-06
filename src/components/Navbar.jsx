import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const Navbar = ({isHomePage}) => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };


  return (
    <>
    <nav>
        <div style={{display: 'flex', width:'100vw', justifyContent:'space-between', height:'40px', position:isHomePage?'fixed':'', cursor: 'pointer'}}>
            <div style={{alignSelf:'center', marginLeft:'8px'}} onClick={()=>navigate('/')}><h1>NSMM</h1></div>
            <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon fontSize='large'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        <Menu/>
      </Drawer>
    </div>
            </div>
      </nav>
    </>
  )
}

export default Navbar
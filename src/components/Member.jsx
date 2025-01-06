import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const Member = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Card elevation={3} sx={{ width:'400px', backgroundColor:'secondary.main', height:'300px', marginBottom: '48px', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px'}}>
      <div style={{display:'flex', width:'100%', height:'90%'}}>
      <CardContent sx={{alignSelf:'flex-end', display:'flex', justifyContent:'space-between', width:'100%'}}>
      <div>{data.name}</div>
      <div>{data.position}</div>
      </CardContent>
      </div>
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Learn More</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{position: 'absolute',
          top: '50%',
          left: '50%',
           transform: 'translate(-50%, -50%)'}}> 
      <Card sx={{padding:'20px'}}>{data.about}</Card>
        </div>
      </Modal>
      </CardActions>
      </div>
    </Card>
    </>
  )
}

export default Member
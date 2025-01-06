import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Area = ({data}) => {
  return (
    <>
     <Card sx={{ width:'400px', backgroundColor:'secondary.main', marginBottom: '48px', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px'}}>
      <CardContent>
      <h3>{data.name}</h3>
      {data.description}
      </CardContent>
    </Card>
    </>
  )
}

export default Area
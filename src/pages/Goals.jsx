import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Paper from '@mui/material/Paper';
import { Fade } from "react-awesome-reveal";
import { useTheme, useMediaQuery } from '@mui/material';

const Goals = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Matches small devices

  const paperWidth = isSmallScreen ? '80%' : '50%';;
  return (
    <>
    <Navbar/>
    <div style={{display:'flex', alignItems:'center', height:'auto', flexDirection:'column', justifyContent:'center', minHeight:'100vh'}}>
    <Paper elevation={3} sx={{maxWidth: paperWidth, padding: '20px', height:'auto'}}>
      <h1 style={{textAlign:'center'}}>Our Goals</h1>
      <Fade delay={700}>
      <p>Our Goal is to treat our clients as more than just an isolated business or service transaction. We are committed to:</p>
      </Fade>
      <Fade cascade damping={1} delay={2000}>
      <ul>
        <li>developing positive, sharing and productive lifelong relationships with our clients and their families</li>
        <li>taking the time necessary to understand and learn from our clients</li>
        <li>being empathetic to better serve their needs</li>
        <li>anticipating the problems and issues they may face, both personally and in business</li>
        <li>working with our clients as efficiently as we can to reduce their costs</li>
        <li>providing timely and reliable service that is focused and sensitive to our clients’ specific needs and instructions</li>
        <li>continuously look for opportunities to add value to our services</li>
        <li>anticipating risks that clients may encounter and advising clients how best to manage such risks before they arise</li>
        <li>providing information, support and additional services to make our clients’ lives, and businesses, better</li>
        
        <li>processing every client file or matter we handle by identifying a “service solution,” as follows:</li>
        </ul>
        </Fade>
        <Fade cascade damping={1} delay={12000}>
        <ul>
        <ul>
        <li>identifying, with the client’s agreement, what the client needs and how we will provide it</li>
        <li>identifying the associated legal costs for the service to be provided and, if necessary, the non-legal costs associated with delivering
the solution</li>
        <li>identifying the timeframe in which the services will be delivered to the client; and</li>
        <li>updating the “service solution” for the client each and every time one of these elements' changes, as they sometimes do, so our
clients are always clear on what we are doing for them, when services will be completed and how much they will cost.</li>
        </ul>
        </ul>
        </Fade>
      
      
    </Paper>
    </div>
    <Footer/>
    </>
  )
}

export default Goals
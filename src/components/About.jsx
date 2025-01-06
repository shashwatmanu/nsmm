import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{margin:'24px', height:'auto', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'48px', marginRight:'48px', flexDirection:'column', minHeight:'50vh'}}>
      <p>
      NSMM Legal is a multi-practice law firm providing corporate, litigation, environmental and
regulatory legal services to individuals, firms, corporates and Public Sector Units etc.
NSMM Legal is also providing services in the areas of Arbitration, Alternative Dispute
Resolution, Corporate and Commercial laws, Securities laws, Tax laws, Consumer rights,
Family law, Service law, Environment law, Information Technology and Intellectual Property
including all aspects of general litigation, drafting / vetting of documents, commercial
negotiations and dispute settlements, contracts and due diligence.
The philosophy of the firm is to partner with clients and therefore, the firm consciously
invests in building client relationships, demonstrated in part by the high levels of
commitment that the firm brings to the table. Our pragmatic and business-oriented approach
to problem solving translates into comprehensive and cost-effective legal services.
The firm offers viable solutions to legal problem with alacrity of youthfulness combined with
vast experience and rich knowledge in legal and financial matters.
      </p>

      <div style={{alignSelf:'flex-end', display:'flex'}}>
        <Button onClick={()=>navigate('/expertise')}> <ArrowForwardIosIcon/>Our Areas of Practice</Button>
      </div>
    </div>
    </>
  )
}

export default About
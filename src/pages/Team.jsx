import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import members from '../data/members'
import Member from '../components/Member'

const Team = () => {
  return (
   <>
   <Navbar/>
   <div style={{margin:'24px', padding:'20px'}}>
    <h2 style={{textAlign:'center'}}>Our Team</h2>

    <p>In our endeavour to provide value added services to our clients and services that distinguish us from
other law firms; we recognize the importance of an efficient and reliable team.</p>
    <p>The lawyers of our Law Firm are committed to providing the highest quality legal services. The
commitment, knowledge, experience and professionalism our lawyers possess and continue to develop,
allows us to provide our clients with outstanding service.</p>
    <p>The Firm is run and managed by a team of well qualified, competent and experienced advocates and
solicitors. Every associate is working meticulously with the Firm to provide proficient, proactive and
dedicated professional services to its clients.</p>
    <p>It has always been ensured that the associates not only possess strong legal acumen but also the
diligence and commercial understanding required to meet client expectations and offer reliable and
business oriented legal solutions.</p>
<p>We pride ourselves on our long-standing client relationships, and we look for candidates who are
consummate professionals to foster those relationships, and who also have the ability to build and
retain new client contacts. We value resourcefulness, creativity and energy. Our lawyers’ experience and
education demonstrate enthusiasm and commitment to their chosen field.</p>

{/* <h2>Key Persons:</h2> */}
<div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'48px'}}>
{members.map((member, index) => {
  return <Member key={index} data={member}/>
})}
</div>

   </div>

   <Footer/>
   </>
  )
}

export default Team
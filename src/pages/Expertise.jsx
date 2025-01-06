import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Area from '../components/Area'
import areas from "../data/areas.json"

const Expertise = () => {
  return (
    <>
    <Navbar/>
    <div style={{padding:'48px'}}>
      <h1 style={{textAlign:'center'}}>Areas of Practice</h1>
      <p>NSMM Legal is representing its clients in National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), Labour Court, Consumer court, Quasi-judicial authorities, District Courts and Hon’ble High Court at Delhi.</p>
      <p>We hold vast expertise in handling the matters pertaining to Arbitration Act, Banking, Finance and Insurance, Corporate Commercial Advisory, Corporate Insolvency And Restructuring, Consumer Disputes, Environment and Natural Resource Protection, Industrial and Labour Disputes, Matrimonial and Family Disputes, Negotiable Instrument Act, Service Jurisprudence Title Search and Conveyancing, Wildlife protection Act, All sorts of Civil, Criminal and Commercial Litigation, Tax matters</p>
      <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'48px'}}>
      {areas.map((area, index) => {
        return <Area key={index} data={area}/>
      })}
      </div> 
    </div>
    <Footer/>
    </>
  )
}

export default Expertise
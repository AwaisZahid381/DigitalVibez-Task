import React from 'react'
import "./send.css";

const Sender = (props) => {
    console.log(props.s)
  return (
    <>

    <div className="bigcard">
    <p>Code</p>
    <div className="card">
        <div className="header">
            <h1>{props.s.off}</h1>
        </div>
        <div className="others">
            <h2 className='head12'>{props.s.head1}</h2>
            <h5 className='head15'>{props.s.verfiy}</h5>
            <div className="buttons">
                <div className="anbut">
                <button className='bigbut bb'>{props.s.coup}</button>
                <button className='bigbut2 bb'>{props.s.shcoup}</button>
                </div>
                <p className='mainpara'>See Details <span className='spani'>&#8628;</span></p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Sender
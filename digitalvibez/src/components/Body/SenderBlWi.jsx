import React from 'react'
import "./sendblwi.css";

const SenderBlWi = (props) => {
  return (<>

   <div className="bigcard">
    <p>Code</p>
    <div className="BWcard">
        <div className="BWheader">
            <h1>{props.s.off}</h1>
        </div>
        <div className="BWothers">
            <h2 className='BWhead12'>{props.s.head1}</h2>
            <h5 className='BWhead15'>{props.s.verfiy}</h5>
            <div className="BWbuttons">
                <div className="BWanbut">
                <button className='BWbigbut BWbb'>{props.s.coup}</button>
                <button className='BWbigbut2 BWbb'>{props.s.shcoup}</button>
                </div>
                <p>See Details <span className='BWspani'>&#8628;</span></p>
            </div>
        </div>
    </div>
    </div>
  </>
  )
}

export default SenderBlWi
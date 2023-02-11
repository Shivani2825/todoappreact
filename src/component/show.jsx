import React from 'react'

function Show(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-6 p-2">
                <h6>{props.task}</h6>
            </div>
            <div className="col-6 p-2">
                            <button className='btn btn-danger' onClick={()=>{
                    props.onSelect(props.id)
                }}>X</button>
            </div>
        </div>
      
    </div>
  )
}

export default Show

import React from 'react'

function Input() {
  return (
    
    <div>
        <div className="h2">input</div>
        <input value={'small'} className='form-control form-control-sm mt-2 mb-2' />
        <input value={'medium'} className='form-control mb-2' />
        <input value={'large'} className='form-control form-control-lg' />
    </div>
  )
}

export default Input
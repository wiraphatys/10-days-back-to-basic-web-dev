import React from 'react'

function InputGroup() {
  return (
    <div>
        <div className='h2'>Input Group</div>
        <div className='input-group'>
            <label className='input-group-text'>Username</label>
            <input value={'username'} type="text" className='form-control' />
        </div>
        <div className='input-group mt-2'>
              <label className='input-group-text'>Password</label>
              <input value={'10523050'} type="password" className='form-control' />
        </div>
        <button className='btn btn-primary mt-2'>sign in</button>
    </div>
  )
}

export default InputGroup
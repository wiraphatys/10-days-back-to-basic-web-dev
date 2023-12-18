import React, { useState } from 'react'
import Menu from '../components/Menu';

function MyInput() {
    const [message, setMessage] = useState();
  return (
    <>
        <Menu />
        <input onChange={e => setMessage(e.target.value)} />
        <div>message = {message}</div>
    </>
  )
}

export default MyInput
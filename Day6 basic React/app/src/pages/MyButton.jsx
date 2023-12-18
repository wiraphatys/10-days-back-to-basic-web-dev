import React, { useState } from 'react'

function MyButton() {
    let [x, setX] = useState(0);
    return (
        <div>
            <div>x = {x}</div>
            <button onClick={e => setX(x++)}>Click here</button>
        </div>
    )
}

export default MyButton
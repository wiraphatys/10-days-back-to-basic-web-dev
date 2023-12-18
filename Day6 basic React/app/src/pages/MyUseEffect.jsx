import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function MyUseEffect() {
    useEffect(() => {
        console.log('start component');
    })

    const handleShowAlert = () => {
        Swal.fire({
            title: 'my title',
            text: 'my text',
            icon: 'success' //success info warning danger question
        })
    }
    return (
        <div>
            <h3>Use Effect</h3>
            <button onClick={handleShowAlert}>click for show alert</button>
        </div>
    )
}

export default MyUseEffect
import React from 'react'

function MyForm() {
    const save = (e) => {
        e.preventDefault();
        console.log("submit successfully")
    }
    return (
        <div>
            <form onSubmit={save}>
                <input type="text" style={{padding: '20px', color: 'blue', fontSize: '100px'}} />
                <button onClick={save} type='submit'>submit</button>
            </form>
        </div>
    )
}

export default MyForm
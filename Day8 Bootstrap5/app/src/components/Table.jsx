import React from 'react'

function Table() {
    return (
        <div>
            <table className='table table-bordered table-striped mt-2'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>E0001</th>
                        <th>Banky</th>
                        <th>0987654321</th>
                    </tr>
                    <tr>
                        <th>E0001</th>
                        <th>Banky</th>
                        <th>0987654321</th>
                    </tr>
                    <tr>
                        <th>E0001</th>
                        <th>Banky</th>
                        <th>0987654321</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
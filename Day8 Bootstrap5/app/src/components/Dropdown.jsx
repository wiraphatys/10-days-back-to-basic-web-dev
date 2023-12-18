import React from 'react'

function Dropdown() {
  return (
    <div>
        <div className="dropdown mt-4">
              <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
              </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li><span className='dropdown-item'>first</span></li>
                <li><span className='dropdown-item'>second</span></li>
                <li><span className='dropdown-item'>third</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown
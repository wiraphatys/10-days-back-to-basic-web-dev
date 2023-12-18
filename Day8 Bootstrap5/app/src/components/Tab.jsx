import React from 'react'

function Tab() {
  return (
    <div>
          <ul class="nav nav-tabs mt-4">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
          </ul>
    </div>
  )
}

export default Tab
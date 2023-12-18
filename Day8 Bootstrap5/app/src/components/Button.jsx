import React from 'react'

function Button() {
  return (
    <div>
          <div class="h1 text-center text-primary">Hello Bootstrap</div>
          <div class="h2">Button Color</div>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-danger">Danger</button>
          <button class="btn btn-warning">Warning</button>

          <div class="h2 mt-4">Button Size</div>
          <button class="btn btn-primary btn-sm">btn-sm</button>
          <button class="btn btn-primary">btn</button>
          <button class="btn btn-primary btn-lg">btn-lg</button>
    </div>
  )
}

export default Button
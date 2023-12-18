import React from 'react'

function Responsive() {
  return (
    <div>
        <div className="row mt-4">
            {/* max col is 12 for each line */}
            <div className="col-3 bg-primary">cell 1</div>
            <div className="col-3 bg-info">cell 2</div>
            <div className="col-3 bg-danger">cell 3</div>
            <div className="col-3 bg-warning">cell 4</div>
        </div>
    </div>
  )
}

export default Responsive
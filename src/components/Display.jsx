import React from 'react'
import './Display.css'
const Display = () => {
  return (
    <div>
      <div className="div bg-black p-5 rounded shadow-lg">
         <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
         <label class="btn btn-primary" for="option2">All</label>
         <label class="btn btn-warning" for="option2">Happy</label>
         <label class="btn btn-info" for="option2">Lazy</label>
         <p className='para'> O movies found
         </p>
         <hr/>
      </div>
    </div>
  )
}

export default Display

import React from 'react'

const Backend = () => {
  return (
    <div className="skills-content">
    <h3 className='skills-title'>Backend Developer</h3>

    <div className="skills-box">
      <div className="skills-group">
        <div className="skills-data">
          <i className="bx bx-badge-check"></i>

          <div> 
            <h3 className='skills-name'>PHP</h3>
            <span className="skills-level">Basic</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="bx bx-badge-check"></i>

          <div> 
            <h3 className='skills-name'>Mongo DB</h3>
            <span className="skills-level">Advanced</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="bx bx-badge-check"></i>

          <div> 
            <h3 className='skills-name'>Express</h3>
            <span className="skills-level">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Backend
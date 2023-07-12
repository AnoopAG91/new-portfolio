import React from 'react'
import Navbar from '../Navbar/Navbar'
import './projects.css'

function Projects() {
  return (
    <div className='projects'>
        <Navbar/>
        <div className='projects-header'>
          <h1>My Projects</h1>
        </div>
        <div className='projects-hero'>
          <div className='pro-sec1'>
            <div className='pro1'>
              <img src={"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=500"}/>
              <div className='pro-text'>
              <h3>Twitter Clone</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <button>Click here</button>
            </div>
            <div className='pro2'>
            <img src={"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=500"}/>
            <div className='pro-text'>
              <h3>Kanban</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button>Click here</button>
            </div>
         </div>

         <div className='pro-sec2'>
            <div className='pro3'>
            <img src={"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=500"}/>
            <div className='pro-text'>
              <h3>Gym website</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
             <button>Click here</button>
            </div>
            <div className='pro4'>
            <img src={"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=500"}/>
            <div className='pro-text'>
              <h3>Portfolio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
               <button>Click here</button>
            </div>
         </div>
        </div>

    </div>
  )
}

export default Projects
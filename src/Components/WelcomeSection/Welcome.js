import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcomeSection'>
      <img src="/imgs/shyLuka.png" alt="" className='welcome-luka' />
      <div className="title-container">
        <img src="/imgs/Logoluka.png" alt="" className='welcome-logo'/>
        <div className="title-blurb-container">
          <h1 className="fanboy-title">FANBOY PAGE</h1>
          <h2 className="blurb">This page is dedicated to my favorite Vocaloid</h2>
          <p className="first-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut ad nostrum voluptatem aperiam porro laboriosam expedita labore deserunt explicabo minima beatae nobis provident, adipisci quibusdam ullam! Rem, quos nemo!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome

import React from 'react'
import underConstruction from '../Images/under-construction.svg'

const Portfolio= () => {
  return (
    <div style={{
      background:'black', 
      height:'100vh',
      width:'100vw',
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center'
    }}>
        <h1 style={{
          color:'#880808',
          padding: '50px'
          }}>
            Under Construction
          </h1>
        <img 
          src={underConstruction} 
          style={{
            'max-width':'90%',
            'max-height':'50%'
          }}
        />
    </div>
  )
}

export default Portfolio
import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Receba ofertas exclusivas</h1>
        <p>Se inscreva para ficar atualizado</p>
        <div>
            <input type="email" placeholder='Email' />
            <button>Increva-se</button>
        </div>
    </div>
  )
}

export default NewsLetter
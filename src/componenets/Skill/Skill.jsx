import React from 'react'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import WIND from '../../assets/tailwind.png'
import JS from '../../assets/javascript.png'
import REACT from '../../assets/react.jpg'
import NATIVE from '../../assets/reactNative.png'
import TS from '../../assets/ts.png'
import NEXT from '../../assets/mynext.png'
import './skill.css'

const Skill = () => {
  return (
    <div>
        <div className='skill' id='skill'>
            <h1>Skill</h1>
            <p>I have honed expertise in :</p>
               <div className='floating-images-container'>
                  <img src={HTML} alt="" className='floating-image'/>
                  <img src={CSS} alt="" className='floating-image'/>
                  <img src={JS} alt=""className='floating-image' />
                  <img src={REACT} alt=""className='floating-image' />
                  <img src={WIND} alt="" className='floating-image'/>
                  <img src={NATIVE} alt="" className='floating-image'/>
                  <img src={TS} alt=""className='floating-image' />
                  <img src={NEXT} alt="" className='floating-image'/>
              </div>
        </div>
    </div>
  )
}

export default Skill
import React, {useState} from 'react'
import Image from './Image.jsx'
import styled from 'styled-components'
import {LeftArrow, RightArrow, Pictures, Slider} from './styled.js'


const ImageList = (props) => {
const [pic, setPic] = useState(0)
const length = props.data.length;

const nextSlide = () => {
  console.log(pic)
  pic === -100 * (props.data.length -1) ? setPic(0) : setPic(pic - 100)
}

const prevSlide = () => {
  console.log(pic)
  pic === 0 ? setPic(-100 * (props.data.length-1)) : setPic(pic + 100)
}
  return(
    <div className='slider'>
      <LeftArrow id='prev' onClick={prevSlide}/>
      <RightArrow id='next' onClick={nextSlide}/>
      {props.data.map((image, id) => {
        return (
          <div className='slide' key={id} style={{transform: `translateX(${pic}%)`}}>
           <Image image={image} key={id}/>
          </div>

        )
      })}
    </div>
  );
}

export default ImageList;
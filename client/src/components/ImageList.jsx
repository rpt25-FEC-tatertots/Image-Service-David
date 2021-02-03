import React, {useState, useEffect, useRef} from 'react'
import Image from './Image.jsx'
import styled from 'styled-components'
import {LeftArrow, RightArrow, Pictures, Slider} from './styled.js'


const ImageList = (props) => {
const [pic, setPic] = useState(-50)
const length = props.data.length;
const [slide, setSlide] = useState(true)
const [prev, setPrev] = useState(0);

// const usePrevious = (value) => {
//   const ref = useRef();

//   useEffect(() => {
//     ref.current = value;
//   });

//   return ref.current;
// }

// const previous = usePrevious(pic);

// useEffect(() => {
//   console.log('useEFFECT', pic)

//   if(pic === 0) {
//     setSlide(false)
//   } else {
//     setSlide(true)
//   }
// });

const nextSlide = () => {
  pic === ((length * -100) -50)? setPic(-50) : setPic(pic => pic-100);

}

const prevSlide = () => {
  pic === 50 ? setPic((-100 * (length)) -50) : setPic(pic => pic + 100)


}

  return(
    <div className='slider'>

      <LeftArrow onClick={prevSlide}>&lt;</LeftArrow>
      <RightArrow id='next' onClick={nextSlide}>&gt;</RightArrow>

      <div key={-1} className={pic === -50 ? null: 'slide'} style={{transform: `translateX(${pic}%)`}}>
        <img src={props.data[length-1]} className='image'/>
      </div>

      {props.data.map((image, id) => {
        return (
          <div className={pic === -50 ? null: 'slide'} key={id+100} style={{transform: `translateX(${pic}%)`}}>

            <Image image={image} key={id+1}/>

          </div>

        )
      })}

      <div key={props.data.length} className={pic === -50 ? null: 'slide'} style={{transform: `translateX(${pic}%)`}}>
        <img src={props.data[0]} key={props.data.length+2}className='image'/>

      </div>

    </div>
  );
}



export default ImageList;
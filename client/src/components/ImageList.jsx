import React from 'react'
//import styled from 'styled-components'

const ImageWrapper = window.styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ImageSlider = window.styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;
const Image = window.styled.img`

width: 55%;
@media (max-width: 767px) {
  width: 100%
}
`;
const NextArrow = window.styled.div`
position: absolute;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 2em;
right: 4rem;
width: 50px;
height: 50px;
border-radius: 50%;
font-style: bold;
color: black;
background-color: white;
@media (max-width: 767px) {
  display: none;
}
`;
const PrevArrow = window.styled.div`
position: absolute;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 2em;
left: 4rem;
width: 50px;
height: 50px;
border-radius: 50%;
font-style: bold;
color: black;
background-color: white;
@media (max-width: 767px) {
  display: none;
}
`;

const ImageList = ({data, active, slideNext, slidePrev}) => {

  const prev = active === 0 ? data.length - 1 : (active - 1);
  const next = active === data.length - 1 ? 0 : (active + 1);
  return (
    <ImageWrapper>
      <PrevArrow onClick={() => slidePrev()} className="material-icons">keyboard_arrow_left</PrevArrow>
      <ImageSlider>
        <Image src={data[prev]} alt="image" />
        <Image src={data[active]} alt="image" />
        <Image src={data[next]} alt="image" />
      </ImageSlider>
      <NextArrow onClick={() => slideNext()} className="material-icons">keyboard_arrow_right</NextArrow>
    </ImageWrapper>
  )
}

export default ImageList;

import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ImageSlider = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;
const Image = styled.img`
width: 66%;
@media (max-width: 767px) {
  width: 100%
}
`;
const NextArrow = styled.div`
position: absolute;
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
const PrevArrow = styled.div`
position: absolute;
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

  const prev = active === 0 ? data.length - 1 : active - 1;
  const next = active === data.length - 1 ? 0 : active + 1;
  return (
    <ImageWrapper>
      <PrevArrow onClick={() => slidePrev()}>&lt;</PrevArrow>
      <ImageSlider>
        <Image src={data[prev]} alt="image" />
        <Image src={data[active]} alt="image" />
        <Image src={data[next]} alt="image" />
      </ImageSlider>
      <NextArrow onClick={() => slideNext()}>&gt;</NextArrow>
    </ImageWrapper>
  )
}

export default ImageList;

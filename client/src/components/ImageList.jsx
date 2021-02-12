import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`

`;
const ImageSlider = styled.div`
display: flex;
flex-wrap: none;
`;
const Image = styled.img`
`;
const Arrow = styled.div`
border-radius: 50%;
color: black;
background-color: white;
`;

const ImageList = ({data, active}) => {
  return (
    <ImageWrapper>
      <Arrow>&#60</Arrow>
      <ImageSlider>
        {data.map((url, i) => {
          return (<Image src={url} alt="Image" />)
        })}
      </ImageSlider>
      <Arrow>&#60</Arrow>
    </ImageWrapper>
  )
}

export default ImageList;

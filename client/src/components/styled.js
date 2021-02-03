import styled from 'styled-components'
import {ChevronRightCircle, ChevronLeftCircle} from '@styled-icons/boxicons-solid/'

const Slider = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Picture = styled.img`
  width:1000px;
  height: 600px;
  border-radius:10px;
`

const RightArrow = styled.button `
border-radius:50%;
background-color:white;
position: absolute;
height:50px;
width: 50px;
outline:none;
border: none;
font-weight: bold;
right: 32px;
font-size: 25px;
z-index:100;
cursor:pointer;
user-select: none;
`

const LeftArrow = styled.button `
  border-radius:50%;
  background-color:white;
  position: absolute;
  height:50px;
  width: 50px;
  outline:none;
  border: none;
  font-weight: bold;
  left: 32px;
  font-size: 25px;
  z-index:100;
  cursor:pointer;
  user-select: none;
`
export {
  LeftArrow,
  RightArrow,
  Picture,
  Slider
}

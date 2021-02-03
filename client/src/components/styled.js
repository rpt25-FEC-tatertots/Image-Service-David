import styled from 'styled-components'
import {ChevronRight, ChevronLeft} from '@styled-icons/boxicons-regular/'

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

const RightArrow = styled(ChevronRight) `
position: absolute;
height:10%;
width: 10%;
  right: 32px;
  font-size: 10px;
  color: #000;
  z-index:100;
  cursor:pointer;
  user-select: none;
  `

const LeftArrow = styled(ChevronLeft) `
position: absolute;
height:10%;
width: 10%;
  left: 32px;
  font-size: 10px;
  color: #000;
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

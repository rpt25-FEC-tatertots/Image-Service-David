import Image from './Image.jsx'

const ImageList = (props) => {
  return(
    <div>
      {props.data.map((image, id) => <Image image={image} key={id}/>)}

    </div>
  )
}

export default ImageList;
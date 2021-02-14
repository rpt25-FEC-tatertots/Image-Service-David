const axios = require('axios')
import ImageList from './components/Imagelist.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImages: ['https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fgoose%2Fgoose-08.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lQb88AzJ0ybvX9_AITaucAHaHa%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lQb88AzJ0ybvX9_AITaucAHaHa%26pid%3DApi&f=1'],
      activeImageIndex: 0
    }
    this.slideNext = this.slideNext.bind(this);
    this.slidePrev = this.slidePrev.bind(this);
  }
slideNext() {
  const { activeImageIndex, mainImages } = this.state;
  if (activeImageIndex === mainImages.length - 1) {
    this.setState({ activeImageIndex: 0 });
  } else {
    this.setState({ activeImageIndex: activeImageIndex + 1 })
  }
}
slidePrev() {
  const { activeImageIndex, mainImages } = this.state;
  if (activeImageIndex === 0) {
    this.setState({ activeImageIndex: mainImages.length - 1 });
  } else {
    this.setState({ activeImageIndex: activeImageIndex - 1 });
  }
}
componentDidMount() {
  window.addEventListener('hashchange', () => {
    let activeImageIndex = parseInt(window.location.hash.split("&")[1].split("=")[1])
    this.setState({ activeImageIndex })
  })
  axios.get(`/images/mainImages${window.location.pathname}`)
    .then(response => {
      if(response.data) {
        this.setState({mainImages: response.data.mainImages})
      }
    })
    .catch( (error) => {
      console.log(error)
    })
}
componentWillUnmount() {
  window.removeEventListener('hashchange',() => {
    let activeImageIndex = parseInt(window.location.hash.split("&")[1].split("=")[1])
    this.setState({ activeImageIndex })
  });
}


render() {
  const { mainImages, activeImageIndex } = this.state;
  return (
    <div>
      <ImageList
      data={mainImages}
      active={activeImageIndex}
      slidePrev={this.slidePrev}
      slideNext={this.slideNext}
      />
    </div>
    )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
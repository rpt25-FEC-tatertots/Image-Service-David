const axios = require('axios')
import ImageList from './components/Imagelist.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImages: [],
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
    let activeImageIndex = window.location.hash.split("&")[1].split("=")[1]
    this.setState({ activeImageIndex })
  })
  axios.get(`/images/mainImages${window.location.pathname}`)
    .then(response => {
      this.setState({mainImages: response.data.mainImages})
    })
    .catch( (error) => {
      console.log(error)
    })
}
componentWillUnmount() {
  window.removeEventListener('hashchange')
}


render() {
  return (
    <div>
      <ImageList
      data={this.state.mainImages}
      active={this.state.activeImageIndex}
      slidePrev={this.slidePrev}
      slideNext={this.slideNext}
      />
    </div>
    )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
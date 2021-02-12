const axios = require('axios')
import ImageList from './components/Imagelist.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImages: []
    }
  }

componentDidMount() {
  axios.get(`/images/mainImages${window.location.pathname}`)
    .then(response => {
      this.setState({mainImages: response.data.mainImages})
    })
    .catch( (error) => {
      console.log(error)
    })
}


render() {
  return (
    <div>
      <ImageList data={this.state.mainImages}/>
    </div>
    )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
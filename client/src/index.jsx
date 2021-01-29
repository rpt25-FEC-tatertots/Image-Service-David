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
  axios.get('/images/mainImages/3')
    .then(response => {
      console.log(response.data.mainImages)
      this.setState({mainImages: response.data.mainImages}, ()=> {console.log(this.state.mainImages)})
    })
    .catch( (error) => {
      console.log(error)
    })
}


render() {
  return (
    <div>
      <div>Image Service Tater Tots</div>
      <ImageList data={this.state.mainImages}/>

    </div>
    )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
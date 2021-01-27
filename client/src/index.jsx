const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

componentDidMount() {
  axios.get('/images/mainImages/3')
    .then(response => {
      console.log(response.data.mainImages)
      this.setState({images: response.data.mainImages}, ()=> {console.log(this.state.images)})
    })
    .catch( (error) => {
      console.log(error)
    })
}


render() {
  return (
    <div>Image Service Tater Tots</div>
  )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
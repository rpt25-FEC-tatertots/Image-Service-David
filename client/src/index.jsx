const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

componentDidMount() {
  axios.get('/images/mainImages/3')
    .then(response => console.log(response))
  axios.get('/images/detailImages/3')
    .then(response => console.log(response))
    axios.get('/images/thumbnailImages/3')
    .then(response => console.log(response))
}


render() {
  return (
    <div>Image Service Tater Tots</div>
  )
}
};

ReactDOM.render(<App/>, document.getElementById('app')
)
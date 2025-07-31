// App.js old code
// class App extends Component {
//     constructor(){
//         super()
//         this.state ={
//             robots: [],
//             searchField: ''
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//             return response.json()
//         }).then(users => {
//             {this.setState({robots: users})}
//         })
//     }

//     onSearchChange = (event) => {
//         this.setState({searchField : event.target.value})
//     }

//  render(){
//     const filteredRobots =this.state.robots.filter(robots => {
//         return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
//     })
//     if (this.state.robots.length === 0){
//         return( <h1>Loading...</h1>)
//     } else {
//         return (
//        <div className='tc'>
//            <h1>Robo Friends</h1>
//            <SearchBox />
//            <Scroll>
//                 <CardList robots={filteredRobots}/>
//            </Scroll>
//        </div>
//      )
//     }
//  }
// }

// export default App
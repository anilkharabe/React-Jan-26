import axios from "axios";
import { Component, memo } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);

    // reserved object - big object
    this.state = {
      count: 0,
      count2: 1,
      name:'',
      city:''
    };
    console.log("child Constructor");
  }

  async componentDidMount(){
    console.log('Child Component Did Mount')
    const data = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    
    //changing the state
    this.setState({
        name: data.data.name,
        city: data.data.address.city
    })
  }

  // homework: what is use of componentDidUpdate()  ??
  componentDidUpdate(){
    console.log('child component Did update');
  }

  componentWillUnmount(){
    console.log('child component will unmount');
  }

  render() {
    
    console.log("Child Render");
    // const { name, city } = this.props;
    const { count, count2, name, city } = this.state;

    return (
      <div className="border-solid">
        <h2> User - class based component with useEffect</h2>
        <h2>Name: {name}</h2>
        <h3>Place: {city}</h3>
        {/* <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1
            })    
          }}
        >
          Increase Count
        </button>
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1> */}
      </div>
    );
  }
}

export default memo (UserClass);

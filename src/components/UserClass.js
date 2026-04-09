import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);

    // reserved object
    this.state = {
      count: 0,
      count2: 1
    };
  }

  render() {
    const { name, city } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="border-solid">
        <h2>Name: {name}</h2>
        <h3>Place: {city}</h3>
        <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1
            })    
          }}
        >
          Increase Count
        </button>
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
      </div>
    );
  }
}

export default UserClass;

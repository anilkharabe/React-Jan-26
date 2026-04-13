import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>Contact</h1>
        <h2>This is Contact page</h2>
        {/* <User name={"Aniruddha - Functional component"} city={"Pune"}/> */}
        <UserClass name={"First"} city={"Hyderabad"} />
        {/* <UserClass name={"Second"} city={"Pune"} /> */}
      </div>
    );
  }
}

export default Contact;

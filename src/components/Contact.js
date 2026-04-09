import User from "./User";
import UserClass from "./UserClass";

const Contact = ()=>{
    return (
        <div>
            <h1>Contact</h1>
            <h2>This is Contact page</h2>
            <User name={"Aniruddha - Functional component"} city={"Pune"}/>
            <UserClass name={"Aniruddha - Class component"} city={"Hyderabad"}/>
        </div>
    )
}

export default Contact;
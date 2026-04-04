import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import UseStateHook from "./PoC/hooks/UseStateHook";
import "./styles.css";

const AppLayout =()=>{
  return(
    <div>
      <Header />
      <Body />
      {/* <UseStateHook /> */}
    </div>
  )
}


const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />); // takes object and convert it into html element

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout =()=>{
  return(
    <div>
      <Header />
      <Body />
    </div>
  )
}

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />); // takes object and convert it into html element

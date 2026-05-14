import { useRef } from "react";
const UseRefWithDom = () => {

    const buttonRef = useRef();
    const focusRef = useRef();

    const changeColor = ()=>{
        buttonRef.current.style.color = 'red';
        buttonRef.current.style.backgroundColor = 'black'
    }

    const updateFocus = ()=>{
        focusRef.current.focus();
    }

  return (
    <>
      <h1>useRef Hooks With DOM Access</h1>
      <button ref={buttonRef}> Click me</button>

      <br></br>
      <button  onClick={changeColor}>Change button color</button>

      <br />
        <input ref = {focusRef} type="text" placeholder="enter your name"></input>
      <br/>
      <button onClick={updateFocus}>Focus on second button</button>
    </>
  );
};

export default UseRefWithDom;

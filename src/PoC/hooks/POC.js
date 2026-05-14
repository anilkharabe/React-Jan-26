import UseStateHook from "./UseStateHook";
import UseRefHook from "./UseRef";
import UseRefWithDom from './useRefWithDom';
import UseMemoHook from "./UseMemoHook";

const POC = () => {
  return (
    <>
      <UseStateHook />
      <UseRefHook />
      <UseRefWithDom />
      <UseMemoHook />
    </>
  );
};
export default POC;

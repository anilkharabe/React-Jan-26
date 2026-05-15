import UseStateHook from "./UseStateHook";
import UseRefHook from "./UseRef";
import UseRefWithDom from './useRefWithDom';
import UseMemoHook from "./UseMemoHook";
import Parent from "./Parent";

const POC = () => {
  return (
    <>
      <UseStateHook />
      <UseRefHook />
      <UseRefWithDom />
      <UseMemoHook />
      <Parent />
    </>
  );
};
export default POC;

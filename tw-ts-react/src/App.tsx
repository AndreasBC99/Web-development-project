import { useState } from 'react';
import styled from 'styled-components';


function App() {
  const [st, setSt] = useState("white")
  return (
    <div className = "bg-[red] w-screen h-screen flex justify-center items-center">
      <div className="flex justify-around items-center w-fit h-[100px] bg-blue-900 hover:w-[300px] hover:bg-blue-300 hover:h-[300px] transition-all duration-300 p-4 rounded-[8px]">
        <h1 className = "text-[#ffffff] text-[12px]">DAV VERDEN!</h1>
        <Button color = {st} onClick={() => setSt(st === "white" ? "red" : "white")} >Button</Button>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: red;
  width: 100w;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
color: ${props => props.color};
`

export default App;

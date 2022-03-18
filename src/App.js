import React from "react";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

function App() {
  let title = "My First React App"

  return (
    <div>
    <NavBar title={title} />
    <main>
    <Todo title="Learning react" datetime="23rd March 2022"/>
    <Todo title="Premest training" datetime="2nd January 2022"/>
    <Todo title="Going to market" datetime="3rd April 2022"/>
    <Todo title="Wrting exams" datetime="18th December 2022"/>
    <Todo title="Depreciating cedis" datetime="4th October 2022"/>
    
    </main>
    
    </div>
  );
}

export default App

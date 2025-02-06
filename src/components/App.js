import React, { useState } from "react";
import './../styles/App.css';
import Child from './Child';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
        <h1>Parent Component</h1>
        <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;

import React from 'react';

function App() {
    const add = (a:number, b?:number) => b ? a+b : a;

  return (
    <div>
        {add(5,5)}
        {add(5,)}
    </div>
  );
}

export default App;

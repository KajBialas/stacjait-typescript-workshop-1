import React from 'react';

function App() {
    const add = (...rest: number[]) => {
        let result:number = 0;
        rest.map((element) => {
            result += element;
        })
        return result;
    };

    add(5,6,7);
  return (
    <div>
        {add(5,6,7)}
    </div>
  );
}

export default App;

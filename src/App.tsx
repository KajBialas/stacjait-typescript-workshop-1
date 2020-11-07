import React from 'react';
import Header from './components/Header';
import Counter1 from "./components/Counter1";

const TEXTS = {
    HEADER: {
        TITLE: 'Application Header',
        SUBTITLE: 'Application Subheader',
    },
    COUNTER1: {
        TITLE: 'Counter Section'
    }
};

function App() {

  return (
    <div>
        <Header
            subtitle={TEXTS.HEADER.SUBTITLE}
        />
        <Counter1 title={TEXTS.COUNTER1.TITLE}/>
    </div>
  );
}

export default App;

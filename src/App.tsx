import React from 'react';
import Header from './components/Header';

const TEXTS = {
    HEADER: {
        TITLE: 'Application Header',
        SUBTITLE: 'Application Subheader',
    }
};

function App() {

  return (
    <div>
        <Header
            subtitle={TEXTS.HEADER.SUBTITLE}
        />
    </div>
  );
}

export default App;

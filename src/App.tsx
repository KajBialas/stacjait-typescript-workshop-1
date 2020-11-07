import React from 'react';
import Header from './components/Header';
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import PostList from "./components/postList/PostList.component";

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
        <PostList />
        <Counter1 title={TEXTS.COUNTER1.TITLE}/>
        <Counter2 title={TEXTS.COUNTER1.TITLE}/>
    </div>
  );
}

export default App;

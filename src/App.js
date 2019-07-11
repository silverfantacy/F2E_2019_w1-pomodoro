import React from 'react';
import InputBox from './components/InputBox'

function App() {
  return (
    <div className="App">
      <div className="block block-left">
        <main>
          <InputBox placeholder="ADD A NEW MISSION..."/>
        </main>
      </div>
      <div className="block block-right"></div>
    </div>
  );
}

export default App;

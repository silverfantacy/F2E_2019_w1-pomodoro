import React from 'react';
import InputBox from './components/InputBox'
import CheckBox from './components/CheckBox'
import TodoItem from './components/TodoItem'
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      <div className="block block-left">
        <main>
          <InputBox placeholder="ADD A NEW MISSION..."/>

          <div style={{marginTop: 145 + 'px'}}>
            <div className="item item-focus">
              <CheckBox size="48"/>
              <div className="item_info">
                <h3>the First thing to do today</h3>
                <span><i className="material-icons md-12">query_builder</i></span>
              </div>
            </div>
            <div className="playing-time">
              <h1>25:00</h1>
            </div>
          </div>

          <ul className="list">
            <li><TodoItem completed="false" title="the second thing to do today"/></li>
            <li><TodoItem completed="false" title="the second thing to do today"/></li>
            <li><TodoItem completed="false" title="the second thing to do today"/></li>
            <div>MORE</div>
          </ul>
        </main>
        <div className="control-area">
          <Timer />
        </div>
      </div>
      <div className="block block-right">
        <nav>
          <ul>
            <li>
              <div>
                <i className="material-icons md-36">list</i>
              </div>
            </li>
            <li>
              <div>
                <i className="material-icons md-36">insert_chart</i>
              </div>
            </li>
            <li>
              <div>
                <i className="material-icons md-36">library_music</i>
              </div>
            </li>
            <li className="logo-text">
              <h3 className="mixed">POMODORO</h3>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;

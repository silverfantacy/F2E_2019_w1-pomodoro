import Donutty from '../node_modules/donutty/dist/donutty.js'
import React, {Component} from 'react';
import InputBox from './components/InputBox'
import CheckBox from './components/CheckBox'
import TodoItem from './components/TodoItem'
import Timer from './components/Timer'
import TextShow from './components/TextShow'
import TextInput from './components/TextInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    // first create the donut chart
    var elem = document.getElementById("donut");
    var chart = new Donutty(elem, { max: 500, value: 100 });

    chart.setState({ min: 100, max: 300, value: 300, bg: "aquamarine", color: "slategrey" });
  }
  render() {
    return (
      <div className="App">
        <div className="block block-left">
          <main>
            <TextInput initText="開始輸入文字吧！" />
            <InputBox placeholder="ADD A NEW MISSION..." />

            <div style={{ marginTop: 145 + 'px' }}>
              <div className="item item-focus">
                <CheckBox size="48" />
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
              <TextShow/>
              <li><TodoItem completed="false" title="the second thing to do today" /></li>
              <li><TodoItem completed="false" title="the second thing to do today" /></li>
              <li><TodoItem completed="false" title="the second thing to do today" /></li>
              <div>MORE</div>
            </ul>
          </main>
          <div className="control-area">
            <Timer />
            <div id="donut" data-donutty data-min='-50' data-max='50' data-value='33'></div>
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
  
}

export default App;

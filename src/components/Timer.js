import React, { Component } from 'react';
import Clock from './Clock'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerState: false,
      time: (5 * 60)
    }
  }
  render(h) {
    return (
      <div className={`timer ${this.state.timerState ? "active" : ''}`}>
        <Clock time={this.state.time * 1000} size="575" />
        <div className="timer_main">
          <div className="timer—btn timer—btn_start" onClick={this.timerStart.bind(this)}>
            <i className="material-icons md-96">play_circle_filled_white</i>
          </div>
          <div className="timer—btn timer—btn_pause" onClick={this.timerPause.bind(this)}>
            <i className="material-icons md-96">pause_circle_filled</i>
          </div>
          <div className="timer-btn_stop" onClick={this.timerStop.bind(this)}></div>
        </div>
      </div>
    )
  }
  timerStart() {
    this.setState({ timerState: true })
  }
  timerPause() {
    this.setState({ timerState: false })
  }
  timerStop() {
    this.setState({ timerState: false, time: (5 * 60)})
  }
}

export default Timer;

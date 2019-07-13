import React, { Component } from 'react';

class Timer extends Component {
  render(h) {
    return (
      <div className="timer">
        <div className="timer_main">
          <canvas id="timer—dashboard"></canvas>
          <div className="timer—btn">
            <i className="material-icons md-96">play_circle_filled_white</i>
          </div>
          <div className="timer-btn_stop"></div>
        </div>
      </div>
    )
  }
}

export default Timer;

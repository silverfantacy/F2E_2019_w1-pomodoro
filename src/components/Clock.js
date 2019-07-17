import React, { Component } from 'react';

import { XYPlot, ArcSeries } from 'react-vis';

// import { EXTENDED_DISCRETE_COLOR_RANGE } from 'theme';

const PI = Math.PI;

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time
    };
  }

  componentDidMount() {
    this._timerId = setInterval(() => {
      if (this.state.time === 0) {
        return
      }
      this.setState({ time: this.getSeconds() })  
      
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    this.setState({ timerId: false });
  }

  getSeconds() {
    console.log('現在狀況=》',(this.state.time - 1000));
    return (this.state.time - 1000);
  }

  render() {
    const { time } = this.state;
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    const hours = (time / (60 * 24)) % 24;
    const persent = time / this.props.time;
    return (
      <XYPlot
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={this.props.size}
        getAngle={d => d.time}
        getAngle0={d => 0}
        height={this.props.size}
      >
        <ArcSeries
          animation={{
            damping: 50,
            stiffness: 300
          }}
          radiusDomain={[0, 3]}
          data={[
            // { time: (seconds / 60) * 2 * PI, radius0: 1, radius: 1.5, color: 0 },
            // {
            //   time: (minutes / 60) * 2 * PI,
            //   radius0: 1.6,
            //   radius: 2.1,
            //   color: 1
            // },
            // { time: (hours / 24) * 2 * PI, radius0: 2.2, radius: 2.7, color: 2 },
            { time: persent * 2 * PI, radius0: 0, radius: 3.1, color: 0 },
          ]}
          // colorRange={EXTENDED_DISCRETE_COLOR_RANGE}
        />
      </XYPlot>
    );
  }
}
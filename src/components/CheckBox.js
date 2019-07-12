import React,{ Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      completed: false,
    }
  }
  render() {
    let checkState = this.state.completed ? 'check_circle_outline' : 'radio_button_unchecked';
    let className = this.props.size ? 'material-icons md-' + this.props.size : 'material-icons md-24';
    return (
      <div className="checkBox">
        <input type="checkbox" value="completed" id="check_circle" name="check" onChange={this.changeState.bind(this)} />
        <label htmlFor="check_circle">
          <i className={className}>{checkState}</i>
        </label>
      </div>
    )
  }
  changeState(event) {
    this.setState({ completed: !this.state.completed })
  }
}

export default CheckBox;
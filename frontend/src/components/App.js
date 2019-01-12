import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    }
  }

  handleButtonClick(e) {
    e.preventDefault();

    fetch('test/')
      .then(response => response.json())
      .then(success => {
        this.setState({
          message: success.success
        })
      })
      .catch(error => call.error ? call.error(error) : console.log(error));
  }

  render() {
    return (
      <div>
        This is a new react app
        <br/>
        <button onClick={this.handleButtonClick.bind(this)}>Click</button>
        <br/>
        {this.state.message}
      </div>
    )
  }
}
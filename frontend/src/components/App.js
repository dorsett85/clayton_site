import React from 'react';

// Custom components
import Layout from './Layout';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      modalNum: null
    };

    // Bind methods
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleAppClick = this.handleAppClick.bind(this);
  }

  handleButtonClick(e) {

    fetch('chartData/')
      .then(response => response.json())
      .then(success => {
        console.log(success.success)
      })
      .catch(error => console.log(error));
  }

  handleToggleModal(modal) {
    this.setState({
      modalNum: modal
    })
  }

  handleAppClick(url) {
    window.open(url, '_blank')
  }

  render() {
    return (
      <Layout
        handleButtonClick={this.handleButtonClick}
        handleToggleModal={this.handleToggleModal}
        handleAppClick={this.handleAppClick}
        modalNum={this.state.modalNum}
        message={this.state.message}
      />
    )
  }
}
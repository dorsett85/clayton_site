import React from 'react';
import Highcharts from 'highcharts/highstock';

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

    // Get stock chart data and create chart
    fetch('chartData/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        Highcharts.stockChart('stockChart', {
          title: {
            text: 'Closing Prices'
          },
          subtitle: {
            text: data.map(v => v.name).join(', ')
          },
          tooltip: {
            xDateFormat: '%Y-%m-%d',
            shared: true
          },

          series: data
        });
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
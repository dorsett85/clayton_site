import React from 'react';
import Highcharts from 'highcharts/highstock';

// Custom components
import Layout from './Layout';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalNum: null,
      tickers: '',
      tickerHelperText: '',
      tickerInputError: false,
      tickerDisabled: true
    };

    // Bind methods
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleAppClick = this.handleAppClick.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.makeChart = this.makeChart.bind(this);
  }

  handleToggleModal(modal) {
    this.setState({
      modalNum: modal
    })
  }

  handleAppClick(url) {
    window.open(url, '_blank')
  }

  handleTextInput(e) {
    this.setState({
      tickers: e.target.value,
    }, this.validateTextInput)
  }

  validateTextInput() {
    const tickers = this.state.tickers;
    let helperText = '';
    if (/^[^A-Z]/.test(tickers)) {
      helperText = 'Must start with uppercase ticker';
    } else if (/[^A-Z|,|\s]/.test(tickers)) {
      helperText = 'Must be uppercase and comma/space separated';
    } else if (/,\s?,/.test(tickers)) {
      helperText = 'Remove extra comma';
    } else if (this.state.tickers.replace(/,/g, '').trim().split(/\s+/).length > 3) {
      helperText = '3 or fewer tickers allowed'
    }

    this.setState({
      tickerHelperText: helperText,
      tickerInputError: Boolean(helperText),
      tickerDisabled: Boolean(helperText) || !Boolean(this.state.tickers)
    })

  }

  makeChart(e) {
    if (e) {e.preventDefault();}

    // Format the ticker string to send to the backend
    let tickers = this.state.tickers.replace(/,/g, '').trim().replace(/\s+/g, ',');

    // Disable the update button while the data is fetched
    this.setState({
      tickerDisabled: true
    });
    fetch(`chartData/${tickers}`)
      .then(response => response.json())
      .then(data => {

        // Create the nice chart
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

        // Now activate the update button only on update clicks
        this.setState({
          tickerDisabled: !Boolean(e)
        })

      })
      .catch(error => {
        console.log(error);
        this.setState({
          tickerDisabled: !Boolean(e)
        })
      });

  }

  render() {
    return (
      <Layout
        handleToggleModal={this.handleToggleModal}
        handleAppClick={this.handleAppClick}
        modalNum={this.state.modalNum}
        handleTextInput={this.handleTextInput}
        tickerHelperText={this.state.tickerHelperText}
        tickerInputError={this.state.tickerInputError}
        tickerDisabled={this.state.tickerDisabled}
        makeChart={this.makeChart}
      />
    )
  }
}
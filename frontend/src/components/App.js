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
      tickerDisabled: true,
      chartLoading: false,
      fabAnchorEl: null
    };

    // Bind methods
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleAppClick = this.handleAppClick.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.makeChart = this.makeChart.bind(this);
    this.handleFabClick = this.handleFabClick.bind(this);
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
    if (/^[^A-Za-z]/.test(tickers)) {
      helperText = 'Must start with a letter';
    } else if (/[^A-Za-z|,|\s]/.test(tickers)) {
      helperText = 'Only letters and comma/space separated';
    } else if (/,\s?,/.test(tickers)) {
      helperText = 'Remove extra comma';
    } else if (this.state.tickers.replace(/,/g, ' ').trim().split(/\s+/).length > 4) {
      helperText = '4 or fewer tickers allowed'
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
    let tickers = this.state.tickers.replace(/,/g, ' ').trim().replace(/\s+/g, ',').toUpperCase();

    // Disable the update button and activate the progress loader while the data is fetched
    this.setState({
      tickerDisabled: true,
      chartLoading: true
    });
    fetch(`chartData/${tickers}`)
      .then(response => response.json())
      .then(data => {

        // Remove the progress loader
        this.setState({
          chartLoading: false
        }, () => {

          // Create the nice chart
          Highcharts.stockChart('stockChart', {
            title: {
              text: 'Closing Prices'
            },
            subtitle: {
              text: data.filter(v => v.data.length).map(v => v.name).join(', ')
            },
            tooltip: {
              xDateFormat: '%Y-%m-%d',
              shared: true
            },

            series: data
          });

        })

      })
      .catch(error => {
        console.log(error);
        this.setState({
          chartLoading: false
        })
      });

  }

  handleFabClick(e) {
      this.setState({
        fabAnchorEl: e ? e.currentTarget : null
      })
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
        chartLoading={this.state.chartLoading}
        makeChart={this.makeChart}
        handleFabClick={this.handleFabClick}
        fabAnchorEl={this.state.fabAnchorEl}
      />
    )
  }
}
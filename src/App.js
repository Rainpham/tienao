import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App-header">
          <div className="app-header">
            <h1>THÔNG TIN TIỀN ẢO HÔM NAY</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Tickers />
          </div>
        </div>
        <div className="footer">
          <p>Copyright &copy; {new Date().getFullYear()} vp</p>
        </div>

      </React.Fragment>
    );
  }
}

export default App;

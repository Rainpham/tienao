import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';
import './Tickers.css';



class Tickers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fechData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
            .then(res => {
                let wanted = ["bitcoin", "ethereum", "litecoin", "ripple"];
                let result = res.data.filter(item => wanted.includes(item.id));
                this.setState({ data: result });
            }).catch(err => console.log(err));
    }
    componentDidMount() {
        this.fechData();
        this.intervel = setInterval(() => this.fechData(), 60 * 1000);
    }
    render() {
        const { data } = this.state;

        const tickers = data.map((currency, index) => {
            return (
                <Cryptocurrency
                    currency={currency}
                    key={index}
                />
            )
        })
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul className="tickers">{tickers}</ul>
                    </div>
                </div>

            </div>


        )
    }
}
export default Tickers;
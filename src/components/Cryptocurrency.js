import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    render() {
        const {currency} = this.props;
        return (
            <li className={"cryptocurrency " + currency.id}>
                <p className="cryptocurrency-name">{currency.name} ({currency.symbol})</p>
                <h1>${(+currency.price_usd).toFixed(2)}</h1>
                <p>{currency.percent_change_1h}% 1hr</p>
                <p>{currency.percent_change_24h}% 24hrs</p>
                <p>{currency.percent_change_7d}% 7days</p>
            </li>
        )
    }
}
export default Cryptocurrency;
import React, { Component } from 'react';
import './Cryptocurrency.css';
import LogoBc from './imglogo/logobc.jpg';
import LogoEth from './imglogo/logoeth.png';
import LogoLitecoin from './imglogo/logoLitecoin.png';
import Logoxap from './imglogo/logoxap.png';

const arr = [
    {
        name: "bitcoin",
        icon: LogoBc
    },
    {
        name: "ethereum",
        icon: LogoEth
    },
    {
        name: "litecoin",
        icon: LogoLitecoin
    },
    {
        name: "ripple",
        icon: Logoxap
    }
]

class Cryptocurrency extends Component {
    state = {
        iconMoney: arr
    }
    render() {
        const { currency } = this.props;
        const { iconMoney } = this.state;
        const a=iconMoney.filter(item => (item.name === currency.id));
        return (
            <li className={"cryptocurrency " + currency.id}>
                <img src={a[0].icon} className="iconStyle"/>
                <h2 className="cryptocurrency-name">{currency.name} ({currency.symbol})</h2>
                <h1>${(+currency.price_usd).toFixed(2)}</h1>
                <p>{currency.percent_change_1h}% 1hr</p>
                <p>{currency.percent_change_24h}% 24hrs</p>
                <p>{currency.percent_change_7d}% 7days</p>
            </li>
        )
    }
}
export default Cryptocurrency;
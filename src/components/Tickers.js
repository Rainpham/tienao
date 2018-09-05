import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';
import './Tickers.css';

class Tickers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        }
    }

    fechData(){
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
        .then(res=>{
            let wanted = ["bitcoin", "ethereum", "litecoin","ripple"];
            let result = res.data.filter(item=>wanted.includes(item.id));
            this.setState({data:result});  
        }).catch(err=>console.log(err));
    }
    componentDidMount(){
        this.fechData();
        this.intervel=setInterval(()=>this.fechData(),60*1000);
    }
    render() {
        const { data } = this.state;
        const tickers = data.map((currency, index) => {
            return (
                <Cryptocurrency 
                    key={index}
                    currency={currency}
                />
            )
        });
        return (
            <div className = "tickers-container" >
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
            </div >
        )
}
}
export default Tickers;
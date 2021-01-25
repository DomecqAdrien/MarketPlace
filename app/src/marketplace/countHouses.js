import React from "react";

class CountHouses extends React.Component {
    state = { dataKey: null}

    componentDidMount() {
        const { drizzle, drizzleState } = this.props;
        console.log(drizzle);
        console.log(drizzleState);
        const contract = drizzle.contracts.MarketPlace;

        const dataKey = contract.methods["getCountHouses"].cacheCall();
        this.setState({dataKey})
    }

    render() {
        const { MarketPlace } = this.props.drizzleState.contracts;
        const a = MarketPlace.getCountHouses[this.state.dataKey];

        return <div><p>Nb maisons : {a && a.value} </p></div>
    }
}

export default CountHouses;
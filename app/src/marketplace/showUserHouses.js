import React from "react";
import Maison from "../components/Maison";

class ShowUserHouse extends React.Component {

    componentDidMount(){
        const { drizzle } = this.props;
        const mp = drizzle.contracts.MarketPlace;
        console.log(mp);

        mp.methods.getCountHouses().call().then((nbHouses) => {
            console.log(nbHouses)
            this.setState({nbHouses})
            for(var i =0; i < nbHouses; i++){
                this.getHouse(mp,i);
                
            }    
        }); 
    }

}
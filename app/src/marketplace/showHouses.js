import React from "react";
import Maison from "../components/Maison";

class ShowHouse extends React.Component {

    state = {dataKey: null, data: [], nbHouses:0, newHouse: null}

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

    getHouse(mp,index){
        mp.methods.houses(index).call().then((maison) => {
            var data = this.state.data;
            console.log(maison)
            if(!maison.isSold){
                data.push(
                    <Maison key={index}
                        buyHouse={this.buyHouse}
                        id={index}
                        price={maison.price}
                        surface={maison.surface}
                        nbRooms={maison.nbRooms}
                        title={maison.title}
                        adresse={maison.adress}
                        description={maison.description}
                        url={maison.urlImage} 
                    />
                        
                );
            }
            

            this.setState({index: data})
            console.log(data);

            
        }); 
    }

    buyHouse = (id, price) => {
        const { drizzle, drizzleState} = this.props;
        const contract = drizzle.contracts.MarketPlace;
        console.log(id);
        

        console.log(this.state);
        const newHouse = contract.methods["buyHouse"].cacheSend(
            id,
            drizzleState.accounts[0], 
            {
            from: drizzleState.accounts[0],
            gas:3000000,
            value: price,
            chainId: 42
        });

        this.setState({newHouse})
    }

    render() {
        return this.state.data
           
    }
}

export default ShowHouse;
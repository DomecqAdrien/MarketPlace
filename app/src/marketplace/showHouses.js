import React from "react";
import Maison from "../components/Maison";

class ShowHouse extends React.Component {

    state = {dataKey: null, data: [], nbHouses:0}

    componentDidMount(){
        const { drizzle } = this.props;
        const mp = drizzle.contracts.MarketPlace;
        console.log(mp);

        /*mp.methods.getCountHouses().call().then((nbHouses) => {
            console.log(nbHouses)
            this.setState({nbHouses})
            for(var i =0; i < nbHouses; i++){
                this.getHouse(mp,i);  
            }    
        }); */

        const dataKey = mp.methods["getCountHouses"].cacheCall();
        this.setState({dataKey})

    }

    buyHouse = (id, price) => {
        const { drizzle, drizzleState} = this.props;
        const contract = drizzle.contracts.MarketPlace;
        console.log(id);
        console.log(this.state);
        contract.methods["buyHouse"].cacheSend(
            id,
            drizzleState.accounts[0], 
            {
            from: drizzleState.accounts[0],
            gas:3000000,
            value: price
        });
        /*contract.methods["setPrice"].cacheSend(id,
            500,
            {from: drizzleState.accounts[0]}
        )*/
    }

    getHouses(nbHouses){
        if(nbHouses == null) return
        console.log(nbHouses.value)
        console.log(this.state.nbHouses)
        if(nbHouses.value != this.state.nbHouses){
            var data = []
            this.setState({data})
            console.log("coucou")
            this.state.nbHouses = nbHouses.value

            const { drizzle } = this.props;
            const mp = drizzle.contracts.MarketPlace;
            console.log(nbHouses)
            for(var i =0; i < nbHouses.value; i++){
                console.log(i)
                this.getHouse(mp,i, nbHouses);  
            }  

        }
        

    }

    getHouse(mp,index, nbHouses){
        console.log("test")
        mp.methods.houses(index).call().then((maison) => {
            var data = this.state.data;
            console.log(maison)
            if(!maison.isSold){
                //if(data[index] == undefined){
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
                //}
            }
            

            this.setState({index: data})
            console.log(data);

            
        }); 
    }

    render() {

        const { MarketPlace } = this.props.drizzleState.contracts;
        const a = MarketPlace.getCountHouses[this.state.dataKey]
        console.log(a)
        if(a !== undefined){
            if(this.state.dataKey != null && a.value != this.state.nbHouses){
                this.getHouses(a);
            }
        }
        
        

        return this.state.data
           
    }
}

export default ShowHouse;
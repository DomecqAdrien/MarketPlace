import React from "react";

class SellHouse extends React.Component {
    state = {
        stackId: null,
        price: null,
        nbRooms: null,
        adress:null,
        surface:null,
        description: null,
        urlImage: null,
    }

    handleChange = event => {
        console.log(event.target)
        const name = event.target.name
        this.setState({[name]: event.target.value});
    }

    createHouse = () => {
        const { drizzle, drizzleState} = this.props;
        const mp = drizzle.contracts.MarketPlace;
        console.log(drizzleState.accounts[0])
        console.log(this.state);
        console.log(mp.methods);
        const newHouse = mp.methods.sellHouse.cacheSend(
            this.state.price,
            this.state.surface,
            this.state.nbRooms,
            this.state.title,
            this.state.adressPlace,
            this.state.description,
            this.state.urlImage,
            drizzleState.accounts[0],
            {
                from: drizzleState.accounts[0]
            }
        )

        this.setState({newHouse})
    }

    render() {
        return(
            <div>
                <h2>Vous souhaitez vendre un bien ?</h2>
                <label>
                    Nom du bien :
                    <input type="text" name="title" onChange={this.handleChange}/>
                </label>
                <label>
                    Nombre de pièces :
                    <input type="text" name="nbRooms"  onChange={this.handleChange}/>
                </label>
                <label>
                    Surface :
                    <input type="number" name="surface"  onChange={this.handleChange}></input>
                </label>
                <label>
                    Adresse :
                    <input type="text" name="adressPlace" onChange={this.handleChange}/>
                </label>
                <label>
                    Description :
                    <input type="text" name="description" onChange={this.handleChange}></input>
                </label>
                <label>
                    Url d'une image :
                    <input type="text" name="urlImage" onChange={this.handleChange}></input>
                </label>
                <label>
                    Prix :
                    <input type="number" name="price" onChange={this.handleChange}/>
                </label>
                <button type="button" value="Send" onClick={this.createHouse}>Envoyer</button>
                
            </div>
        );
    }
}

export default SellHouse;
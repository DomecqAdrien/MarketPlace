// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;
pragma experimental ABIEncoderV2;

contract MarketPlace {

    struct House{
        uint price;
        uint surface;
        uint nbRooms;
        string title;
        string adress;
        string description;
        string urlImage;
        string adresseSeller;
        string adresseBuyer;
        bool isSold;
    }

    House[] public houses;

    function getCountHouses() public view returns (uint){
        return houses.length;
    }

    function getIsSold(uint _idHouse) public view returns (bool){
        return houses[_idHouse].isSold;
    }

    function getPrice(uint _idHouse) public view returns (uint){
        return houses[_idHouse].price;
    }


    function setPrice(uint _idHouse, uint _price) public {
        House memory house = houses[_idHouse];
        house.price = _price;
        houses[_idHouse] = house;
    }

    function setIsSold(uint _idHouse) public {
        House memory house = houses[_idHouse];
        house.isSold = false;
        houses[_idHouse] = house;
    }

    function sellHouse (
        uint _price,
        uint _surface,
        uint _nbRooms,
        string memory _title,
        string memory _adress,
        string memory _description,
        string memory _urlImage,
        string memory _adressSeller) public{
            
        House memory newHouse = House(_price, _surface, _nbRooms, _title, _adress, _description, _urlImage, _adressSeller,"", false);
        houses.push(newHouse);
    }

    function buyHouse(uint _idHouse, string memory _adressBuyer) public payable {
        House memory house = houses[_idHouse];
        house.isSold = false;
        house.adresseBuyer = _adressBuyer;
        houses[_idHouse] = house;
    }
}
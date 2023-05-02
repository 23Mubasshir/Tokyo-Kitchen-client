import React from 'react';
import "./Home.css"
import Banner from '../../components/Banner/Banner';
import ChefCarts from '../../components/ChefCarts/ChefCarts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCarts></ChefCarts>
        </div>
    );
};

export default Home;
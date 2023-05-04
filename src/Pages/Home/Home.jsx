import React from 'react';
import "./Home.css"
import Banner from '../../components/Banner/Banner';
import ChefCarts from '../../components/ChefCarts/ChefCarts';
import Services from '../../components/Services/Services';
import QuestionAnswer from '../../components/QuestionAnswer/QuestionAnswer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCarts></ChefCarts>
            <Services></Services>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );
};

export default Home;
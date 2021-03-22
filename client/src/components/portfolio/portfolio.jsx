import React from 'react';
import Card from "../card/card.jsx";
import './portfolio.styles.css'


const Portfolio = () => {
    return(<div id="Projects">
    <h1 className="projectH1">Projects</h1>
        <div className="cards-container">
        <Card 
        link="https://menu-manager.herokuapp.com"
        title="Menu Manager"
        info="Login to admin to update and change the menu"
        src="../../../menu-manager.png"
        alt="coding"
        >       
        </Card>  
        <Card 
        link="https://shop-of-strings.herokuapp.com/"
        title="Shop of Strings"
        info="Full E-Commerce website selling all things string."
        src="../../../shop-of-strings-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://green-for-growth.herokuapp.com/"
        title="Green for growth"
        info="A vegan's dream. Search for yum recipes to cook tonight."
        src="../../../green-for-growth-500.png"
        alt="coding"
        >       
        </Card>
        <Card
        link="https://online-journal-lts.herokuapp.com/"
        title="Journal App"
        info="An app to journal out your thoughts and feelings."
        src="../../../journal-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://carinaluise.github.io/tindog/"
        title="Tindog"
        info="A website design example for a doggy dating app."
        src="../../../tindog-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        // light
        link="https://carinaluise.github.io/3D_Card/"
        title="3D Card"
        info="3D design work for cards."
        src="../../../3D-Card-500.png"
        alt="coding"
        >       
        </Card> 
        </div>
        
    </div>)
}

export default Portfolio;
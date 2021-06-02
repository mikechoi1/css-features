import React from 'react';

import '../sass/main.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Description from './Description/Description';


const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Description />
        </div>
    );
}

export default App;
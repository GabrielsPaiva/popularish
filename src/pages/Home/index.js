import React from 'react';

//components
import Header from '../../components/Header/index'
import Main from '../Main/index'
import Footer from '../../components/Footer/index'
import Catalogue from '../../components/Catalogue/index'

// libs
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

const Home = () => {
    return (
        <Router>
            <Header />


            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="series" element={<Catalogue type='tv' title='name' />} />
                <Route path="filmes" element={<Catalogue type='movie' title='title' />} />
            </Routes>


            <Footer />
        </Router>
    );
};

export default Home;
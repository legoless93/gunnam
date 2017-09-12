import React from 'react';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import banner from '../../images/banner.png';
import createReactClass from 'create-react-class';

import DoubleHome from "./doubleHome.jsx";
import MyCarousel from "./myCarousel.jsx";

const Home = createReactClass({
    render() {

        return (

            <div>

                <div className="banner">
                    <Image className="banner" src={banner}></Image>
                </div>
                
                <div className="section">
                    <MyCarousel />
                </div>

                <DoubleHome />

            </div>
        )

    }
})

Home.propTypes = {
    optionalArray: PropTypes.array
};

export default Home;
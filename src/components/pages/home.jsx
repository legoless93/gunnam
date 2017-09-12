import React from 'react';
import {Image, Collapse, Well} from 'react-bootstrap';
import PropTypes from 'prop-types';
import banner from '../../images/banner.png';
import createReactClass from 'create-react-class';

import DoubleHome from "./doubleHome.jsx";
import MyCarousel from "./myCarousel.jsx";
import ProfileBar from "./profileBar.jsx";


const Home = createReactClass({

    getInitialState: function() {
        return {about: false, 
                languages: false};
    }, 
    togAbout: function() {
        this.setState({about: !this.state.about});
    },

    render() {

        return (

            <div>

                <div className="banner">
                    <Image className="bannerImg" src={banner}></Image>
                </div>

                <div className="section">
                    <MyCarousel />
                </div>

                <div>
                    <ProfileBar togAbout={this.togAbout}/>
                </div>

                <Collapse in={this.state.about}>
                    <div>
                        <DoubleHome/>
                    </div>
                </Collapse>

            </div>
        )

    }
})

Home.propTypes = {
    optionalArray: PropTypes.array
};

export default Home;
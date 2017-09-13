import React from 'react';
import {Image, Collapse} from 'react-bootstrap';
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
    toggleAbout: function() {
        this.setState({about: !this.state.about, 
                       languages: false});
    },
    toggleLanguages: function() {
        this.setState({about: false, 
                       languages: !this.state.languages});
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
                    <ProfileBar toggleAbout={this.toggleAbout} toggleLanguages={this.toggleLanguages} 
                        openAbout={this.state.about} 
                        openLanguages={this.state.languages}/>
                </div>

            </div>
        )

    }
})

Home.propTypes = {
    optionalArray: PropTypes.array
};

export default Home;
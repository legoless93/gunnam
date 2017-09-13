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
                languages: false,
                previousExperience: false
               };
    }, 
    toggleAbout: function() {
        this.setState({about: !this.state.about, 
                       languages: false, 
                      previousExperience: false});
    },
    toggleLanguages: function() {
        this.setState({about: false, 
                       languages: !this.state.languages, 
                      previousExperience: false});
    },
    togglePreviousExperience: function() {
        this.setState({about: false, 
                       languages: false,
                      previousExperience: !this.state.previousExperience});
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
                        togglePreviousExperience={this.togglePreviousExperience}
                        openAbout={this.state.about} 
                        openLanguages={this.state.languages} 
                        openPreviousExperience={this.state.previousExperience}/>
                </div>

            </div>
        )

    }
})

Home.propTypes = {
    optionalArray: PropTypes.array
};

export default Home;
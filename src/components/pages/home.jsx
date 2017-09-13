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
    toggleAbout: function() {
        this.setState({about: !this.state.about, 
                       languages: false});
    },
    toggleLanguages: function() {
        this.setState({about: false, 
                       languages: !this.state.languages});
    },

    render() {

        const aboutHeader = <h3><u>About Me</u></h3>;
        const aboutBody = "Recently graduated from UCL with a degree in MSc Computer Science, I have created a number of different projects with the aim of becoming a Software Developer able to handle all varieties of applications.";

        const languagesHeader = <h3><u>Languages</u></h3>;
        const languagesBody = "Every language";

        return (

            <div>

                <div className="banner">
                        <Image className="bannerImg" src={banner}></Image>
                </div>

                <div className="section">
                    <MyCarousel />
                </div>

                <div>
                    <ProfileBar toggleAbout={this.toggleAbout} toggleLanguages={this.toggleLanguages}/>
                </div>

                <Collapse in={this.state.about}>
                    <div>
                        <DoubleHome textHeader={aboutHeader} textBody={aboutBody}/>
                    </div>
                </Collapse>
                <Collapse in={this.state.languages}>
                    <div>
                        <DoubleHome textHeader={languagesHeader} textBody={languagesBody}/>
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
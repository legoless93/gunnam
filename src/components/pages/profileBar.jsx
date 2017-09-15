import React from 'react';
import {Button, Col, Collapse} from 'react-bootstrap';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import DoubleHome from "./doubleHome.jsx";

const ProfileBar = createReactClass({

    propTypes: {
        toggleAbout: PropTypes.func,
        toggleLanguages: PropTypes.func,
        togglePreviousExperience: PropTypes.func,
        openAbout: PropTypes.obj,
        openLanguages: PropTypes.obj,
        openPreviousExperience: PropTypes.obj
    },

    render() {

        const aboutHeader = <h3><u>About Me</u></h3>;
        const aboutBody = "Recently graduated from UCL with a degree in MSc Computer Science, I have created a number of different projects with the aim of becoming a Software Developer able to handle all varieties of applications.";

        const languagesHeader = <h3><u>Languages</u></h3>;
        const languagesBody = <div>Highly proficient in Java<br />Proficient in Javascript<br />Experience in fullstack web development (SQL, React.js, Node.js)<br />Limited proficiency in C#<br />Limited proficiency in Python</div>;
        
        const previousExperienceHeader = <h3><u>Previous Experience</u></h3>;
        const previousExperienceBody = "I have worked on a variety of different projects, both personally and in a team, ranging from simple websites to fullstack web applications to mobile applications. These are all available to see in detail via the links in the navigation bar at the top of the page.";

        return(

            <div className="profileBar">

                <Col sm={12}>
                    <Button className="profButton"
                        onClick={() => this.props.toggleAbout()}>About Me</Button>
                </Col>
                <Col sm={12}>
                    <Collapse in={this.props.openAbout}>
                        <div>
                            <DoubleHome textHeader={aboutHeader} textBody={aboutBody}/>
                        </div>
                    </Collapse>
                </Col>

                <Col sm={12}>
                    <Button className="profButton" 
                        onClick={() => this.props.toggleLanguages()}>Skills &amp; Languages</Button>
                </Col>
                <Col sm={12}>
                    <Collapse in={this.props.openLanguages}>
                        <div>
                            <DoubleHome textHeader={languagesHeader} textBody={languagesBody}/>
                        </div>
                    </Collapse>
                </Col>


                <Col sm={12}>
                    <Button className="profButton" onClick={() => this.props.togglePreviousExperience()}>Previous Experience</Button>
                </Col>
                <Col sm={12}>
                    <Collapse in={this.props.openPreviousExperience}>
                        <div>
                            <DoubleHome textHeader={previousExperienceHeader} textBody={previousExperienceBody}/>
                        </div>
                    </Collapse>
                </Col>

                <Col sm={12}>
                    <Button className="profButton">Contact</Button>
                </Col>


            </div>

        )
    }

})



export default ProfileBar;
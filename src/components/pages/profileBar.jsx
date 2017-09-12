import React from 'react';
import {Button, Col} from 'react-bootstrap';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const ProfileBar = createReactClass({

    propTypes: {
        toggleAbout: PropTypes.func,
        toggleLanguages: PropTypes.func
    },

    render() {
        return(

            <div className="profileBar">
                <div className="profRow">                    
                    <Col sm={12} md={2}>
                        <Button className="profButton"
                            onClick={() => this.props.toggleAbout()}>About Me</Button>
                    </Col>
                    <Col sm={12} md={2}>
                        <Button className="profButton" 
                            onClick={() => this.props.toggleLanguages()}>Languages</Button>
                    </Col>
                    <Col sm={12} md={4}>
                        <Button className="profButton">Previous Experience</Button>
                    </Col>
                    <Col sm={12} md={2}>
                        <Button className="profButton">Contact</Button>
                    </Col>
                    <Col sm={12} md={2}>
                        <Button className="profButton">Misc.</Button>
                    </Col>
                </div>

            </div>

        )
    }

})



export default ProfileBar;
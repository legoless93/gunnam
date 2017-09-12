import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const ProfileBar = createReactClass({
    
    propTypes: {
      togAbout: PropTypes.func
    },

    render() {
        return(

            <div className="profileBar">
                <Row className="profRow">
                    <Col sm={12} md={2}>
                        <Button className="profButton"
                            onClick={() => this.props.togAbout()}>About Me</Button>
                    </Col>
                    <Col sm={12} md={2}>
                        <Button className="profButton">Languages</Button>
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
                </Row>
            </div>

        )
    }

})



export default ProfileBar;
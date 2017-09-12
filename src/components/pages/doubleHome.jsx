import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

const DoubleHome = createReactClass({

    render() {
        return (

            <div className="doubleCol">
                <Col md={1}></Col>

                <Col sm={12} className="colLeft">
                    <hr />
                    <h3><u>About Me</u></h3>
                        Recently graduated from UCL with a degree in MSc Computer Science, I have created a number of different projects with the aim of becoming a Software Developer able to handle all varieties of applications.
                    <hr />
                </Col>

 {/*               <Col xs={3} md={3} className="colRight">

                </Col>
                */}

            </div>

        )
    }

})

export default DoubleHome;
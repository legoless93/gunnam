import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

const DoubleHome = createReactClass({
    
    
    propTypes: {
        textHeader: PropTypes.object,
        textBody: PropTypes.string
    },

    render() {
        return (

            <div className="doubleCol">
                <Col md={1}></Col>

                <Col sm={12} className="colLeft">
                    <hr />
                    {this.props.textHeader}
                    {this.props.textBody}
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
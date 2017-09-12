import React from 'react';
import {Carousel} from 'react-bootstrap';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import Name from '../../images/name.png';
import PeachSingle from '../../images/peachSingle.png';

const MyCarousel = createReactClass({

    render() {
        return (

            <div>

                <Carousel>
                    <Carousel.Item>
                        <img className="carImage" alt="900x500" src={Name}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" src={PeachSingle}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" alt="900x500" src={Name}/>
                    </Carousel.Item>
                </Carousel>

            </div>

        )
    }

})

export default MyCarousel;
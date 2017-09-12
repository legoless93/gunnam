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
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>MY NAME</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" src={PeachSingle}/>
                        <Carousel.Caption className="carText">
                            <p>Web application used in supporting deployment to HoloLens</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" alt="900x500" src={Name}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

        )
    }

})

export default MyCarousel;
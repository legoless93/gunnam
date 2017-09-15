import React from 'react';
import {Carousel} from 'react-bootstrap';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import PlaceHolder from '../../images/placeholder.png';
import PeachSingle from '../../images/peachSingle.png';
import RFHPoster from '../../images/rfhposter.png';


const MyCarousel = createReactClass({

    render() {
        return (

            <div>

                <Carousel>
                    <Carousel.Item>
                        <img className="carImage" src={RFHPoster}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" src={PeachSingle}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carImage" alt="900x500" src={PlaceHolder}/>
                    </Carousel.Item>
                </Carousel>

            </div>

        )
    }

})

export default MyCarousel;
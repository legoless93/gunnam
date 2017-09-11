import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const FullStack = createReactClass({
    
    render() {
        
        return(
        
        <div>
            Hello World, 2!!!
            </div>
            
        )
        
    }
    
    
})

FullStack.propTypes = {
    optionalArray: PropTypes.array
};

export default FullStack;
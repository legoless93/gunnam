import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import NavBar from './components/navBar.jsx';

const App = createReactClass({
    render() {
        return (
            <div className="App">
            <NavBar />
            {this.props.children}

            </div>
        );
    }
})

App.propTypes = {
    optionalArray: PropTypes.array
};

export default App;

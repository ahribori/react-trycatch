import React from 'react';
import TryCatch from '../../src';

class App extends React.Component {
    render() {
        throw new Error('Error!!!');
        return (
            <div>App</div>
        );
    }
}

export default TryCatch(App);
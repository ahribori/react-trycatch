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

export default TryCatch(App, {
    // replacement: <div>Error...T.T</div>,
    // onError: (error, info) => {
    //     console.log(error, info)
    // }
});
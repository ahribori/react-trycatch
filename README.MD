# react-trycatch
[![npm](https://img.shields.io/npm/v/react-trycatch.svg)](https://www.npmjs.com/package/react-trycatch)
[![Travis branch](https://img.shields.io/travis/ahribori/react-trycatch/master.svg)](https://travis-ci.org/ahribori/react-trycatch)
[![npm](https://img.shields.io/npm/l/react-trycatch.svg)]()

Implement React v16 ErrorBoundary with HOC pattern

## Installation

```
npm install --save react-trycatch
```


## Usage

### 1. Default Usage
```jsx
import React from 'react';
import TryCatch from 'react-trycatch';

class MyComponent extends React.Component {

    render() {
        throw new Error('Error!!!');
        return (
            <div>MyComponent</div>
        );
    }
}

export default TryCatch(MyComponent);
```

### 2. With Options
```jsx
import React from 'react';
import TryCatch from 'react-trycatch';

class MyComponent extends React.Component {

    render() {
        throw new Error('Error!!!');
        return (
            <div>MyComponent</div>
        );
    }
}

export default TryCatch(MyComponent, {
    replacement: (<div>Replacement on error</div>),
    onError: (error, info) => {
        // catch
    }
});
```
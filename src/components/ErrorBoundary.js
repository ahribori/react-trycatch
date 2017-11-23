import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {

    static propTypes = {
        replacement: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]),
        onError: PropTypes.func,
    };

    static defaultProps = {
        replacement: null,
        onError: () => {
        },
    };

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error,
            info,
        });
        this.props.onError(error, info);
    }

    render() {

        if (this.state.hasError) {
            return !this.props.replacement ? (
                <div style={{
                    maxWidth: '500px',
                    padding: '12px',
                }}>
                    <h1 style={{}}>Something wrong!</h1>
                    <h3 style={{
                        color: 'darkred',
                    }}>ERROR: {this.state.error.message}</h3>
                    <div style={{
                        color: '#9D0500',
                        fontSize: '0.8rem',
                    }}>{this.state.error.stack}</div>
                </div>
            ) : this.props.replacement;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
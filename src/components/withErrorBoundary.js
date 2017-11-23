import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default (WrappedComponent, options = {}) => {
    return class withErrorBoundary extends React.Component {
        render() {
            const { replacement, onError } = options;
            return (
                <ErrorBoundary
                    replacement={replacement}
                    onError={onError}
                >
                    <WrappedComponent {...this.props} />
                </ErrorBoundary>
            );
        }
    }
}
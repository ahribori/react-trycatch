import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default (WrappedComponent, { replacement, onError }) => {
    return class withErrorBoundary extends React.Component {
        render() {
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
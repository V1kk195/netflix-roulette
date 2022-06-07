import * as React from "react";
import { ErrorInfo } from "react";

type Props = {
    children: JSX.Element;
};

type State = {
    error: null | Error;
    errorInfo: null | ErrorInfo;
};

export class ErrorBoundary extends React.Component<Props, State> {
    state: State = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    errorElement = () => {
        return (
            <div>
                <p>Oops, something went wrong!</p>
                <details>
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        );
    };

    render() {
        return (
            <>
                {this.state.errorInfo
                    ? this.errorElement()
                    : this.props.children}
            </>
        );
    }
}

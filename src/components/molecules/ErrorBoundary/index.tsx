import React from 'react';

interface IProps {
  children: React.ReactNode;
  FallbackUI: React.ReactElement;
}

export default class ErrorBoundary extends React.Component<IProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) return this.props.FallbackUI;
    return this.props.children;
  }
}

import React from 'react';
import { Error } from '@/widgets/Error';
import { ErrorBoundaryProps } from './ErrorBoundaryProps';
import { ErrorBoundaryState } from './ErrorBoundaryState';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Error />;
    }
    return children;
  }
}

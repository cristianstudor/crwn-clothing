import React from 'react';

//import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles';
import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if(this.state.hasErrored) {
      const imageUrl = 'https://i.imgur.com/yW2W9SC.png';
      return (
        <div className='error-image-overlay'>
          <div className='error-image-container' style={{ backgroundImage: `url(${imageUrl})` }} />
          <h2 className='error-image-text'>Sorry this page is broken</h2>
        </div>
      );
    }

    return this.props.children;
  }
};

export default ErrorBoundary;
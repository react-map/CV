import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Layout extends Component {

  render() {
    const styles = {
      root: {
        width: '100%',
        backgroundColor: '#fff'
      },
      container: {
        height: this.props.height,
        overflow: 'hidden',
      }
    };
    const {children} = this.props;
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {React.cloneElement(children, {
              key: children.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
};
Layout.defaultProps = {
  height: '60%',
}

export default Layout;
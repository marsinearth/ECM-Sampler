import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if(active){
    return <span style={{'color':'LightCoral'}}>{children}</span>
  }
  return (
    <span
    onClick={() => {
      onClick()
    }}
    >
    {children}
    </span>
  );
}

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Link;

import React, { Component } from 'react';
import classnames from 'classnames';
import titleImage from '../../assets/title_img.png';

export default class SlideOne extends Component {
  render() {
    const { slideOrder, slideNumber, bgColor } = this.props;
    const style = {
      backgroundColor: bgColor || '#125E8A',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
    const slideCls = classnames({
      'active': slideNumber === slideOrder,
      'inactive': slideNumber !== slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    }, 'slide');


    return (
      <div style={style} className={slideCls}>
        <h1 style={{ color: '#6C5434', marginBottom: '6rem' }}>Dynamic UI With Flexbox</h1>
        <img src={titleImage} alt="" style={{ maxHeight: '400px' }}/>
      </div>
    );
  }
}

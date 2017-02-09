import React, { Component } from 'react';
import CodeSlide from './CodeSlide';

export default class SlideThree extends Component {
  render() {
    const { slideOrder, slideNumber, bgColor } = this.props;
    const style = {
      backgroundColor: bgColor || '#125E8A'
    }
    const slideCls = classnames({
      'slide': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    const initHtmlCode =
`<div class="parent-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>`;
    const initCssCode =
`.parent-container {
   width: 80%;
   border: 3px solid red;
}
.item {
  margin: 5px;
  background: blue;
  color: white;
  text-align: center;
  line-height: 50px;
  font-weight: 600;
}`

    return (
      <div style={style} className={slideCls}>
        <CodeSlide bgColor={this.props.bgColor} htmlCode={initHtmlCode} cssCode={initCssCode}></CodeSlide>
      </div>
    );
  }
}

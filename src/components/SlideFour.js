import React, { Component } from 'react';
import CodeSlide from './CodeSlide';

export default class SlideFour extends Component {
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
`<div class="real-world-container">
  <div class="header-container">
    <h1>My Profile Page</h1>
  </div>
  <div class="profile-content">
    <div class="description">
      <p>Hey here is a bit about me</p>
      <ul>
        <li>Level: 12</li>
        <li>HP Points: 9,001</li>
        <li>Mana Points: 300</li>
        <li>Dragons Killed: 52</li>
        <li>Warrior Skill Points: 21</li>
      </ul>
    </div>
    <div class="img" style="background-image:url('https://neverwintervault.org/sites/neverwintervault.org/files/project/19868/images/1114985962fullres.jpg')"></div>
   </div>
  <div class="footer">
    <button> Join My Guild!</button>
  </div>
</div>`;
    const initCssCode =
`.real-world-container {
  height: 100%;
  width: 100%;
}

.img {
  height: 300px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}`

    return (
      <div style={style} className={slideCls}>
        <CodeSlide bgColor={this.props.bgColor} htmlCode={initHtmlCode} cssCode={initCssCode}></CodeSlide>
      </div>
    );
  }
}

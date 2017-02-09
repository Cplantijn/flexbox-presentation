import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import CodeSlide from './CodeSlide';

require('codemirror/mode/css/css');

export default class SlideTwo extends Component {
  constructor() {
    super();
    this._updateCSS = this._updateCSS.bind(this);
    this.state = {
      cssCode: ''
    };
  }

  _updateCSS(newCode) {
    this.setState({
      cssCode: newCode
    })
  }
  render() {
    const { slideOrder, slideNumber, bgColor } = this.props;

    const style = {
      backgroundColor: bgColor || '#125E8A',
      height: '100%',
      width: '100%',
      flexDirection:'column'
    }

    const slideCls = classnames({
      'slide': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    const options = {
      lineNumbers: true,
      mode: 'css',
      theme: 'material'
    }

    const initHtmlCode =
`<h1 class="header">Hey Mom</h1>`;
    const initCssCode =
`.header{
  color: red !important;
}`
const code = (<CodeSlide htmlCode={initHtmlCode} cssCode={initCssCode}></CodeSlide>);
    return (
      <div style={style} className={slideCls}>
        <h1>About Flexbox</h1>
        <h2>Started in 2009, WC3 Candidate Recommentation by 2012</h2>
        <h2>Lets the browser decide how to best distrubute space inside a container</h2>
        <h2>Is accepted by <a target="_blank" href="http://caniuse.com/#feat=flexbox">most browsers</a></h2>
      </div>
    );
  }
}

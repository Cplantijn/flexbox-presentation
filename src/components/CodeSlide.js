import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/css/css');
require('codemirror/mode/xml/xml');

export default class CodeSlide extends Component {
  constructor(props) {
    super(props);
    this._updateCSS = this._updateCSS.bind(this);
    this._updateMarkup = this._updateMarkup.bind(this);

    this.state = {
      cssCode: this.props.cssCode || '',
      htmlCode: this.props.htmlCode || ''
    };
  }

  _updateCSS(newCode) {
    this.setState({
      cssCode: newCode
    })
  }

  _updateMarkup(newCode) {
    this.setState({
      htmlCode: newCode
    })
  }
  render() {
    const { slideOrder, slideNumber, bgColor } = this.props;

    const style = {
      backgroundColor: bgColor || '#125E8A',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'stretch'
    }

    const slideCls = classnames({
      'slide': true,
      'active': slideNumber === slideOrder,
      'next': slideNumber === (slideOrder - 1),
      'prev': slideNumber === (slideOrder + 1)
    });

    const cssOpts = {
      mode: 'css',
      theme: 'material'
    }

    const htmlOpts = {
      mode: 'xml',
      htmlMode: true,
      theme: 'zenburn'
    }

    return (
      <div style={style} className={slideCls}>
        <style dangerouslySetInnerHTML={{ __html: this.state.cssCode }} />
          <div className="code-wrapper" style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <div className="css-code-wrapper" style={{ flex: 1, flexBasis: '50%' }}>
              <CodeMirror value={this.state.cssCode} options={cssOpts} onChange={this._updateCSS} />
            </div>
            <div className="markup-code-wrapper" style={{ flex: 1, flexBasis: '50%' }}>
              <CodeMirror value={this.state.htmlCode} options={htmlOpts} onChange={this._updateMarkup} />
            </div>
          </div>
          <div className="workspace" style={{ display: 'flex', overflow:'scroll', justifyContent: 'center', alignItems: 'center', width: 'calc(100% - 300px)', height: '100%' }} dangerouslySetInnerHTML={{ __html: this.state.htmlCode }}>
          </div>
        </div>
    );
  }
}

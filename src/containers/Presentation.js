import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SlideWrapper from '../components/SlideWrapper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Import all slides
import SlideOne from '../components/SlideOne';
import SlideTwo from '../components/SlideTwo';
import SlideThree from '../components/SlideThree';
import SlideFour from '../components/SlideFour';
import SlideFive from '../components/SlideFive';


class Presentation extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this._kbNavigation.bind(this));
  }

  _kbNavigation(e) {
    const { goNextSlide, goBackSlide, goNextArticle, goPrevArticle } = this.props;
    if (e.ctrlKey) {
      switch(e.which) {
        case 188: // Left Arrow Key
          goBackSlide();
          break;
        case 190: // Right Arrow Key
          goNextSlide();
          break;
        case 32: // Spacebar
          goNextArticle();
          break;
        case 8:  // BackSpace
          goPrevArticle();
          break;
        default:
          return;
      }
    }
  }

  render() {
    return (
      <div id="presentationRoot">
        <ReactCSSTransitionGroup
          className="slide-container"
          name="slide-transtion-group"
          compontent="ul">
          <SlideOne slideOrder={0} bgColor="#C6DDF0" {...this.props}/>
          <SlideTwo slideOrder={1}  bgColor="#E05263" {...this.props}/>
          <SlideThree slideOrder={2} bgColor="#659157"{...this.props}/>
          <SlideFour slideOrder={3} {...this.props}/>
          <SlideFive slideOrder={4} {...this.props}/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Presentation.propTypes = {
  goNextSlide: PropTypes.func.isRequired,
  goBackSlide: PropTypes.func.isRequired,
  goNextArticle: PropTypes.func.isRequired,
  goPrevArticle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);

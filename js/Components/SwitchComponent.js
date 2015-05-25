var React = require("react");
var Radium = require("radium");

// Styles 
var styles = {
  off: {
    backgroundColor: '#FF5722',
    border: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    transitionDuration: '.4s',
    transitionTimingFunction: 'ease-out',
    transform: 'translate(0px,0px)',
    ':hover': {
      backgroundColor: '#FF7043'
    },
    ':focus':{
      outline: 'none'
      },
  },
  on: {
    backgroundColor: '#4CAF50',
    border: 0,
     width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    padding: '1.5em', 
    transitionDuration: '.4s',
    transitionTimingFunction: 'ease-out',
    transform: 'translate(40px,0px)',
    ':hover': {
      backgroundColor: '#66BB6A'
    },
    ':focus':{
      outline: 'none'
      }, 
    }
  }

var backdrop = {
  basic:{
  backgroundColor: '#E0E0E0',
  width: '80px',
  height: '40px',
  padding: '2px',
  borderRadius: '25px',
  boxShadow: 'inset 0px 0px 20px rgba(0,0,0,0.2)'
  }

}

// Component
var SwitchComponent= React.createClass(Radium.wrap({ 
  propTypes: {
      switchFunc: React.PropTypes.func, 
      isOn: React.PropTypes.bool
    },
  getDefaultProps: function(){
    return {
      completedProp: false
    };
  },
  render() {
    var style = this.props.isOn == true ? styles.on:styles.off;
    return (
      <div>
      <div style={backdrop.basic}>
      <button style={style} onClick={this._handleClick}>
      </button>
      </div>
      </div>
    );
  },
  _handleClick: function() {
    this.props.switchFunc(this.props.isOn);
  }
}));



module.exports = SwitchComponent;
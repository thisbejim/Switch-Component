var React = require("react"); 
var SwitchComponent = require("./components/SwitchComponent");
 
var Main = React.createClass({ 
  getInitialState: function() {
    return {
    switch: this.switch,
    isOn: false
    }
  },
  render: function() {
    return ( 
      <div>
      <SwitchComponent switchFunc={this.state.switch} isOn={this.state.isOn}/>
      </div>  
     );  
  },
  switch: function(x){
  var i = x == true ? false : true;
  this.setState({isOn: i});
}
});

React.render(
  <Main />,
  document.getElementById('content')
);
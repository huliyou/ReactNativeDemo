var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  View,
  StyleSheet,
  ActivityIndicatorIOS,
} = React;

var ToggleAnimatingActivityIndicator = React.createClass({
    mixins: [TimerMixin],

    getInitialState: function () {
      return ({
        animating: true,
      });
    },

    setToggleTimeout: function () {
      this.setTimeout(
        () => {
          this.setState({
            animating: !this.state.animating,
          });
          this.setToggleTimeout();
        },
        1200,
      );
    },

    componentDidMount: function() {
      this.setToggleTimeout();
    },

    render: function() {
      return(
          <ActivityIndicatorIOS
            animating = {this.state.animating}
            size = "large"
            color = 'orange'
          />
      );
    }
});

module.exports = ToggleAnimatingActivityIndicator;

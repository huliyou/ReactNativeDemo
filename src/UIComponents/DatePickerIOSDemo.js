// @flow
'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  DatePickerIOS,
} = React;


var DatePickerIOSDemo = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
    };
  },
  onDateChange: function(date) {
      this.setState({
        date: date,
      })
  },
  render: function() {
    return (
      <View>
        <DatePickerIOS
          onDateChange = {this.onDateChange}
          date = {this.state.date}
          mode = 'datetime'
        />
      </View>
    );
  }

});

module.exports = DatePickerIOSDemo;

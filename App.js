import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Screen from './src/components/screen';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      start: false,
      time: "",
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Screen time={this.state.time}/>
        <Button
          title="Start"
          onPress={() => this.setState({start: true})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

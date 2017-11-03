import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { Button, FormLabel, FormInput } from "react-native-elements";

class NewDeckView extends Component {
  state = {
    title: ""
  };
  render() {
    const { decks } = this.props;
    return (
      <View>
        <Text h1>What is the title of your new deck?</Text>
        <FormLabel>Name</FormLabel>
        <FormInput
          onChangeText={newValue => this.setState({ title: newValue })}
        />
        <Button title="Submit" onPress={() => console.log(this.state.title)} />
      </View>
    );
  }
}

export default NewDeckView;

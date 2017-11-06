import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native-elements";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { saveDeckTitle } from "../actions";

class NewDeckView extends Component {
  state = {
    title: ""
  };

  addNewDeck = newTitle => {
    const { saveDeckTitle } = this.props;
    saveDeckTitle(newTitle);
    this.props.navigation.navigate("IndividualDeckView", {
      title: newTitle
    });
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
        <Button
          title="Submit"
          onPress={() => this.addNewDeck(this.state.title)}
        />
      </View>
    );
  }
}

export default connect(null, { saveDeckTitle })(NewDeckView);

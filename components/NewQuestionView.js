import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Button, Text, FormLabel, FormInput } from "react-native-elements";
import { addCardToDeck } from "../actions";

class NewQuestionView extends Component {
  state = {
    question: "",
    answer: ""
  };

  addCard = deckKey => {
    const { question, answer } = this.state;
    const card = { question, answer };

    this.props.addCardToDeck(deckKey, card);
    this.props.navigation.goBack();
  };

  render() {
    const { deckKey } = this.props;
    return (
      <View>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={v => this.setState({ question: v })} />
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={v => this.setState({ answer: v })} />
        <Button title="Submit" onPress={() => this.addCard(deckKey)} />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { deckKey } = props.navigation.state.params;
  return {
    deckKey
  };
}

export default connect(mapStateToProps, { addCardToDeck })(NewQuestionView);

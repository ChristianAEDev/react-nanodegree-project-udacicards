import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Button, Text } from "react-native-elements";

class IndividualDeckView extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text h1>{deck.title}</Text>
        <Text h4>{deck.questions.length} card(s)</Text>
        <Button
          title="Add Card"
          onPress={() =>
            this.props.navigation.navigate("NewQuestionView", {
              deckKey: deck.title
            })}
        />
        <Button
          title="Start Quiz"
          onPress={() =>
            this.props.navigation.navigate("QuizView", {
              deckKey: deck.title
            })}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;
  return {
    deck: state[title]
  };
}

export default connect(mapStateToProps)(IndividualDeckView);

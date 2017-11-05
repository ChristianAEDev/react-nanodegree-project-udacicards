import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { getDecks } from "../actions";
import { Text, List, ListItem } from "react-native-elements";

class DeckListView extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks } = this.props;

    console.log("decks:", decks);

    if (_.isEmpty(decks)) {
      return (
        <Text h3>
          No decks created yet. Swipe to the left to create your first deck.
        </Text>
      );
    }
    let keys = _.keys(decks);
    return (
      <List>
        {keys.map(key => {
          const deck = decks[key];
          let numberOfCards = 0;
          if (typeof deck.questions !== "undefined") {
            numberOfCards = deck.questions.length;
          }
          return (
            <ListItem
              key={key}
              title={deck.title}
              subtitle={`${numberOfCards} card`}
              onPress={() =>
                this.props.navigation.navigate("IndividualDeckView", {
                  title: key
                })}
            />
          );
        })}
      </List>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps, { getDecks })(DeckListView);

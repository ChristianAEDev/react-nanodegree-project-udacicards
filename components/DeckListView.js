import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { List, ListItem } from "react-native-elements";

class DeckListView extends Component {
  render() {
    const { decks } = this.props;
    return (
      <List>
        {decks.map(deck => (
          <ListItem
            key={deck.title}
            title={deck.title}
            subtitle={`${deck.questions.length} cards`}
          />
        ))}
      </List>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckListView);

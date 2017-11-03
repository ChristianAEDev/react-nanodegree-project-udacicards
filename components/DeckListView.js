import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class DeckListView extends Component {
  render() {
    return (
      <View>
        <Text>DeckListView</Text>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  console.log(decks);
  return { decks };
}

export default connect(mapStateToProps)(DeckListView);

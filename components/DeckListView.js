import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { getDecks } from "../actions";
import { List, ListItem } from "react-native-elements";

class DeckListView extends Component {
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    const { decks } = this.props;
    let keys = _.keys(decks);
    console.log("keys:", keys);

    return (
      <List>
        {keys.map(key => {
          return (
            <ListItem
              key={key}
              title={decks[key].title}
              subtitle={`PLACEHOLDER! cards`}
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

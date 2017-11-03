import React from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Constants } from "expo";
import reducer from "./reducers";
import DeckListView from "./components/DeckListView";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar tanslucent />
          </View>
          <DeckListView />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

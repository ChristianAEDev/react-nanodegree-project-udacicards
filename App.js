import React from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from 'redux-promise';
import { StackNavigator, TabNavigator } from "react-navigation";
import { Constants } from "expo";
import reducer from "./reducers";
import DeckListView from "./components/DeckListView";
import IndividualDeckView from "./components/IndividualDeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducer)}>
        <View style={styles.container}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar tanslucent />
          </View>
          <StackNavigation />
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

const TabNavigation = TabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: "Decks"
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const StackNavigation = StackNavigator({
  Home: {
    screen: TabNavigation
  },
  IndividualDeckView: {
    screen: IndividualDeckView
  },
  NewQuestionView: {
    screen: NewQuestionView
  },
  QuizView: {
    screen: QuizView
  }
});

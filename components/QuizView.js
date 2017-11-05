import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { clearLocalNotification, setLocalNotification } from "../storage/api";

const MODE_QUESTION = "MODE_QUESTION";
const MODE_ANSWER = "MODE_ANSWER";
const MODE_RESULT = "MODE_RESULT";
const MODE_FINISHED = "MODE_FINISHED";

class QuizView extends Component {
  state = {
    numberOfQuestions: 0,
    // currentQuestion is representing the INDEX of the array of questions.
    currentQuestion: 0,
    mode: MODE_QUESTION,
    result: true,
    correctAnswers: 0
  };

  componentDidMount() {
    const { questions } = this.props;
    this.setState({ numberOfQuestions: questions.length });
  }

  showAnswer = () => {
    this.setState({ mode: MODE_ANSWER });
  };

  showQuestion = () => {
    this.setState({ mode: MODE_QUESTION });
  };

  answerQuestion = answer => {
    this.setState({ result: answer });
    this.setState({ mode: MODE_RESULT });
  };

  nextQuestion = () => {
    const {
      currentQuestion,
      numberOfQuestions,
      result,
      correctAnswers
    } = this.state;

    if (result) {
      this.setState({ correctAnswers: correctAnswers + 1 });
    }

    // Still have more questions?
    if (currentQuestion + 1 >= numberOfQuestions) {
      this.setState({ mode: MODE_FINISHED });
      // If a quiz has been performed we remove the notification for that day
      clearLocalNotification().then(setLocalNotification());
    } else {
      this.setState({ mode: MODE_QUESTION });
      this.setState({ currentQuestion: currentQuestion + 1 });
    }
  };

  render() {
    const { questions } = this.props;
    const {
      mode,
      currentQuestion,
      result,
      numberOfQuestions,
      correctAnswers
    } = this.state;
    const question = questions[currentQuestion].question;
    const answer = questions[currentQuestion].answer;
    return (
      <View>
        <Text h4>
          {currentQuestion + 1}/{numberOfQuestions}
        </Text>
        {mode === MODE_QUESTION && (
          <View>
            <Text h1>{question}</Text>
            <TouchableOpacity onPress={this.showAnswer}>
              <Text style={styles.text}>Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        {mode === MODE_ANSWER && (
          <View>
            <Text h1>{answer}</Text>
            <TouchableOpacity onPress={this.showQuestion}>
              <Text style={styles.text}>Question</Text>
            </TouchableOpacity>
          </View>
        )}
        {mode === MODE_RESULT && (
          <View>
            <Text h1>{result ? "Yes!" : "No!"}</Text>
            <TouchableOpacity onPress={this.nextQuestion}>
              <Text style={styles.text}>Next Question</Text>
            </TouchableOpacity>
          </View>
        )}
        {mode === MODE_FINISHED && (
          <View>
            <Text h3>{100 / numberOfQuestions * correctAnswers}% correct</Text>
          </View>
        )}

        <Button
          title="Correct"
          backgroundColor="green"
          color="white"
          onPress={() => this.answerQuestion(true)}
        />
        <Button
          title="Incorrect"
          backgroundColor="red"
          color="white"
          onPress={() => this.answerQuestion(false)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 25
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckKey } = navigation.state.params;
  return {
    deckKey,
    questions: state[deckKey].questions
  };
}

export default connect(mapStateToProps)(QuizView);

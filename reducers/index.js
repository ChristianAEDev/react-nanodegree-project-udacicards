import {
  ADD_CARD_TO_DECK,
  GET_DECK,
  GET_DECKS,
  SAVE_DECK_TITLE
} from "../actions";

function decks(state = dummyData, action) {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return state;
    case GET_DECK:
      return state;
    case GET_DECKS:
      return state;
    case SAVE_DECK_TITLE:
      return state;
    default:
      return state;
  }
}

export default decks;

const dummyData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

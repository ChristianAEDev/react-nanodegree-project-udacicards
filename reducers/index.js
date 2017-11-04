import { ADD_CARD_TO_DECK, GET_DECKS, SAVE_DECK_TITLE } from "../actions";
import { getDecks, putDeck } from "../storage/api";

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      const { key, card } = action.payload;
      return {
        ...state,
        [key]: { ...state[key], questions: [...state[key].questions, card] }
      };
    case GET_DECKS:
      return state;
    case SAVE_DECK_TITLE:
      const newState = {
        ...state,
        ...action.deck
      };
      return newState;
    default:
      return state;
  }
}

export default decks;

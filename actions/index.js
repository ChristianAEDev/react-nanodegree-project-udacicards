import { loadDecks, putDeck } from "../storage/api";

export const GET_DECKS = "GET_DECKS";
export const SAVE_DECK_TITLE = "SAVE_DECK_TITLE";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export function getDecks() {
  console.log("call loadDecks");
  const decks = loadDecks();
  console.log("loadDecks returned:", decks);
  return {
    type: GET_DECKS,
    payload: decks
  };
}

export function saveDeckTitle(title) {
  const deck = putDeck(title);
  return {
    type: SAVE_DECK_TITLE,
    deck: deck
  };
}

export function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    payload: { key: title, card }
  };
}

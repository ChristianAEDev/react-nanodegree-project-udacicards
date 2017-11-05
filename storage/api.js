import { AsyncStorage } from "react-native";

const STORAGE_KEY_DECK = "STORAGE_KEY_DECK";

export function loadDecks() {
  return AsyncStorage.getItem(STORAGE_KEY_DECK);
}

export function putDeck(title) {
  const deck = { [title]: { title, questions: [] } };
  AsyncStorage.mergeItem(STORAGE_KEY_DECK, JSON.stringify(deck));
  return deck;
}

export function putCardToDeck(key, card) {
  console.log("putCardToDeck:", key, card);
  return AsyncStorage.mergeItem(
    STORAGE_KEY_DECK,
    JSON.stringify({
      [key]: { questions: card }
    })
  );
}

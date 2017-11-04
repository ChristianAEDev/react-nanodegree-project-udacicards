import { AsyncStorage } from "react-native";

const STORAGE_KEY_DECK = "STORAGE_KEY_DECK";

export async function getDecks() {
  let decks = await AsyncStorage.getItem(STORAGE_KEY_DECK);
  return decks;
}

export function putDeck(title) {
  console.log("putDeck", title);
  const deck = { [title]: { title, questions: [] } };
  AsyncStorage.mergeItem(STORAGE_KEY_DECK, JSON.stringify(deck)).catch(e =>
    console.log("error", e)
  );
  console.log("putDeck return:", deck);
  return deck;
}

import { AsyncStorage } from "react-native";

const STORAGE_KEY_DECK = "STORAGE_KEY_DECK";

export async function loadDecks() {

  let value = await Promise.all(AsyncStorage.getItem(STORAGE_KEY_DECK));

  console.log("value:", value);
}

export function putDeck(title) {
  const deck = { [title]: { title, questions: [] } };
  AsyncStorage.mergeItem(STORAGE_KEY_DECK, JSON.stringify(deck)).catch(e =>
    console.log("error", e)
  );
  return deck;
}

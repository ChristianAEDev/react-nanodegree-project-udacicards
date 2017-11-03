import { AsyncStorage } from "react-native";

const STORAGE_KEY_DECK = "STORAGE_KEY_DECK";

export function putDeck(title) {
  let newDeck = { title };
  return AsyncStorage.mergeItem(STORAGE_KEY_DECK, JSON.stringify(newDeck));
}

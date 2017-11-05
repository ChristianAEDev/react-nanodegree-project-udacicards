import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const STORAGE_KEY_DECK = "STORAGE_KEY_DECK";
const STORAGE_KEY_NOTIFICATION = "STORAGE_KEY_NOTIFICATION";

export function loadDecks() {
  return AsyncStorage.getItem(STORAGE_KEY_DECK);
}

export function putDeck(title) {
  const deck = { [title]: { title, questions: [] } };
  AsyncStorage.mergeItem(STORAGE_KEY_DECK, JSON.stringify(deck));
  return deck;
}

export function putCardToDeck(key, card) {
  AsyncStorage.getItem(STORAGE_KEY_DECK).then(value => {
    const decks = JSON.parse(value);
    AsyncStorage.mergeItem(
      STORAGE_KEY_DECK,
      JSON.stringify({
        [key]: { questions: [...decks[key].questions, card] }
      })
    );
  });
}

function createNotification() {
  return {
    title: "Do a quiz!",
    body: "You haven't done a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(STORAGE_KEY_NOTIFICATION)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(
              STORAGE_KEY_NOTIFICATION,
              JSON.stringify(true)
            );
          }
        });
      }
    });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(STORAGE_KEY_NOTIFICATION).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

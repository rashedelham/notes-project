import { AsyncStorage } from 'react-native';

export const keys = {
  notes: 'notes'
}

export async function getAsyncItem(key) {
  let value = await AsyncStorage.getItem(key);
  value = JSON.parse(value);
  return value;
}

export async function setAsyncItem(key, value) {
  value = JSON.stringify(value);
  await AsyncStorage.setItem(key, value);
}

export async function removeAsyncItem(key) {
  await AsyncStorage.removeItem(key);
}

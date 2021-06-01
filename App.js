/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import mealReducer from './store/reducers/meal';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

export default function App() {

  const rootReducer = combineReducers({
    meals: mealReducer
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <MealsNavigator />

    </Provider>
  );
}
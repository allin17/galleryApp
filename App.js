import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, View } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'

import store from './redux/store'

import { Gallery, Favorites, PhotoScreen } from './src/screens'

import { LinearGradient } from 'react-native-linear-gradient'
import { Header } from 'react-navigation' ;

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: 'rgba(128, 0, 128, 10)',
          borderBottomLeftRadius: 13,
          borderBottomRightRadius: 13,
        },
      }}
      
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image style={{ width: 30, height: 30, }} source={{ uri: 'data:image/png;base64,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' }} />
            )
          },
         headerTitle: 'Все изображения'
        }}
        name="Галерея" component={Gallery}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image style={{ width: 25, height: 25 }} source={{ uri: 'data:image/png;base64,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' }} />
            )
          }
        }}
        name="Избранное" component={Favorites}
      />
    </Tab.Navigator>
  )
}

const App = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: 'rgba(128, 0, 128, 10)',
        }}}>
        <Stack.Screen
        options={{headerShown: false}}
        name='Main' component={MainTab}/>
        <Stack.Screen name='Photo' component={PhotoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App
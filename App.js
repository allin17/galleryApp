import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, View } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'

import store from './redux/store'
import { Gallery, Favorites, PhotoScreen } from './src/screens'

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
          tabBarIcon: ({ focused }) => {
            return (
                focused
                    ? <Image style={{ width: 24, height: 24, }} source={require('./img/galleryIcon.png')} />
                    : <Image style={{ width: 24, height: 24, }} source={require('./img/Vector.png')} />
            )
          },
         headerTitle: 'Все изображения'
        }}
        name="Галерея" component={Gallery}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
                focused
                    ? <Image style={{ width: 24, height: 24, }} source={require('./img/favoritesActive.png')} />
                    : <Image style={{ width: 24, height: 24, }} source={require('./img/favoritesOff.png')} />
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
// import a library to help create a Component
import React from 'react'
import { Text, View, AppRegistry } from 'react-native'

import Header from './src/components/Header.js'
import AlbumList from './src/components/AlbumList.js'

// create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>

)

// render it to the device. returning application much with the project name
AppRegistry.registerComponent('ReactNativeProj', ()=> App)

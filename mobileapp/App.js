import React from 'react'
import Routes from './src/routes'
import { YellowBox, StatusBar } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
export default function App() {
  return (

    <>
    <StatusBar  />
    <Routes />
    </>
  )
}


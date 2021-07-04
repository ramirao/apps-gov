import React from 'react'
import {View, Text, StyleSheet, StatusBar } from 'react-native'

const Header = () => {
  return (
     <View style={styles.header}>
      <StatusBar statusBarStyle={'light-content'}/>
	   <Text style={styles.text}>Apps Gov.br</Text>
     </View>
	)
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 50,
	   alignItems: 'center',
	   justifyContent: 'center',
	   borderBottomWidth: 1,
	   borderBottomColor:'#353634',
      backgroundColor: '#022173',
   },
   text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
   }
})

export default Header
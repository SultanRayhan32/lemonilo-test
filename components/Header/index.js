import React , { useState } from 'react'

// MODULE
import { Text, View, StyleSheet , Image , StatusBar } from 'react-native';

// IMAGES
import Promo from '../../assets/Header/promo.png'
import Home from '../../assets/Header/home.png'
import Chat from '../../assets/Header/chat.png'

import Item from './Item/index'

function Header () {
  return (
    <View style={styles.container}>
    
      <Item
        imgP={Promo}
        textP={"Promo"}
        tab={0}
        style={{marginLeft : 15}}
      />

      <Item
        imgP={Home}
        textP={"Beranda"}
        tab={0}
        isActive={true}
      />

      <Item
        imgP={Chat}
        textP={"Chat"}
        tab={0}
        style={{marginRight : 15}}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    height : 105,
    marginTop : StatusBar.currentHeight,
    width : "100%",
    padding: 8,
    backgroundColor : "#3D95FF"
  },
});

export default Header
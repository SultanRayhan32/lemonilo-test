import React from 'react'

// MODULE
import { View , StyleSheet } from 'react-native'

// COMPONENT
import Gopay from './Gopay/index'
import Content from './Content/index'

// IMAGE
import pay from '../../../assets/PayInfo/up-arrow-f.png'
import add from '../../../assets/PayInfo/add-f.png'
import rocket from '../../../assets/PayInfo/rocket-f.png'

function PayInfo () {

  return (
    <View style={styles.container}>
      <Gopay/>
      <Content
        text={"Bayar"}
        image={pay}
      />
      <Content
        text={"Top Up"}
        image={add}
      />
      <Content
        text={"Eksplor"}
        image={rocket}
        stylePr={{marginRight : 15}}
      />
    </View>
  )

}

// STYLING
const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    flexDirection : "row",
    justifyContent : "space-between",
    backgroundColor : "#0081A0",
    width : "100%",
    height : 100,
    borderRadius : 10,
    marginTop : 22
  }
})

export default PayInfo
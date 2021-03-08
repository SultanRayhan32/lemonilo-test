import React from 'react'

// MODULE
import { View , Text, ScrollView , StyleSheet , Image } from 'react-native'

// COMPONENT 
import Item from './Item/index'

function ScrollContent (props) {

  const {
    imgP,
    backgroundIcon,
    titleP,
    textP1,
    textP2,
    imgC, 
    dataP
  } = props

  let renderItem = () => {
    return dataP.map((e)=>{
      return (
        <Item 
          imgC={imgC}
          textC={e}
        />        
      )
    })
  }

  return (
    <View style={styles.container}>

      <View style={{flexDirection : "row",alignItems : "center"}}>
        <View style={[styles.iconText,{backgroundColor : backgroundIcon}]}>
          <Image
            source={imgP}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.firstText}>
          {titleP}
        </Text>
      </View>

      <Text style={styles.secondText}>
        {textP1}
      </Text>

      <Text style={styles.ThidrText}>
        {textP2}
      </Text>

      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {renderItem()}
      </ScrollView>

    </View>
  )

}

const styles = StyleSheet.create({
  container : {
    width : "88%",
    alignItems : "flex-start",
    marginTop : 14
  },
  iconText : {
    width : 17,
    height : 17,
    borderRadius : 100,
    // backgroundColor : "#e6737e",
    justifyContent : "center",
    alignItems : "center",
    marginTop : 4.5
  },
  imageStyle : {
    width : 12,
    height : 12
  },
  firstText : {
    color : "#646464",
    fontSize : 14,
    marginLeft : 5
  },
  secondText : {
    fontSize : 15,
    fontWeight : "bold",
    marginTop : 7.5
  },
  ThidrText : {
    fontSize : 14,
    marginTop : 5
  },
  scroll : {
    // width : "100%",
    marginTop : 14
    // width : "100%",
  },
})

export default ScrollContent;
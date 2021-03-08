import React from 'react'

// MODULE
import { ScrollView , Text , View , StyleSheet } from 'react-native'

// COMPONENT
import Item from './Item/index'

// DATA
import { data } from './data'

function ContentType () {

  let renderItem = () => {
    return data.map((e,i)=>{
      return (
        <Item
          textP={e}
          selected={i=== 0 ? true : false}
        />
      )
    })
  }

  return (
    <ScrollView
      style={styles.scroll}
      nestedScrollEnabled={true}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {renderItem()}
    </ScrollView>
  )

}

// STYLING
const styles = StyleSheet.create({
  scroll : {
    width : "88%",
    height : 35,
    marginTop : 16
    // width : "100%",
  },
})

export default ContentType
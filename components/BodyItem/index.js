import React from 'react'

// MODULE
import { View, StyleSheet , ScrollView , Text } from 'react-native';

// COMPONENT 
import Search from './Search/index'
import User from './User/index'
import PayInfo from './PayInfo/index'
import ContentType from './ContentType/index'
import News from './News/index'
import ScrollContent from './ScrollContent/index'
import AdvContent from './AdvContent/index'

// IMAGE
import image from '../../assets/News/image1.jpg'
import image2 from '../../assets/News/img2.jpg'
import image3 from '../../assets/News/img3.jpg'

// IMAGE SCROLLCONTENT
import imgP1 from '../../assets/Food/spoon.png'
import imgP2 from '../../assets/tix/ticket-f.png'
import food from '../../assets/Food/food-123.jpg'
import cinema from '../../assets/tix/cinema.jpg'

// DATA SCROLLCONTENT
import { movieData , foodData } from './data'

function BodyItem () {
  return (
    <ScrollView 
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

      <View style={styles.container}>

        <View style={styles.first}>
          <Search/>
          <User/>
        </View>

        <View style={styles.first}>
          <PayInfo/>
        </View>

        <Text style={styles.firstTitle}>
          Konten buat kamu
        </Text>     
        <ContentType/> 

        <News 
          image={image} 
          title={"Cobain Kopi Tubruk Sejati"}
        />

        <AdvContent/>

        <ScrollContent
          imgP={imgP1}
          backgroundIcon={"#e6737e"}
          titleP={"gofood"}
          textP1={"#PastiAdaPromo setiap hari"}
          textP2={"Nikmati Rangkain Diskon Special nya"}
          imgC={food}
          dataP={foodData}
        />

        <News 
          image={image2} 
          title={"Pesta Promo"}
        />

        <ScrollContent
          imgP={imgP2}
          backgroundIcon={"#ffffff"}
          titleP={"gotix"}
          textP1={"Mau nonton apa nih minggu ini?"}
          textP2={"Cek dulu film yang baru tayang di bioskop biar tau mau nonton apa nanti!"}
          imgC={cinema}
          dataP={movieData}
        />

        <News 
          image={image3} 
          title={"Banyak pilihan dan hemat"}
        />
       
       <View style={{marginBottom : 490}}></View>
      
      </View>

    </ScrollView>
  )
}

// STYLING
const styles = StyleSheet.create({
  container : {
    width : "100%",
    height : "100%",
    alignItems : "center",
    position : "relative"
  },
  scroll : {
    width : "100%",
    height : "100%",
    marginTop : 20
  },
  first : {
    width : "88%",
    flexDirection : "row",
    justifyContent : "space-between",
    // backgroundColor : "pink"
  },
  firstTitle : {
    fontSize : 19.7,
    fontWeight : "bold",
    marginTop : 26,
    width : "88%"
  },
  
});

export default BodyItem
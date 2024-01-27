import {StyleSheet} from 'react-native'
import {COLORS,SIZES,FONTS,SHADOWS} from '../../constants'

const styles=StyleSheet.create({
    mainuiContainer:{
        width:'100%',
        height:390,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
      width:'90%',
      height:300,
      borderRadius:10,
      ...SHADOWS.Large,
      position:'relative',
   
    },
    background:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        borderRadius:10,
    },
    top:{
        width:'100%',
        height:100,
        // backgroundColor:'green',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'flex-end',
        position:'relative'
    },
    topImage:{
        position:'absolute',
        top:-15,
        left:-5,
        zIndex:1,
        width:150,
        height:150,
        // backgroundColor:'yellow',
    },
    currentTemp:{
        width:'60%',
        height:'100%',
        // backgroundColor:'yellow',
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
        
    },
    currentTempText:{
        fontSize:55,
        fontFamily:FONTS.LatoBold,
        fontWeight:'bold',
        color:'#fff'
    },
    currentTempdegree:{
        fontSize:35,
    },
    middle:{
       width:'100%',
       height:80,
    //    backgroundColor:'gold',
    //    justifyContent:'center',
    // alignItems:'center',
       paddingLeft:20,
       paddingTop:10, 
    },
    conditionText:{
        fontSize:26,
        fontFamily:FONTS.LatoBlack,
        fontWeight:'bold',
        color:'#fff',
        letterSpacing:1,
        justifyContent:'center'
    },
    bottom:{
       width:'100%',
       height:120,
    //    backgroundColor:'lightgreen',
       borderBottomLeftRadius:10,
       borderBottomRightRadius:10, 
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-evenly',
    },
    bottomBox:{
       width:100,
       height:100,
       backgroundColor:'#e8e8e840',
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       gap:4 
    },
    boxhumiditytext:{
       fontSize:14, 
       fontFamily:FONTS.LatoRegular,
       color:'#fff'
    },
    boxhumiditypercent:{
        fontSize:17,
        fontFamily:FONTS.LatoBold,
        fontWeight:'bold',
        color:'#fff'
    }
})

export default styles
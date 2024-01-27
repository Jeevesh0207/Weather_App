import { StyleSheet } from 'react-native'

import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        // padding:10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    box:{
       width:90,
       height:90,
       backgroundColor:COLORS.PurpleVeryLight,
       borderRadius:10,
       justifyContent:'center' ,
       paddingLeft:10,
       paddingTop:20,
       position:'relative',
       margin:10
    },
    boxtexttime:{
        fontSize:13
    },
    boxtopImage:{
        position:'absolute',
        top:-10,
        right:-10,
        width:60,
        height:60
    },
    boxtexttemp:{
        fontSize:20,
        fontWeight:'bold'
    },

})

export default styles
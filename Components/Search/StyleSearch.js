import {StyleSheet} from 'react-native'
import {COLORS,SIZES,FONTS,SHADOWS} from '../../constants'

const styles=StyleSheet.create({
    searchContainer:{
        width:'100%',
        height:55,
        backgroundColor:COLORS.WhiteVeryLight,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        zIndex:2
    },
    inputmainContainer:{
        width:'80%',
        height:45,
        backgroundColor:'#f4f4f4',
        borderRadius:5,
        position:'relative',
     },
    searchResult:{
        position:'absolute',
        left:0,        
        top:47,
        width:'100%',
        height:'auto',
        borderRadius:5,
        backgroundColor:'#f7f7f7',
        overflow:'hidden',
        paddingTop:1,
        paddingBottom:1,
    },
    searchitem:{
        width:"100%",
        height:45,
        backgroundColor:'#f2f2f2',
        marginTop:2,
        borderRadius:3,
        marginBottom:2,
        justifyContent:'center',
        paddingLeft:10,
        borderWidth:1,
        borderColor:COLORS.PurpleVeryLight,
    },
    searchitemtext:{
        fontSize:15,
        fontFamily:FONTS.LatoRegular
    },
    inputContainer:{
       width:'100%',
       height:45,
       backgroundColor:'#f4f4f4',
       borderRadius:5,
       paddingLeft:10,
       fontSize:SIZES.Medium,
       borderWidth:1,
       borderColor:COLORS.PurpleVeryLight,
       fontFamily:FONTS.LatoRegular
    },
    touchablecontainer:{
       width:"15%",
       height:45,
       backgroundColor:COLORS.PurpleLiteDark,
       borderRadius:5,
       alignItems:'center',
       justifyContent:'center'
    },

});

export default styles
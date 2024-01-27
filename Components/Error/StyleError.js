import { StyleSheet } from 'react-native'

import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    loading:{
        width:'90%',
        height:'90%',
        marginBottom:100
    }
})

export default styles
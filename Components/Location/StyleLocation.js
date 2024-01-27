import { StyleSheet } from 'react-native'

import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    minicontainerleft: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap:1
    },
    minicontainerright: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        gap:1
    },
    textleft: {
        fontSize: 18,
        fontFamily:FONTS.LatoBold,
        fontWeight: 'bold',
        color:'#323232'
    },
    textleftbottom: {
        fontSize: 13,
        fontFamily:FONTS.LatoRegular,
        color:'#323232'
    },
    textright: {
        fontSize: 18,
        fontFamily:FONTS.LatoBold,
        fontWeight: 'bold',
        color:'#323232'
    },
    textrightbottom: {
        fontSize: 13,
        fontFamily:FONTS.LatoRegular,
        color:'#323232'
    },
    line:{
        position:'absolute',
        left:0,
        top:10,
        width:1.5,
        height:'90%',
        backgroundColor:COLORS.PurpleLiteDark,
        borderRadius:10,
    }
})

export default styles
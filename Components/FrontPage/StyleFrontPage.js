import {
    StyleSheet
} from 'react-native'

import { COLORS, FONTS, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    screenContainer: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    container: {
        flex: 1,
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    text: {
        fontFamily: FONTS.LatoBold,
        // fontFamily: FONTS.GothamBold,
        fontWeight: 'bold'
    },
    toptext: {
        fontSize: 40,
        color: COLORS.PurpleDark
    },
    midtext: {
        fontSize: 25,
    },
    lasttext: {
        fontSize: 40,
        color: COLORS.PurpleDark
    },
    mainpage: {
        width: 300,
        height: 300,
        backgroundColor: '#fff'
    },

})

export default styles
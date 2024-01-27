import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    dayminiconatiner: (name, selectedDay) => ({
        width: '30%',
        height: 25,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: name === selectedDay ? 1.5 : 0,
        borderBlockColor: name === selectedDay && COLORS.PurpleDark,
        zIndex: 1,

    }),
    dayText: (name, selectedDay) => ({
        fontSize: 13,
        fontFamily: FONTS.LatoRegular,
        color: name === selectedDay ? COLORS.PurpleDark : '#000',
        fontWeight:name===selectedDay?'bold':'400'
    })
})

export default styles
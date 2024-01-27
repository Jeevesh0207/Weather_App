import {
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS } from './constants'

const styles = StyleSheet.create({
    SafeAreaContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,
    },
    dayContainer: {
        width: '100%',
        height: 25,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'

    },
    bottomline: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 1.5,
        backgroundColor: COLORS.WhiteLiteDark,
    }
})

export default styles
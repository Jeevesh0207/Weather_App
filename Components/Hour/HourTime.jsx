import {
    Text,
    View,
    Animated,
    Easing
} from 'react-native'
import { useRef, useEffect } from 'react';
import LottieView from "lottie-react-native";
import styles from './StyleHour'
import { COLORS, SIZES, FONTS, SHADOWS,Climate } from '../../constants'

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const Hour = ({ Data }) => {
    const animationProgress = useRef(new Animated.Value(0));
    const Time = [
        "12:00 AM",
        "1:00 AM",
        "2:00 AM",
        "3:00 AM",
        "4:00 AM",
        "5:00 AM",
        "6:00 AM",
        "7:00 AM",
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
        "11:00 PM",
    ]
    const startAnimation = () => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                animationProgress.current.setValue(0);
                startAnimation();
            }
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <View style={styles.container}>
            {
                Data.hour.map((item, id) => (
                    <View style={styles.box} key={id}>
                        <AnimatedLottieView
                            style={styles.boxtopImage}
                            progress={animationProgress.current}
                            source={Climate[`${item.condition.text.replace(/ /g, '')}`]}

                        />
                        <Text style={styles.boxtexttime}>{Time[id]}</Text>
                        <Text style={styles.boxtexttemp}>{item.temp_c}°C</Text>
                    </View>
                )
                )
            }
        </View>
    )
}

export default Hour
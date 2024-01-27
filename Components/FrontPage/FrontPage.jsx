import {
    Text,
    View,
    Animated,
    Easing,
    ScrollView
} from 'react-native'
import { useRef, useEffect } from 'react';
import styles from './StyleFrontPage'
import LottieView from "lottie-react-native";
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
const FrontPage = () => {
    const animationProgress = useRef(new Animated.Value(0));
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
        <View style={styles.screenContainer}>
                <View style={styles.container}>
                    <Text style={[styles.toptext, styles.text]}>Welcome</Text>
                    <Text style={[styles.midtext, styles.text]}>To Our</Text>
                    <Text style={[styles.lasttext, styles.text]}>Weather Forecast</Text>
                    <AnimatedLottieView
                        style={styles.mainpage}
                        source={require('../../assets/Main.json')}
                        progress={animationProgress.current}

                    />
                </View>
        </View>
    )
}

export default FrontPage
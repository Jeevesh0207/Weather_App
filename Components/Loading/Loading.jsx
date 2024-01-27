import {
    View,
    Text,
    Animated,
    Easing
} from 'react-native'
import { useRef, useEffect} from 'react';
import styles from './StyleLoading'
import LottieView from "lottie-react-native";
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
const Loading = () => {
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
        <View style={styles.container}>
            <AnimatedLottieView
                style={styles.loading}
                source={require('../../assets/loading.json')}
                progress={animationProgress.current}

            />
        </View>
    )
}

export default Loading
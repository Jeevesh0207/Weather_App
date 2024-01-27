import {
    Text,
    View,
    Image,
    Animated,
    Easing
} from 'react-native'
import { useRef, useEffect, useState } from 'react';
import styles from './StyleMainUI'
import { Icon } from '@rneui/themed'
import LottieView from "lottie-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, Climate } from '../../constants';
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const MainUI = ({ Data }) => {
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
        <View style={styles.mainuiContainer}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.background}
                    // start={[0.01, 0.01]}
                    colors={['#9c8eef', '#725ee9','#6654d1']}
                />
                <View style={styles.top}>

                    {
                        <AnimatedLottieView
                            style={styles.topImage}
                            source={Climate[`${Data.day.condition.text.replace(/ /g, '')}`]}
                            progress={animationProgress.current}

                        />
                    }
                    <View style={styles.currentTemp}>
                        <Text
                            style={styles.currentTempText}
                        >
                            {Data.day.maxtemp_c}°
                            <Text style={styles.currentTempdegree}>C</Text>
                        </Text>

                    </View>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.conditionText}>{Data.day.condition.text}</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomBox}>
                        <Text style={styles.boxhumiditytext}>Humidity</Text>
                        <Icon
                            name='water-outline'
                            type='ionicon'
                            color={'#fff'}
                        />
                        <Text style={styles.boxhumiditypercent}>{Data.day.avghumidity}%</Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Text style={styles.boxhumiditytext}>Visibility</Text>
                        <Icon
                            name='eye'
                            type='feather'
                            color={'#fff'}
                        />
                        <Text style={styles.boxhumiditypercent}>{Data.day.avgvis_km} km</Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Text style={styles.boxhumiditytext}>Wind</Text>
                        <Icon
                            name='wind'
                            type='font-awesome-5'
                            color={'#fff'}
                        />
                        <Text style={styles.boxhumiditypercent}>{Data.day.maxwind_kph} km/h</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MainUI
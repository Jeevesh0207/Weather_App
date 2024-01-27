import {
    View,
    Text
} from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'
import styles from './StyleLocation'
import { Icon } from '@rneui/base'
import { useEffect, useState } from 'react'
import moment from 'moment'

const Location = ({ Data ,add}) => {
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const DATE = moment(now).add(add, 'days').toDate();
            const dayOfWeek = daysOfWeek[DATE.getDay()];
            const time = DATE.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            const date = DATE.toLocaleString('en-US', { month: 'short', day: 'numeric' });
            setTime(time)
            setDay(dayOfWeek)
            setDate(date)
        };
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);
        return () => clearInterval(intervalId);
    }, [add])
    return (
        <View style={styles.container}>
            <View style={styles.minicontainerleft}>
                <Icon
                    name='location'
                    type='ionicon'
                    color={'#8661F3'}
                />
                <Text style={styles.textleft}>{Data.location.name}</Text>

                <Text style={styles.textleftbottom}>{Data.location.region} | {Data.location.country}</Text>
            </View>
            <View style={styles.minicontainerright}>
                <Icon
                    name='today'
                    type='ionicon'
                    color={'#8661F3'}
                />
                <View style={styles.line}></View>
                <Text style={styles.textright}>{day}</Text>
                <Text style={styles.textrightbottom}>{date} | {time}</Text>
            </View>
        </View>
    )
}

export default Location
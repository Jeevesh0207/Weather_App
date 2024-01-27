import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './StyleDay'
const Day = ({ name, selectedDay, setselectedDay }) => {
    const SetDay = (day) => {
        setselectedDay(day)
    }
    return (
        <TouchableOpacity style={styles.dayminiconatiner(name, selectedDay)}
            onPress={() => { SetDay(name) }}>
            <Text style={styles.dayText(name,selectedDay)}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Day
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    ScrollView
} from 'react-native';
import { useEffect, useState } from 'react';
import { Search, Day, MainUI, Location, HourTime, Loading, ErrorComp, FrontPage } from '../../Components'
import styles from './StyleHome';
import useApiData from '../../Hook/useApiData';
import axios from 'axios';
import { API_KEY } from '@env'

const Home = () => {
    const [SearchData, setSearchData] = useState('')
    const [RelatedData, setRelatedData] = useState('')
    const { Data, isLoading, Error, FetchData } = useApiData()
    const [selectedDay, setselectedDay] = useState("Today")
    const DayData = ["Today", "Tomorrow", "Next Day"]
    const HandlePress = () => {
        if (SearchData) {
            FetchData(SearchData)
            setSearchData('')
            setRelatedData('')
        }
    }
    useEffect(() => {
        const FindRelated = async () => {
            await axios.get(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${SearchData}`).then((res) => {
                setRelatedData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        if (SearchData)
            FindRelated()
    }, [SearchData])
    return (
        <>
            <Search SearchData={SearchData} setSearchData={setSearchData} handlePress={HandlePress} RelatedData={RelatedData} setRelatedData={setRelatedData} />
            {
                (Error) ? <ErrorComp />
                    :
                    (isLoading) ? <Loading />
                        :
                        (Data) ?
                            <>
                                <View style={styles.dayContainer}>
                                    {
                                        DayData.map((item, id) => (
                                            <Day
                                                name={item}
                                                selectedDay={selectedDay}
                                                setselectedDay={setselectedDay}
                                                key={id}
                                            />
                                        ))
                                    }
                                    <View style={styles.bottomline}></View>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <Location Data={Data} add={(selectedDay === "Today") ? 0 : (selectedDay === "Tomorrow") ? 1 : 2} />
                                    <MainUI
                                        Data={(selectedDay === "Today") ? Data.forecast.forecastday[0] : (selectedDay === "Tomorrow") ? Data.forecast.forecastday[1] : Data.forecast.forecastday[2]}
                                    />
                                    <HourTime
                                        Data={(selectedDay === "Today") ? Data.forecast.forecastday[0] : (selectedDay === "Tomorrow") ? Data.forecast.forecastday[1] : Data.forecast.forecastday[2]}
                                    />
                                </ScrollView>
                            </>
                            :
                           <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                             <FrontPage />
                           </ScrollView>
                            

            }

        </>
    )
}

export default Home



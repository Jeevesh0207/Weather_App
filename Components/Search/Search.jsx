import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'
import { Icon } from '@rneui/themed';
import styles from './StyleSearch'
import { useState } from 'react';
import useApiData from '../../Hook/useApiData'
const Search = ({SearchData, setSearchData, handlePress, RelatedData ,setRelatedData}) => {
    const SetSearchData=(item)=>{
        const data=`${item.name}, ${item.region}, ${item.country}`
        setSearchData(data)
        setRelatedData('')
        setSearchData('')
        handlePress()
    }
    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputmainContainer}>
                <TextInput
                    value={SearchData}
                    style={styles.inputContainer}
                    placeholder='Enter your Location?'
                    onChangeText={setSearchData}
                    selectionColor={COLORS.WhiteDark}
                />
                {
                    (RelatedData) &&
                    <ScrollView
                        style={styles.searchResult}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            RelatedData.map((item, id) => (
                                <TouchableOpacity style={styles.searchitem} key={id} onPress={()=>{SetSearchData(item)}}>
                                    <Text style={styles.searchitemtext}>{item.name}, {item.region} , {item.country}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                }
            </View>
            <TouchableOpacity style={styles.touchablecontainer}
                onPress={handlePress}
            >
                <Icon
                    size={30}
                    name='search'
                    color={COLORS.WhiteVeryLight}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search
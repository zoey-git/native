import React from 'react'
import {
    View,
    Text
} from 'react-native'

class Discover extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '发现'
    })
    render() {
        return (
            <View>
                <Text>Discover</Text>
            </View>
        )
    }
}

export default Discover;
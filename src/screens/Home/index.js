import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LogoutButton from '../../components/LogoutButton'

export default class Home extends Component {
    static navigationOptions={
        headerLeft:LogoutButton
    }
    render() {
        return (
            <View>
                <Text> homepage </Text>
            </View>
        )
    }
}

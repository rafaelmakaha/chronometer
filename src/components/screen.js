import React from 'react';
import { View, Text } from 'react-native';

const Screen = (props) => {
    return(
        <View>
            <Text>{props.time}</Text>
        </View>
    )
}

export default Screen;
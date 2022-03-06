import React from "react";
import {Button, View} from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming
} from 'react-native-reanimated';
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
    const scaleLike = useSharedValue(1)

    const likeStyle = useAnimatedStyle(() => {
        return {
            zIndex: 50,
            opacity: interpolate(scaleLike.value, [1, 2], [0, 1, 0]),
            transform: [
                {scale: scaleLike.value},
            ]
        };
    }, []);

    const onPress = () => {
        scaleLike.value = withSequence(
            withTiming(2),
            withTiming(1)
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'pink',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Animated.View
                style={likeStyle}
            >
                <FontAwesome name="heart" size={100} color="red"/>
            </Animated.View>
            <Button title={'Like'} onPress={onPress}/>
        </View>
    );
}

import {View, Text, Pressable} from 'react-native'
import {router} from 'expo-router'
export default AboutPage = () => {
    return(
    <View>
        <Text>About Page</Text>
        <Pressable onPress={() => router.replace('/')}>
            <Text>
                Back
            </Text>
        </Pressable>
    </View>
    )
}
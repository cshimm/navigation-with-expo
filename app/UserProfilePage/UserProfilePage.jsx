import {View, Text, Pressable} from 'react-native'
import {router, useLocalSearchParams} from 'expo-router'
export default UserProfilePage = () => {
    const {slug} = useLocalSearchParams()
    console.log(slug)
    return(
    <View>
        <Text>User Profile Page for {slug}</Text>
        <Pressable onPress={() => router.replace('/')}>
            <Text>
                Back
            </Text>
        </Pressable>
    </View>
    )
}
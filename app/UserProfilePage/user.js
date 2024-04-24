import {View, Text, Pressable} from 'react-native'
import {router, useLocalSearchParams} from 'expo-router'
export default UserProfilePage = () => {
    const {id} = useLocalSearchParams()
    return(
    <View>
        <Text>User Profile Page for {id}</Text>
        <Pressable onPress={() => router.replace('/')}>
            <Text>
                Back
            </Text>
        </Pressable>
    </View>
    )
}
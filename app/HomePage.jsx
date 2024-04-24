import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Link} from 'expo-router'
const styles = StyleSheet.create({
    link: {
        width:100,
        padding: 3
    },
    border: {
        borderWidth: 2,
        marginBottom:5
    },
    headingText: {
        fontSize: 20
    },
    container:{
        flex:1
    }
})
export default HomePage = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.headingText}>Home Page</Text>
        <Link style={[styles.link, styles.border]} href='/AboutPage'>About</Link>
        <Link style={[styles.link, styles.border]} href={{
            pathname: "/UserProfilePage/user",
            params: {id: 'bacon'}
        }} asChild>
            <Pressable>
                <Text>
                    User Profile Page for bacon
                </Text>
            </Pressable>
        </Link>
    </View>
    )
}
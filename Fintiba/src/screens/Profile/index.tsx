import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { deleteProfile, setProfile } from '../../state/profileSlices';
import { store } from "../../state/store";
import Button from "../../components/button";

const ProfileScreen = ({ navigation }) => {

    const userProfile = store.getState().profile;
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <View>
                    <Image style={styles.profilePicture}
                        source={{
                            uri: userProfile.picture,
                        }}
                    />
                </View>
                <View style={{ alignItems: "center", paddingLeft: 10, justifyContent: "center" }}>
                    <Text style={styles.text}>
                        {userProfile.name}
                    </Text>
                    <Text style={styles.text}>
                        {userProfile.email}
                    </Text>
                </View>
            </View>
            <View>
                <Button label="Logout" onPress={() => { dispatch(deleteProfile()); navigation.navigate("LoginScreen") }} />
            </View>
        </View>
    )
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    profileCard: {
        borderRadius: 10,
        backgroundColor: "#0096C7",
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    profilePicture: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 800,
        color: "#000"
    }
});
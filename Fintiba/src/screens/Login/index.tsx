import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { deleteProfile, setProfile } from '../../state/slices';
import { store } from "../../state/store";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = React.useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "805198455899-964f1b3es8nkkgnss0cbq3oi6ursri0g.apps.googleusercontent.com",
        iosClientId: "805198455899-sabijblon1qdnuo0a86v4kumhvk3tn6t.apps.googleusercontent.com",
        webClientId: "805198455899-lpa2b2mv02slf68eqetnsklf1gnbcm6k.apps.googleusercontent.com"
    })

    React.useEffect(() => {
        signInWithGoogle()
    }, [response])

    async function signInWithGoogle() {
        const user = await AsyncStorage.getItem("@user");
        if (!user) {
            if (response?.type === "success") {
                await getUserInfo(response.authentication.accessToken);

            }
        } else {
            setUserInfo(JSON.parse(user));


        }
    }

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            dispatch(setProfile({ name: user.name, email: user.email, picture: user.picture }));
            console.log(JSON.stringify(store.getState()))
            setUserInfo(user);
        } catch (error) {
            console.log("----ERROR: " + error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 800, color: "#5381E6" }}>FINTIBA</Text>
            <TouchableOpacity style={{ backgroundColor: "#00A1FF", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 }}
                onPress={async () => { await promptAsync(); navigation.navigate("HomeScreen"); }}>
                <Text style={{ fontSize: 20, color: "#ffffff" }}>Sign in with Google</Text>
            </TouchableOpacity>
            {/* <Button title="Delete local storage" onPress={() => dispatch(deleteProfile())} /> */}
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
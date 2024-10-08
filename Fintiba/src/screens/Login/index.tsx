import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import Button from "../../components/button";
import { useTranslation } from "react-i18next";
import { setProfile } from "../../state/profileSlices";

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
        dispatch(setProfile({ name: JSON.parse(user).name, email: JSON.parse(user).email, picture: JSON.parse(user).picture }));
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
            setUserInfo(user);
        } catch (error) {
            console.log("----ERROR: " + error);
        }
    };

    const { t, i18n } = useTranslation();

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 800, color: "#5381E6" }}>FINTIBA</Text>
            <Button label={t("signInWithGoogle")} onPress={async () => { await promptAsync(); navigation.navigate("HomeScreen") }} />
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
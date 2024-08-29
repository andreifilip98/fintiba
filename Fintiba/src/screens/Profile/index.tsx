import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from "react-native";
import { useDispatch } from "react-redux";
import { deleteProfile, setProfile } from '../../state/profileSlices';
import { store } from "../../state/store";
import Button from "../../components/button";
import { useTranslation } from "react-i18next";
import Animated, { measure, runOnUI, useAnimatedRef, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const ProfileScreen = ({ navigation }) => {

    const userProfile = store.getState().profile;
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const [isEnabled, setIsEnabled] = React.useState(i18n.language !== "en");
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const changeLanguage = () => {
        toggleSwitch()
        if (isEnabled) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ar');
        }
    }

    const animatedRef = useAnimatedRef();
    const isOpen = useSharedValue(false);
    const height = useSharedValue(0);
    const animatedHeightStyle = useAnimatedStyle(() => ({
        height: withTiming(height.value)
    }))

    const setHeight = () => {
        'worklet'

        height.value = !height.value
            ? Number(measure(animatedRef).height ?? 0)
            :
            0
        isOpen.value = !isOpen.value
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => runOnUI(setHeight)()} style={styles.animatedCard}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                <Animated.View style={[animatedHeightStyle]}>
                    <View ref={animatedRef}
                        collapsable={false} style={{ position: "absolute", top: 10, left: -150, padding: 10 }}>
                        <Text>
                            sdfsadfasfds adf dasdf asf assdf da gsd gsdfgsdf fs saaskj bdaskjdf ajdh kjasbk dsahjk dasb
                            sdfsadfasfds adf dasdf asf assdf da gsd gsdfgsdf fs saaskj bdaskjdf ajdh kjasbk dsahjk dasb
                        </Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <TouchableOpacity>
                    <Text style={{ color: "#000" }}>
                        {t("changeLanguage")}
                    </Text>
                </TouchableOpacity>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={changeLanguage}
                    value={isEnabled}
                />
            </View>
            <View>
                <Button label={t('logout')} onPress={() => { dispatch(deleteProfile()); navigation.navigate("LoginScreen") }} />
            </View>
        </View >
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
    animatedCard: {
        backgroundColor: "#e19a3d",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 10,
        padding: 10
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
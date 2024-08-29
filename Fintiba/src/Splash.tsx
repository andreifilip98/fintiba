import React, { Dispatch, SetStateAction } from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

interface props {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash = ({ setIsLoading }: props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#000", margin: 0 }}>
            <LottieView
                style={{ flex: 1 }}
                source={require('../assets/splash.json')}
                autoPlay
                loop={false}
                resizeMode='cover'
                onAnimationFinish={() => setIsLoading(false)}
            />
        </View>
    );
}

export default Splash;
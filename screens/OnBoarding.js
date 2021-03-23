import React from 'react';
import { Animated, StyleSheet, Text,SafeAreaView, View, Image,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Onboarding from "react-native-onboarding-swiper";


import {images, theme} from "../screens/constants"
const {one, two} = images;


const {COLORS, FONTS, SIZES} = theme;
const onBoardings = [
    {
        title: "Welcome to World Friendship Organization",
        description: "World Friendship Organization (W.F.O.) started its work on 28th April 2010 as small community.",
        img: one
    },
    {
        title: "Introduction",
        description: "World Friendship Organization (W.F.O.) started its work on 28th April 2010 as small community.",
        img: two
    },
 
];

const OnBoarding = () => {
    
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);



    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                
                        key={index}
                        style={styles.imageAndTextContainer}
                    >
                        <View >
                            <Image
                                source={item.img}
                                resizeMode='center'
                                style={{
                                    height:90,
                                    width:100,
                                    top: '300%',
                                    left: '40%',
                                    
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '40%',
                                left: 20,
                                right: 20
                            }}
                        >
                            <Text style={{
                                ...FONTS.h1,
                                color: COLORS.white,
                                textAlign: 'center',
                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                ...FONTS.body3,
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                color: COLORS.white,
                            }}
                            >
                                {item.description}
                            </Text>
                        </View>
                       
                    
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }


function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
        <View style={styles.dotsContainer}>
            {onBoardings.map((item, index) => {
                const opacity = dotPosition.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp"
                });

                const dotSize = dotPosition.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [SIZES.base, 10, SIZES.base],
                    extrapolate: "clamp"
                });

                return (
                    <Animated.View
                        key={`dot-${index}`}
                        opacity={opacity}
                        style={[styles.dot, { width: dotSize, height: dotSize, }]}
                    />
                );
            })}
        </View>
    );

}
    return (
        
        <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#AE3DD1', '#4F1595']} style={styles.body}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
            </LinearGradient>
        </SafeAreaView>
        
    ); 
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.blue
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        marginHorizontal: SIZES.radius / 2
    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4F1595'
    },
});


export default OnBoarding;
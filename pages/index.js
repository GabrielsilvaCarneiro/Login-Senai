import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {

    const navigation = useNavigation();
    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });

    return (
        <View style={styles.container} >
            <View style={styles.containerLogo}>
            <Animatable.Image
                delay={1000}
                animation="flipInY"
                source={require("../assets/logo-branco-senai.png")}
            style={styles.logo}
            resizeMode="contain"
                                />

            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                    Monitore e organize seus recursos didáticos de qualquer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#880000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 12,
        color: "#FFF",
        fontFamily: 'Oswald',
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#880000',
        fontWeight: 'bold'
    }

})
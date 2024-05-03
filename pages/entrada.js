import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Acesso() {

    const navigation = useNavigation();
    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'Gabrielsesi.sc@gmail.com' && password === 'Gabriel') {
            Alert.alert("Bem-vindo!", "Redirecionando para a página inicial.");
            navigation.navigate('index'); 
        } else {
            Alert.alert("Erro", "Usuário ou senha incorretos, por favor, tente novamente.");
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Entre na sua conta</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('registrar-se')} style={styles.buttonRegister}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.button}>
                            <Text style={styles.buttonExit}>Voltar a tela inicial</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        fontFamily: 'Oswald',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    buttonExit: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
});

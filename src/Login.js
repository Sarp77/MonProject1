import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';

import { Button, Input, Button2 } from './components'

const Login = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffab91'}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'android' ? null : "padding"}>
                <ScrollView style={{flex: 1 }} bounces={false}>

                    <View style={{flex: 1}}>
                        <Image
                            source={require('./assets/cart.png')} 
                            style={styles.logoStyle}
                            />

                        <Input holder="Enter your E-mail adress.." />
                        <Input holder="Enter your password.." />


                        <Button text='Login'/>
                        <Button2 text='Sing in'/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    logoStyle: {
        
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        tintColor: 'black',
        height: Dimensions.get('window').height * 0.4
    }
})
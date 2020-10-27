import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const Input = ({holder}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder={holder}
            />
        </View>
           

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: Platform.OS == "ios" ? 15 : 0,
        margin: 5,
        borderRadius: 12,
        marginVertical: 15
    }

})
 
export { Input };
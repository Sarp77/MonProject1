import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const Button2 = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}


export {Button2};


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 12
    },

    text: {
        margin: 10,
        color: '#00acc1',
        textAlign: 'center'
    }
})
        

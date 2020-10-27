import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export {Button};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e64a19',
        padding:10,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 12

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

    }
})
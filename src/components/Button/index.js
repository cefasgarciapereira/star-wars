import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function Button(props){
    return(
        <TouchableOpacity style={styles.container} onPress={() => props.action()}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
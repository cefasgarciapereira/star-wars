import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function ListItem(props){

    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return(
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Planet', props.planet)}>
            <Text style={styles.name}>{props.planet.name}</Text>
            <Text style={styles.population}><B>População: </B>{props.planet.population}</Text>
        </TouchableOpacity>
    );
}
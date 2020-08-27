import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles'
import SwapiContext from '../../contexts/swapi'; 

export default function PlanetCard({planet}){
    const {getResidents} = useContext(SwapiContext)
    const [residents, setResidents] = useState([])

    useEffect(() =>{
        async function fetchUsers(){
            let response = await getResidents(planet.residents);
            setResidents(response)
        } 
        fetchUsers();
    },[])

    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text><B>Clima: </B>{planet.climate}</Text>
            <Text><B>Terreno: </B>{planet.terrain}</Text>
            <Text><B>População: </B>{planet.population}</Text>
            <Text><B>Moradores: </B>{residents}</Text>
        </View>
    )
}
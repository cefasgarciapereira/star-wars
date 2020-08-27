import React, {useContext} from 'react';
import { FlatList, View, Image } from 'react-native';
import Layout from '../../components/Layout';
import SwapiContext from '../../contexts/swapi';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import logo from '../../../assets/logo.png';
import styles from './styles';

const numColumns = 2;

export default function Planets({navigation}){
    const {planets, swapiNavigation, navigateTo} = useContext(SwapiContext);

    const formatData = (data, numColumns) => {
        if(typeof data != "undefined"){
            const numberOfFullRows = Math.floor(data.length / numColumns);
            let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
            while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
                data.push({key: numberOfElementsLastRow, empty: true});
                numberOfElementsLastRow++;
            }
            return data;
        }
    }; 

    return(
        <Layout>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.listContainer}>
                <FlatList
                numColumns={numColumns}
                data={formatData(planets,numColumns)}
                renderItem={({item}) => <ListItem planet={item} navigation={navigation}/>}
                keyExtractor={item => item.name}/>
            </View>
            <View style={styles.navigationContainer}>
                <Button
                title="Anterior"
                action={() => navigateTo(swapiNavigation.previous)}/>
                <Button
                title="Próximo"
                action={() => navigateTo(swapiNavigation.next)}/>
            </View>
        </Layout>
    )
}
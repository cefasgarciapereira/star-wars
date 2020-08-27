import React, {useContext} from 'react';
import Layout from '../../components/Layout';
import PlanetCard from '../../components/PlanetCard';
import styles from './styles';

export default function Planets({route}){

    return(
        <Layout>
            <PlanetCard planet={route.params}/>
        </Layout>
    )
}
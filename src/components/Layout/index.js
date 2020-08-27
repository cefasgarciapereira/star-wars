import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const image = require('../../../assets/bg.jpg');


export default function Layout({children}){
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={image} style={styles.image}>
                {children}
            </ImageBackground>
        </SafeAreaView>
    );
}
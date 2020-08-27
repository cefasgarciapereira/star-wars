import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

const SwapiContext = createContext();
const BASE_URL = 'https://swapi.dev/api';


export const SwapiProvider = ({children}) => {
    const [planets, setPlanets] = useState([]);
    const [swapiNavigation, setSwapiNavigation] = useState({next: null, previous: null});

    useEffect(() =>{
        getAllPlanets();
    },[])

    async function getAllPlanets(){
        Axios.get(`${BASE_URL}/planets`)
        .then(response => {
            setPlanets(response.data.results)
            setSwapiNavigation({
                next: response.data.next,
                previous: response.data.previous
            })
        })
        .catch(error => {
            alert(`Erro inesperado: ${error}`)
        })
    }

    async function navigateTo(url){
        if(url !== null){
            Axios.get(url)
            .then(response =>{
                setPlanets(response.data.results)
                setSwapiNavigation({
                    next: response.data.next,
                    previous: response.data.previous
                })
            })
            .catch(error => {
                alert(`Erro inesperado: ${error}`)
            })
        }else{
            console.log('Não tem mais navegação');
        }
    }

    async function getResidents(urls) {
        let residents = [];
        for (let url of urls) {
            try {
                let response = await Axios.get(url)
                residents.push(response.data.name);
            } catch(error) {
                alert('Erro inesperado: '+error)
            }
        }
        return residents;
    }

    return(
        <SwapiContext.Provider
        value={{
            planets,
            swapiNavigation,
            navigateTo,
            getResidents
        }}>
            {children}
        </SwapiContext.Provider>
    );
}

export default SwapiContext;
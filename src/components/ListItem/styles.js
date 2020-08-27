import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        height: 200,
        backgroundColor: 'rgba(0,0,0,.7)',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        justifyContent: 'center',
        margin: 5,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    name:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    },
    population:{
        color: '#fff',
    },
  });
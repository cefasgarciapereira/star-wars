import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  logo:{
    height: 70, 
    resizeMode:'contain', 
    alignSelf:'center', 
    margin: 40
  },
  listContainer:{
    maxHeight: '80%'
  },
  navigationContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    bottom: 16,
    width: '100%',
    paddingHorizontal: 5
  }
});
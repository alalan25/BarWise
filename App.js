import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import{createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
 
import Icon from 'react-native-vector-icons/MaterialIcons';  //for accessing the pre-defined icons
import FlatListBasics from "./components/list";

 class HomeScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Barwise!</Text>
    
      <Text>Save Your WaitTime by one Click!</Text>
    </View>
  );
}
}
class FindBars extends React.Component {
  render(){
  return (
    <ImageBackground source= {require('./img/black_b.jpg')}style={styles.container}>
      <FlatListBasics />
    </ImageBackground>
  );
}
}

export default createMaterialBottomTabNavigator({
Home:{screen:HomeScreen, //creating an object called Home
navigationOptions:{
  tabBarLabel:'Home',
  tabBarIcon:({tintiColor})=>(
    <Icon name= 'home' color={tintiColor} size= {24} />
  )
}
},
Settings: {screen: FindBars,
  navigationOptions:{
    tabBarLabel:'FindBars',
    tabBarIcon:({tintiColor})=>(
      <Icon name= 'local-bar' color={tintiColor} size= {24} />
    )
  }
} //make a settings page called FindBars
},{
  initialRouteName: 'Home', //When you open the app, it directly open up home page
  activeTintColor: 'white', //the text color of the navBar at the bottom chanages to black
  shifting: true, // when you click the icon, the icon pops out and there is smooth transition between pages

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

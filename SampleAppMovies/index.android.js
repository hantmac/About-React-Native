/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
var MOCKED_MOVIES_DATA=[
{title:'标题',year:'2016',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
];

class SampleAppMovies extends Component {
  render() {
  	var movie = MOCKED_MOVIES_DATA[0];
    return (

      <View style={styles.container}>
       
       <Image
        source={{uri:movie.posters.thumbnail}} 
       style={styles.thumbnail}/>

       <View style={styles.rightContainer}>

       <Text style={styles.title}>{movie.title}</Text>
       <Text style={styles.year}>{movie.year}</Text>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
  },
  thumbnail:{
  	width:81,
  	height:90,
  },
  rightContainer:{
  	flex: 1,
  },
  title:{
      fontSize:20,
      marginBottom:8,
      textAlign:'center',
    },
    year:{
      //fontSize:40,
      textAlign:'center',
    }, 
  
});
AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);

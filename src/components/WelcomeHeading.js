import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';


const WelcomeHeading = () => {
  return (
    <SafeAreaView>
        <View style={styles.titleCont}>
            <Text style={styles.title}>React Native <Text style={styles.titleText}>Redux and Navigation</Text> Boiler-Plate</Text>
        </View>
    </SafeAreaView>
    );
};

  // STYLE_SHEET
  const styles = StyleSheet.create({

  titleCont:{
    padding:10,
    margin:10,
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
  },
  titleText:{
    color: "#ff0000"
  },

});

export default WelcomeHeading;

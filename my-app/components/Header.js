import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Svg } from 'react-native';

const Header = () => {
  return (
    <View style={{backgroundColor: '#F5AB00', color: '#ffffff', width: '100%'}}>
        <Text>**логотип</Text>
        <Text style={styles.headerTitle}>ЗАЯВКИ ДЛЯ ПОВАРОВ В БЫСТРОМ ПИТАНИИ</Text>
        <Text style={styles.headerSlogan}>нереально крутой слоган</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold', 
    marginTop: '5%', 
    color: 'white',
    fontSize: 20
  },
  headerSlogan: {
    textAlign: 'center',
    marginBottom: '12%',
  }
});

export default Header;
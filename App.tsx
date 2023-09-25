import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React from 'react';

export default function App() {

  const nomes = ['Ana Maria', 'Bruno', 'Carlos José', 'Daniel Martins', 'Efraim Gomes', 'Francisco Junior']

  /*   const [nome, setNome] = React.useState('') */

  return (
    <ImageBackground
      source={require('./assets/roblox.gif')} // Substitua pelo caminho da sua imagem
      style={styles.container}
    >

      <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: '900', fontFamily: 'monospace', marginTop: 40, }}>usuários</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeView}>
            <Text style={styles.nomeItem}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  nomeItem:{
    fontSize:14,
    fontFamily:'monospace',
    fontWeight:'800',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white'

  },
  nomeView:{
    display:'flex',
    width:200,
    height:50,
    backgroundColor:'transparent',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,


  }
});

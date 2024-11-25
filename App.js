import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as obj_DDD from './services/ddd.js'
import CardCidade from './components/card_cidade.js';
import React, {useEffect, useState} from 'react';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);

  const [emFoco, setEmFoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2){
      obj_DDD.buscarDDDCallBack(ddd, dados =>{
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities);
    });
      }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <TextInput
      style={[styles.input,{borderColor: emFoco ? '#05e7e7':'#018080'}]}
      placeholder="Enter DDD"
      keyboardType="numeric"
      maxLength={2}
      value={ddd}
      onChangeText={text => setDDD(text.replace(/[^0-9]/g,''))}
      onFocus={() => setEmFoco(true)}
      onBlur={() => setEmFoco(false)}
      />

      <View style={styles.View_lista}>
          <FlashList
              data={cities}
              renderItem={({ item, index }) =>
                <CardCidade
                nome={item}
                uf={uf}
                key={index}
                />
              }
              estimatedItemSize={200}
          />

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636363',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:30,
  },
  input:{
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    fontSize: 16
  },
  View_lista: {
    flex: 1,
    width: '100%',
  }
});

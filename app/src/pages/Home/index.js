import React from 'react';
import { FlatList } from 'react-native';
import  Header  from '../../components/Header';

const Home = () => {
 return (
  <FlatList
    renderItem={Header}
    data={[1]}
  >
  
  </FlatList>
 )
}

export default Home;
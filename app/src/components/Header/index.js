import React from 'react';
import { Text } from 'react-native-paper';
import { Cover, GradientView } from '../../styles';

const Header = () => {
  return (
  
    <Cover 
      image="https://imgs.search.brave.com/l_Nb7STGm08DpqLyZoS7GjoNPvs5Zqwer_e0GQqD1_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlkL2Ji/LzVkLzlkYmI1ZDVj/NDgwMTYzYjMyZTNm/YTMyNjllNjYyNDQw/LmpwZw"
      width= {"100%"}
      height= {"300px"}
     >
      <GradientView 
        colors={['#21232f33', '#21232fe6']}
      >
      </GradientView>
     </Cover>
  
  ) 


}

export default Header;
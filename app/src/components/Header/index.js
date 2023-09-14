import React from 'react';
import { Box, GradientView, Cover} from '../../styles';

import {colors} from '../../styles/theme.json'


const Header = () => {
  return (    
      <Box>
         
        <Cover 
        image="https://imgs.search.brave.com/eApbbjdZCxljwwlVo18iYgkyDI5sVf7o9ZAF7G0jijE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MTQyOTYwMi9wdC9m/b3RvL2hhaXItYmVh/dXR5LXNhbG9uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1M/ckU0SS1CUzJ1NEUt/aTBLNVFjektyU0VF/Q1JHcmdnTHZyWXFS/bDlfdFRVPQ"
        width= {"100%"}
        height= {"300px"}>
         
        </Cover>
      </Box>      
  ) 
}
// <GradientView  colors={['#21232f33', '#21232fe6']}></GradientView>
export default Header;
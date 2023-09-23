import React from "react";

import { Text, Title, Spacer, Box, Cover } from "../../styles";
import theme from "../../styles/theme.json";
import util from "../../util";


const Resume= () => {
  return(
    <Box align="center" row hasPadding background={util.toAlpha(theme.colors.muted, 5)}>
      <Cover 
        width={"80px"}
        height={"80px"}
        image="https://imgs.search.brave.com/oeDPUDa9OpQypfKej-rittW3rVkm_NwWJYMgc2c14-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9uYnViYmxlcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDMvQ29ydGUt/ZGUtY2FiZWxvLWN1/cnRvLTIwMjAtbW9y/ZW5hLTExLTQwMHg2/MDAuanBn"
      />
      <Box >
        <Title>Corte de cabelo.</Title>
        <Spacer/>
        <Text small>
          Total: R$ 50,00
        </Text>
      </Box>
    </Box>
  )
}

export default Resume;
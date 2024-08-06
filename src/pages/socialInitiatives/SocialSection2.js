import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function SocialSection2() {
  return (
   <Box>
    <Container>
      <Box sx={{textAlign:"center", marginBottom:"100px"}}>
        <Typography variant='h4' sx={{fontWeight:"600", padding:"40px","&:hover":{
          color:"#c29943",
          transition:".3s"
        }}}>
            Social Initiatives
        </Typography>
        <Box sx={{backgroundColor:"#FAFAFA", padding:{lg:"40px 150px", md:"40px 150px", sm:"40px 100px", xs:"20px 20px"}}}>
          <Typography sx={{color:"#D6BB82", fontWeight:"600", fontSize:"17px", padding:"10px"}}>Fostering Change: Social Initiatives Transforming Communities</Typography>
          <Typography sx={{fontSize:"15px"}}>Social initiatives are purpose-driven endeavors that seek to address societal issues, champion positive change, and enhance the well-being of communities. These initiatives encompass a wide spectrum of efforts, from grassroots movements to large-scale projects initiated by organizations or governments. Their core focus is
            to tackle social, environmental, or economic challenges by engaging communities, creating awareness,
            and implementing sustainable solutions</Typography>
        </Box>
      </Box>
    </Container>
   </Box>
  )
}

export default SocialSection2

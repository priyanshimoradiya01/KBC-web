import { Box, Typography } from '@mui/material';
import React from 'react';
import RS1 from '../../assets/images/Residential/RS1.png';



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Residentialsec1() {
  return (
    <Box alignItems={"center"} sx={{ backgroundImage: `url(${RS1})`, height: "100%", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", textAlign: "center",backgroundSize:"cover",backgroundPosition:"center" }}>
    <Box sx={{ marginTop: "200px", paddingBottom: "55px" }}>
        <Typography py={2} sx={{ fontFamily: "Gothic A1, sans-serif", color: "white","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }} fontWeight={600} variant='h4'>Our Projects</Typography>
        <div onClick={handleClick}>
        <Box display={"flex"} gap={1} justifyContent={"center"}>
             <Typography sx={{fontSize:"20px",fontWeight:"700",color:"white",fontFamily: "Gothic A1, sans-serif","&:hover":{color:"#B57E0A"}}}>Home</Typography>
             <Typography sx={{fontSize:"20px",fontWeight:"700",color:"white" ,fontFamily: "Gothic A1, sans-serif","&:hover":{color:"#B57E0A"}}}>/</Typography>
             <Typography sx={{fontSize:"20px",fontWeight:"700",color:"white",fontFamily: "Gothic A1, sans-serif","&:hover":{color:"#B57E0A"}}} >Residential Properties</Typography>
      </Box>
        </div>
    </Box>
</Box>
  );
}

export default Residentialsec1;

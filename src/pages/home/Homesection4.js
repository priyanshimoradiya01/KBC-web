
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import homeimg from '../../assets/images/Home/property.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Homesection4() {
  return (
    <div>
      <Box sx={{marginTop:{lg:"200px",md:"200px",sm:"200px",xs:"400px",}}}>
    <Container>
      <Box>
       <Box sx={{display:"flex", justifyContent:"center"}}>
       <Box sx={{textAlign:"center", width:{lg:"40%", md:"40%", sm:"60%", xs:"80%"}}}>
        <Typography sx={{color:"#BE9031", fontWeight:"500", paddingBottom:"10px","&:hover":{
          color:"#000",
          transition:".3s"
        }}}>What We Do</Typography>
        <Typography variant='h5' sx={{fontWeight:"600","&:hover":{
          color:"#c29943",
          transition:".3s"
        }}}>Changing he Way the World
        Experiences Property</Typography>
        </Box>
       </Box>
       <Box>
       <Grid container spacing={2} sx={{display:"flex", justifyContent:"center", marginTop:"30px  "}}>
          <Grid item lg={4} md={6} sm={12} xs={12} sx={{display:{sm:"flex"}, justifyContent:{sm:"center"}, marginRight:{lg:"10px",md:"10px", sm:"10px",xs:"10px"}}}>
            <Box sx={{width:{lg:"450px", md:"450px", sm:"100%", xs:"100%"}}}>
              <img src={homeimg} alt="" style={{width:"100%"}}/>
            </Box>
          </Grid>
{/* =================================box-1============================== */}
          <Grid item xs={5} sx={{display:{md:"flex",sm:"flex",xs:"flex"}, alignItems:{ sm:"center", xs:"center"} , justifyContent:{md:"center", sm:"center", xs:"center"}}}>
            <Box sx={{  marginLeft:"10px" }}>
              <Box sx={{width:{lg:"360px", md:"360px", sm:"100%", xs:"100%"}, borderRadius:"30px", display:"flex", padding:"0 0", justifyContent:"space-between", alignItems:"center", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)","&:hover":{
                backgroundColor:"#BE9133",
                "& .box1":{
                  backgroundColor:"#BE9133",
                  boxShadow:"7px 0 3px -2px #FFF",
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box2":{
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box3":{
                  backgroundColor:"#FFF",
                  transition:".3s",
                },
                "& .iconRight":{
                  color:"#BE9133",
                  transition:".3s",
                }
              }}}>
                <Typography className='box1' sx={{width:"17%", borderRadius:"50%",height:"55PX", display:"flex", justifyContent:"center", alignItems:"center", boxShadow:"7px 0 3px -2px #BE9133", backdropFilter:"blur(15px)"}}>01</Typography>
                <Typography className='box2' sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>Residential</Typography>
                <Typography className='box3' sx={{width:"14%", borderRadius:"50%",height:"45PX", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#BE9133", marginRight:"8px"}}><ArrowRightAltIcon className='iconRight' sx={{color:"#FFF", fontSize:"30px"}}/></Typography>
              </Box>
              {/* =============================box2======================= */}
              <Box sx={{width:{lg:"360px", md:"360px", sm:"100%", xs:"100%"}, borderRadius:"30px", display:"flex", padding:"0 0", marginTop:"30px",justifyContent:"space-between", alignItems:"center",boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)","&:hover":{
                backgroundColor:"#BE9133",
                "& .box1":{
                  backgroundColor:"#BE9133",
                  boxShadow:"7px 0 3px -2px #FFF",
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box2":{
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box3":{
                  backgroundColor:"#FFF",
                  transition:".3s",
                },
                "& .iconRight":{
                  color:"#BE9133",
                  transition:".3s",
                }
              }}}>
                <Typography className='box1' sx={{width:"17%", borderRadius:"50%",height:"55PX", display:"flex", justifyContent:"center", alignItems:"center", boxShadow:"7px 0 3px -2px #BE9133",backdropFilter:"blur(15px)"}}>02</Typography>
                <Typography className='box2' sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>Commercia</Typography>
                <Typography className='box3' sx={{width:"14%", borderRadius:"50%",height:"45PX", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#BE9133", marginRight:"8px"}}><ArrowRightAltIcon className='iconRight' sx={{color:"#FFF", fontSize:"30px"}}/></Typography>
              </Box>
              {/* =================================box-3============================== */}
              <Box sx={{width:{lg:"360px", md:"360px", sm:"360px", xs:"260px"}, borderRadius:"30px", display:"flex", padding:"0 0", marginTop:"30px",justifyContent:"space-between", alignItems:"center",boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)","&:hover":{
                backgroundColor:"#BE9133",
                "& .box1":{
                  backgroundColor:"#BE9133",
                  boxShadow:"7px 0 3px -2px #FFF",
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box2":{
                  color:"#FFF",
                  transition:".3s",
                },
                "& .box3":{
                  backgroundColor:"#FFF",
                  transition:".3s",
                },
                "& .iconRight":{
                  color:"#BE9133",
                  transition:".3s",
                }
              }}}>
                <Typography className='box1' sx={{width:"17%", borderRadius:"50%",height:"55PX", display:"flex", justifyContent:"center", alignItems:"center", boxShadow:"7px 0 3px -2px #BE9133",backdropFilter:"blur(15px)"}}>03</Typography>
                <Typography className='box2' sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>Industrial</Typography>
                <Typography className='box3' sx={{width:"14%", borderRadius:"50%",height:"45PX", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#BE9133", marginRight:"8px"}}><ArrowRightAltIcon className='iconRight' sx={{color:"#FFF", fontSize:"30px"}}/></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
       </Box>
      </Box>
    </Container>
   </Box>
    </div>
  )
}

export default Homesection4

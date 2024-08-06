  import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import art from '../../assets/images/Home/articles.png'

function Homesection6() {
  return (
    <div>
      <Box  sx={{marginTop:"100px"}}>
      <Container>
      <Box marginTop={5} alignItems={"center"} sx={{backgroundImage:`url(${art})`,height:"100%",backgroundRepeat:"no-repeat",borderRadius:"10px",display:"flex",justifyContent:"center",backgroundPosition:"center",backgroundSize:"cover"}}>
            <Grid item container xs={12} spacing={3} sx={{padding:"20px 30px",display:"flex",justifyContent:{md:"center"}}}>
                  <Grid item xs={12} sm={12} md={8} lg={6}>
                      <Box marginBottom={2} padding={2} sx={{display:{lg:"flex",md:"flex",sm:"block",xs:"block"},backgroundColor:"rgba(255, 255, 255, 0.35)",backdropFilter: 'blur(1px)',borderRadius:"10px",gap:"10px"}}>
                           <Box>
                               <Typography py={1} sx={{color:"white",fontSize:"17px"}}>24 June, 2024</Typography>
                               <Typography  sx={{color:"white",fontSize:"17px"}}>Discover Luxurious Living at Karunesh Luxuria: Where Dreams Unfold!</Typography>
                           </Box>
                           <Box sx={{display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center"}}>
                                  <Button sx={{bgcolor: "#C49D4B",color: "#fff",border: "1px solid #C49D4B",alignSelf: "flex-start",whiteSpace:"nowrap",fontSize:"13px"}}>Read more</Button>
                            </Box>
                      </Box>
                      <Box marginBottom={2} padding={2} sx={{display:{lg:"flex",md:"flex",sm:"block",xs:"block"},backgroundColor:"rgba(255, 255, 255, 0.35)",backdropFilter: 'blur(1px)',borderRadius:"10px",gap:"10px"}}>
                           <Box>
                               <Typography py={1} sx={{color:"white",fontSize:"17px"}}>24 June, 2024</Typography>
                               <Typography  sx={{color:"white",fontSize:"17px"}}>Discover Luxurious Living at Karunesh Luxuria: Where Dreams Unfold!</Typography>
                           </Box>
                           <Box sx={{display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center",}}>
                                  <Button sx={{bgcolor: "#C49D4B",color: "#fff",border: "1px solid #C49D4B",alignSelf: "flex-start",whiteSpace:"nowrap",fontSize:"13px"}}>Read more</Button>
                            </Box>
                      </Box>
                      <Box padding={2} sx={{display:{lg:"flex",md:"flex",sm:"block",xs:"block"},backgroundColor:"rgba(255, 255, 255, 0.35)",backdropFilter: 'blur(1px)',borderRadius:"10px",gap:"10px"}}>
                           <Box>
                               <Typography py={1} sx={{color:"white",fontSize:"17px"}}>24 June, 2024</Typography>
                               <Typography  sx={{color:"white",fontSize:"17px"}}>Discover Luxurious Living at Karunesh Luxuria: Where Dreams Unfold!</Typography>
                           </Box>
                            <Box sx={{display: "flex",justifyContent: "flex-end",flexDirection: "column",borderRadius:"20px",backgroundPosition:"center",}}>
                                  <Button sx={{bgcolor: "#C49D4B",color: "#fff",border: "1px solid #C49D4B",alignSelf: "flex-start",whiteSpace:"nowrap",fontSize:"13px"}}>Read more</Button>
                            </Box>
                      </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={6}>
                      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                      <Box >
                          <Typography sx={{color:"#C49D4B",lineHeight:"22.5px",paddingBottom:"5px"}}>From Our Blog</Typography>
                          <Typography variant='h4' sx={{color:"white",paddingBottom:"40px"}}>Latest articles</Typography>
                          <Button sx={{bgcolor: "#C49D4B",color: "#fff",border: "1px solid #C49D4B",borderRadius:"50px",padding:"8px 24px"}}>View All</Button>
                      </Box>
                      </Box>

                  </Grid>
            </Grid>
      </Box>
   </Container>
      </Box>
    </div>
  )
}

export default Homesection6

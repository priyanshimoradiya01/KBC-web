import React from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import RS3 from '../../assets/images/Residential/RS3.png'
import RS4 from '../../assets/images/Residential/RS4.png'
function Completesec3() {
  return (
    <Container maxWidth="lg">
            <Grid item xs={12} container spacing={5} paddingTop={10} display={"flex"} sx={{justifyContent:{md:"center"}}}>
                <Grid item xs={12} sm={12} md={8} lg={6}>
                    <Box sx={{ backgroundImage: `url(${RS3})`, height: "100%", backgroundSize: "cover", borderRadius: "10px" }}>

                        <Box mx={6}>
                            <Typography sx={{ color: "white" }} variant='h5' pt={3}>Show Your Interest</Typography>
                            <Typography sx={{ color: "#C49D4B", fontWeight: "700" }} variant='h7'>Provide your details below to submit your interest.</Typography>
                        </Box>
                        <Box gap={3} py={1} justifyContent={"center"} mx={6} sx={{ display: { lg: "flex", md: "flex" } }}>
                            <TextField id="outlined-basic" placeholder='First Name' variant="outlined" sx={{
                                marginBottom: { sm: "20px", xs: "20px", md: "0px", lg: "0px" }, width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                            <TextField id="outlined-basic" placeholder='Last Name *' variant="outlined" sx={{
                                width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                        </Box>
                        <Box gap={3} py={1} justifyContent={"center"} mx={6} sx={{ display: { lg: "flex", md: "flex" } }}>
                            <TextField id="outlined-basic" placeholder='Contact No. *' variant="outlined" sx={{
                                marginBottom: { sm: "20px", xs: "20px", md: "0px", lg: "0px" }, width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                            <TextField id="outlined-basic" placeholder='Email ID *' variant="outlined" sx={{
                                width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                        </Box>

                        <Box display={"flex"} gap={3} py={1} justifyContent={"center"} mx={6}>
                            <TextField id="outlined-basic" placeholder='Subject Line' variant="outlined" sx={{
                                width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                        </Box>
                        <Box display={"flex"} gap={3} py={1} justifyContent={"center"} mx={6}>
                            <TextField multiline rows={4} placeholder='Your Message *' variant="outlined" sx={{
                                width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '20px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#C49D4B',
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                },
                            }} />
                        </Box>
                        <Box display={"flex"} py={3} justifyContent={"start"} mx={6}>
                            <Button variant='outlined' sx={{marginBottom:"20px",backgroundColor:"#C49D4B",color:"white",padding:"10px 20px",borderRadius:"50px","&:hover":{borderColor:"#C49D4B"},transition:".7s"}}>Submit Interest</Button>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={6}>
                <Box sx={{backgroundImage: `url(${RS4})`, height: "100%", backgroundSize: "cover", borderRadius: "10px" }}>
                     
                     <Box  mx={6} py={1}>
                         <Typography sx={{color:"white"}} variant='h4' pt={3}>About Our</Typography>
                         <Typography sx={{color:"#C49D4B"}} variant='h4' >Residential Projects</Typography>
                     </Box>
                     <Box mx={6}>
                         <Typography marginTop={3} sx={{color:"white",fontSize:"16px",fontWeight:"500",lineHeight:"24px",fontFamily:"Gothic A1, sans-serif"}}>Pioneering a New Era in Luxurious Residential Living</Typography>
                         <Typography marginTop={3} sx={{color:"white",fontSize:"16px",fontWeight:"500",lineHeight:"24px",fontFamily:"Gothic A1, sans-serif"}}>Dwarkesh Group, the epitome of luxury and comfort in residential living, has established itself as an industry leader. We have redefined the standard of excellence by offering world-class amenities and impeccable craftsmanship.</Typography>
                         <Typography marginTop={3} sx={{color:"white",fontSize:"16px",fontWeight:"500",lineHeight:"24px",fontFamily:"Gothic A1, sans-serif"}}>With a strong emphasis on architectural brilliance, each project at Dwarkesh Group embodies the essence of a luxurious lifestyle. Our homes feature spacious living spaces, top-notch security, and unparalleled comforts.</Typography>
                     </Box>
                     <Box sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"} ,justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"}}} gap={3} mx={6} mt={3}>
                        <Button variant='outlined' sx={{marginBottom:"20px",backgroundColor:"#C49D4B",color:"white",padding:"10px 20px",borderRadius:"50px","&:hover":{borderColor:"#C49D4B"},transition:".7s"}}>About Dwarkesh Group</Button>
                        <Button variant='outlined' sx={{marginBottom:"20px",borderColor:"#C49D4B",color:"white",padding:"10px 20px",borderRadius:"50px","&:hover":{backgroundColor:"#C49D4B",borderColor:"#C49D4B"},transition:".7s"}}>Contact Us</Button>
                     </Box>
               </Box>
                </Grid>
            </Grid>
        </Container>
  )
}

export default Completesec3
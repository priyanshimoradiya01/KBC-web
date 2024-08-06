import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import inquiry from '../../assets/images/contactus/inquiry.png'
import mail from '../../assets/images/contactus/mail.png'
import map from '../../assets/images/contactus/map.png'
import call from '../../assets/images/contactus/call.png'

function Inquirycontact() {
  return (
  <Box sx={{backgroundColor:"#F9F9F9"}}>
    <Container maxWidth="lg">
        <Typography sx={{fontFamily:"Gothic A1, sans-serif",fontSize:"36px","&:hover":{
          color:"#c29943",
          transition:".3s"
        }}} fontWeight={600} variant='h3' py={10} textAlign={"center"}>Contact Us</Typography>

        <Grid item xs={12} container spacing={5} py={5} display={"flex"} sx={{justifyContent:{md:"center"}}}>
             <Grid item xs={12} sm={12} md={8} lg={6}>
                <Box sx={{backgroundImage:`url(${inquiry})`,height:"100%",backgroundSize:"cover",borderRadius:"10px"}}>
                  
                      <Box mx={6}>
                         <Typography sx={{color:"white"}} variant='h5' pt={3}>Send Inquiry</Typography>
                         <Typography sx={{color:"#C49D4B",fontWeight:"700"}} variant='h7'>Let us know if you need any information or have any queries by using the form below.</Typography>
                      </Box>
                      <Box  gap={3} py={1} justifyContent={"center"} mx={6} sx={{display:{lg:"flex",md:"flex"}}}>
                           <TextField id="outlined-basic" placeholder='First Name' variant="outlined" sx={{marginBottom:{sm:"20px",xs:"20px",md:"0px",lg:"0px"},width:"100%",'& .MuiOutlinedInput-root': { borderRadius: '50px',backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter: 'blur(2px)'},
                              '& .MuiOutlinedInput-root.Mui-focused': {
                                      '& fieldset': {
                                        borderColor: '#C49D4B',
                                      },
                                    },
                                  '& input::placeholder': {
                               color: 'white',
                               opacity: 0.7,
                           },}}/>
                           <TextField id="outlined-basic" placeholder='Last Name *' variant="outlined" sx={{width:"100%",'& .MuiOutlinedInput-root': { borderRadius: '50px',backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter: 'blur(2px)'},
                              '& .MuiOutlinedInput-root.Mui-focused': {
                                      '& fieldset': {
                                        borderColor: '#C49D4B',
                                      },
                                    },
                                    '& input::placeholder': {
                               color: 'white',
                               opacity: 0.7,
                           },}}/> 
                        </Box>
                      <Box  gap={3} py={1} justifyContent={"center"} mx={6} sx={{display:{lg:"flex",md:"flex"}}}>
                           <TextField id="outlined-basic" placeholder='Contact No. *' variant="outlined" sx={{marginBottom:{sm:"20px",xs:"20px",md:"0px",lg:"0px"},width:"100%",'& .MuiOutlinedInput-root': { borderRadius: '50px',backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter: 'blur(2px)'},
                              '& .MuiOutlinedInput-root.Mui-focused': {
                                      '& fieldset': {
                                        borderColor: '#C49D4B',
                                      },
                                    },
                                   '& input::placeholder': {
                               color: 'white',
                               opacity: 0.7,
                           },}}/>
                           <TextField id="outlined-basic" placeholder='Email ID *' variant="outlined" sx={{width:"100%",'& .MuiOutlinedInput-root': { borderRadius: '50px',backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter: 'blur(2px)'},
                              '& .MuiOutlinedInput-root.Mui-focused': {
                                      '& fieldset': {
                                        borderColor: '#C49D4B',
                                      },
                                    },
                                    '& input::placeholder': {
                               color: 'white',
                               opacity: 0.7,
                           },}}/> 
                        </Box>
                        
                        <Box display={"flex"} gap={3} py={1} justifyContent={"center"} mx={6}>
                        <TextField id="outlined-basic" placeholder='Subject Line' variant="outlined" sx={{width:"100%",'& .MuiOutlinedInput-root': { borderRadius: '50px',backgroundColor:"rgba(255, 255, 255, 0.45)",backdropFilter: 'blur(2px)'},
                              '& .MuiOutlinedInput-root.Mui-focused': {
                                      '& fieldset': {
                                        borderColor: '#C49D4B',
                                      },
                                    },
                                    '& input::placeholder': {
                               color: 'white',
                               opacity: 0.7,
                        },}}/> 
                        </Box>
                        <Box display={"flex"} gap={3} py={1} justifyContent={"center"} mx={6}>
                        <TextField multiline rows={4} placeholder="Your Message *" variant="outlined" sx={{width: "100%",
                                  '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                    backgroundColor: "rgba(255, 255, 255, 0.45)",
                                    backdropFilter: 'blur(2px)',
                                  },
                                  '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                      borderColor: '#C49D4B',
                                    },
                                  },
                                  '& textarea::placeholder': {
                                    color: 'white',
                                    opacity: 0.7,
                                  },
                          }}/>
                        </Box>
                        <Box display={"flex"}  py={3} justifyContent={"start"} mx={6}>
                        <Button variant='outlined' sx={{backgroundColor:"#C49D4B",color:"white",padding:"10px 40px",borderRadius:"50px","&:hover":{borderColor:"#C49D4B"},transition:".7s"}}>Submit</Button>
                        </Box>

                </Box>
             </Grid>
             <Grid item xs={12} sm={12} md={8} lg={6} >
               <Typography variant='h5' sx={{color:"#C49D4B"}} py={1} marginBottom={2}>Contact Us</Typography>
                    <Box display={"flex"} alignItems={"center"}  marginBottom={5} sx={{backgroundColor:"white",padding:"10px 15px 8px 15px",borderRadius:"0px 40px 0px 40px "}} gap={2}>
                       <Box>
                           <img src={mail} alt="" />
                       </Box>
                       <Box>
                          <Typography variant='h6' sx={{color:"#000000",fontWeight:"600"}} py={1}>Mail Here</Typography>
                          <Typography variant='h7' sx={{color:"#646464"}}>jbsit01@gmail.com</Typography>
                       </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} marginBottom={5} sx={{backgroundColor:"white",padding:"10px 15px 8px 15px",borderRadius:"0px 40px 0px 40px "}} gap={2}>
                       <Box>
                           <img src={map} alt="" />
                       </Box>
                       <Box>
                          <Typography variant='h6' sx={{color:"#000000",fontWeight:"600"}} py={1}>Visit Us</Typography>
                          <Typography variant='h7' sx={{color:"#646464"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                       </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} sx={{backgroundColor:"white",padding:"10px 15px 8px 15px",borderRadius:"0px 40px 0px 40px "}} gap={2}>
                       <Box>
                           <img src={call} alt="" />
                       </Box>
                       <Box>
                          <Typography variant='h6' sx={{color:"#000000",fontWeight:"600"}} py={1}>Call Here</Typography>
                          <Typography variant='h7' sx={{color:"#646464"}}>jbsit01@gmail.com</Typography>
                       </Box>
                    </Box>
                    
             </Grid>
        </Grid>

         <Box py={5}>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.573466534464!2d72.77065567520212!3d21.2090965815604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d907f31dadf%3A0xe67098a1c7e3b387!2sRajhans%20Apple!5e0!3m2!1sen!2sin!4v1722572881497!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:"10px solid white"}}></iframe>
         </Box>
    </Container>
  </Box>
  )
}

export default Inquirycontact

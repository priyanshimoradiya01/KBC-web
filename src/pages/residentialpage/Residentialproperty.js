// import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
// import React from 'react';
// import home1 from '../../assets/images/industrial/industrial1.png';
// import home2 from '../../assets/images/industrial/industrial2.png';
// import home3 from '../../assets/images/industrial/industrial3.png';
// import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
// import industrial4 from '../../assets/images/industrial/industrial4.png'
// import industrial5 from '../../assets/images/industrial/industrial5.png'
// import first from "../../assets/images/commercialImg/firstImg.png"
// import second from "../../assets/images/commercialImg/secondImg.png"
// import EastIcon from '@mui/icons-material/East';

// const Properties = [
//   {
//     img: home1,
//     name: "Karunesh Luxuria"
//   },
//   {
//     img: home2,
//     name: "Karunesh Villa"
//   },
//   {
//     img: home3,
//     name: "Karunesh Homes"
//   },
// ];

// function Residentialproperty() {
//   return (
//     <Box sx={{ backgroundColor: "#FAFAFA" }}>
//       <Container>
      
//         <Typography variant='h5' fontWeight={700} py={6} textAlign={"center"} sx={{
//           "&:hover": {
//             color: "#c29943",
//             transition: ".3s"
//           }
//         }}>Commercial Properties</Typography>

//         <Grid item container xs={12}>
//             <Box>
//             <Box sx={{position:"relative"}}>
//                 <img src={first} alt="" style={{width:"100%"}}/>
//                   <Button sx={{ position:"absolute",top:{lg:"92%",md:"91%",sm:"88%"},left:"0",display:{lg:"block",md:"block",sm:"block",xs:"none"},bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Commercial</Button>
//             </Box>
//               <Box sx={{display:"flex",justifyContent:"space-between"}} px={3} mt={1}>
//                 <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Karunesh Business Center 1</Typography>
//                 <Typography><EastIcon sx={{color:"#9d7c35",fontSize:"28px"}}></EastIcon></Typography>
//               </Box>
//             </Box>
//             <Box mt={4}>
//               <Box sx={{position:"relative"}}>
//                 <img src={second} alt="" style={{width:"100%"}}/>
//                   <Button sx={{ position:"absolute",top:{lg:"92%",md:"91%",sm:"88%"},left:"0",display:{lg:"block",md:"block",sm:"block",xs:"none"},bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Commercial</Button>
//              </Box>
//               <Box sx={{display:"flex",justifyContent:"space-between"}} px={3} mt={1}>
//                 <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Karunesh Business Center 2</Typography>
//                 <Typography><EastIcon sx={{color:"#9d7c35",fontSize:"28px"}}></EastIcon></Typography>
//               </Box>
//             </Box>
//         </Grid>

//         <Grid item xs={12} container spacing={3} py={5} display={"flex"} sx={{ justifyContent: { md: "center" } }}>
//           <Grid item xs={12} sm={12} md={12} lg={6}>
//             <Box sx={{ backgroundImage: `url(${industrial4})`, height: "100%", backgroundSize: "cover", borderRadius: "20px" }}>

//               <Box mx={6} py={2}>
//                 <Typography sx={{ color: "white" }} variant='h4' pt={3}>Show Your Interest</Typography>
//                 <Typography sx={{ color: "#C49D4B", fontWeight: "700" }} variant='h7' >Provide your details below to submit your interest.</Typography>
//               </Box>
//               <Box gap={3} py={1} justifyContent={"center"} mx={6} sx={{ display: { lg: "flex", md: "flex" } }}>
//                 <TextField id="outlined-basic" placeholder='First Name' variant="outlined" sx={{
//                   marginBottom: { sm: "20px", xs: "20px", md: "0px", lg: "0px" }, width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
//                   '& .MuiOutlinedInput-root.Mui-focused': {
//                     '& fieldset': {
//                       borderColor: '#C49D4B',
//                     },
//                   },
//                   '& input::placeholder': {
//                     color: 'white',
//                     opacity: 0.7,
//                   },
//                 }} />
//                 <TextField id="outlined-basic" placeholder='Last Name *' variant="outlined" sx={{
//                   width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
//                   '& .MuiOutlinedInput-root.Mui-focused': {
//                     '& fieldset': {
//                       borderColor: '#C49D4B',
//                     },
//                   },
//                   '& input::placeholder': {
//                     color: 'white',
//                     opacity: 0.7,
//                   },
//                 }} />
//               </Box>
//               <Box gap={3} py={1} justifyContent={"center"} mx={6} sx={{ display: { lg: "flex", md: "flex" } }}>
//                 <TextField id="outlined-basic" placeholder='Contact No. *' variant="outlined" sx={{
//                   marginBottom: { sm: "20px", xs: "20px", md: "0px", lg: "0px" }, width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
//                   '& .MuiOutlinedInput-root.Mui-focused': {
//                     '& fieldset': {
//                       borderColor: '#C49D4B',
//                     },
//                   },
//                   '& input::placeholder': {
//                     color: 'white',
//                     opacity: 0.7,
//                   },
//                 }} />
//                 <TextField id="outlined-basic" placeholder='Email ID *' variant="outlined" sx={{
//                   width: "100%", '& .MuiOutlinedInput-root': { borderRadius: '50px', backgroundColor: "rgba(255, 255, 255, 0.45)", backdropFilter: 'blur(2px)' },
//                   '& .MuiOutlinedInput-root.Mui-focused': {
//                     '& fieldset': {
//                       borderColor: '#C49D4B',
//                     },
//                   },
//                   '& input::placeholder': {
//                     color: 'white',
//                     opacity: 0.7,
//                   },
//                 }} />
//               </Box>
//               <Box display={"flex"} gap={3} py={1} justifyContent={"center"} mx={6}>
//                 <TextField multiline rows={4} placeholder="Your Message *" variant="outlined" sx={{
//                   width: "100%",
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '20px',
//                     backgroundColor: "rgba(255, 255, 255, 0.45)",
//                     backdropFilter: 'blur(2px)',
//                   },
//                   '& .MuiOutlinedInput-root.Mui-focused': {
//                     '& fieldset': {
//                       borderColor: '#C49D4B',
//                     },
//                   },
//                   '& textarea::placeholder': {
//                     color: 'white',
//                     opacity: 0.7,
//                   },
//                 }} />

//               </Box>
//               <Box display={"flex"} py={3} justifyContent={"start"} mx={6}>
//                 <Button variant='outlined' sx={{ backgroundColor: "#C49D4B", color: "white", padding: "10px 40px", borderRadius: "50px", "&:hover": { borderColor: "#C49D4B" }, transition: ".7s" }}>Submit</Button>
//               </Box>

//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={12} md={12} lg={6}>

//             <Box sx={{ backgroundImage: `url(${industrial5})`, height: "100%", backgroundSize: "cover", borderRadius: "20px" }}>

//               <Box mx={6} py={1}>
//                 <Typography sx={{ color: "white" }} variant='h4' pt={3}>About Our</Typography>
//                 <Typography sx={{ color: "#C49D4B" }} variant='h4' >Residential Projects</Typography>
//               </Box>
//               <Box mx={6}>
//                 <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>Pioneering a New Era in Luxurious Residential Living</Typography>
//                 <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>Dwarkesh Group, the epitome of luxury and comfort in residential living, has established itself as an industry leader. We have redefined the standard of excellence by offering world-class amenities and impeccable craftsmanship.</Typography>
//                 <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>With a strong emphasis on architectural brilliance, each project at Dwarkesh Group embodies the essence of a luxurious lifestyle. Our homes feature spacious living spaces, top-notch security, and unparalleled comforts.</Typography>
//               </Box>
//               <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" } }} gap={3} mx={6} mt={3}>
//                 <Button variant='outlined' sx={{ marginBottom: "20px", backgroundColor: "#C49D4B", color: "white", padding: "10px 20px", borderRadius: "50px", "&:hover": { borderColor: "#C49D4B" }, transition: ".7s" }}>About Dwarkesh Group</Button>
//                 <Button variant='outlined' sx={{ marginBottom: "20px", borderColor: "#C49D4B", color: "white", padding: "10px 20px", borderRadius: "50px", "&:hover": { backgroundColor: "#C49D4B", borderColor: "#C49D4B" }, transition: ".7s", display: "flex", justifyContent: { lg: "start", md: "start", sm: "start", xs: "center" } }}>Contact Us</Button>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Residentialproperty;



import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import home1 from '../../assets/images/industrial/industrial1.png';
import home2 from '../../assets/images/industrial/industrial2.png';
import home3 from '../../assets/images/industrial/industrial3.png';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import industrial4 from '../../assets/images/industrial/industrial4.png'
import industrial5 from '../../assets/images/industrial/industrial5.png'
import first from "../../assets/images/commercialImg/firstImg.png"
import second from "../../assets/images/commercialImg/secondImg.png"
import EastIcon from '@mui/icons-material/East';

const Properties = [
  {
    img: home1,
    name: "Karunesh Luxuria"
  },
  {
    img: home2,
    name: "Karunesh Villa"
  },
  {
    img: home3,
    name: "Karunesh Homes"
  },
];

function Residentialproperty() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Container>
      
        <Typography variant='h5' fontWeight={700} py={6} textAlign={"center"} sx={{
          "&:hover": {
            color: "#c29943",
            transition: ".3s"
          }
        }}>Commercial Properties</Typography>

        <Grid item container xs={12}>
          <Box>
            <Box sx={{position:"relative"}}>
              <img src={first} alt="" style={{width:"100%"}}/>
              <Button sx={{ position:"absolute",top:{lg:"92%",md:"91%",sm:"88%"},left:"0",display:{lg:"block",md:"block",sm:"block",xs:"none"},bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Commercial</Button>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}} px={3} mt={1}>
              <Typography onClick={scrollToForm} sx={{fontSize:"18px",fontWeight:"600", cursor: 'pointer'}}>Karunesh Business Center 1</Typography>
              <Typography><EastIcon sx={{color:"#9d7c35",fontSize:"28px"}}></EastIcon></Typography>
            </Box>
          </Box>
          <Box mt={4}>
            <Box sx={{position:"relative"}}>
              <img src={second} alt="" style={{width:"100%"}}/>
              <Button sx={{ position:"absolute",top:{lg:"92%",md:"91%",sm:"88%"},left:"0",display:{lg:"block",md:"block",sm:"block",xs:"none"},bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Commercial</Button>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}} px={3} mt={1}>
              <Typography onClick={scrollToForm} sx={{fontSize:"18px",fontWeight:"600", cursor: 'pointer'}}>Karunesh Business Center 2</Typography>
              <Typography><EastIcon sx={{color:"#9d7c35",fontSize:"28px"}}></EastIcon></Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} container spacing={3} py={5} display={"flex"} sx={{ justifyContent: { md: "center" } }}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box sx={{ backgroundImage: `url(${industrial4})`, height: "100%", backgroundSize: "cover", borderRadius: "20px" }} ref={formRef}>

              <Box mx={6} py={2}>
                <Typography sx={{ color: "white" }} variant='h4' pt={3}>Show Your Interest</Typography>
                <Typography sx={{ color: "#C49D4B", fontWeight: "700" }} variant='h7' >Provide your details below to submit your interest.</Typography>
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
                <TextField multiline rows={4} placeholder="Your Message *" variant="outlined" sx={{
                  width: "100%",
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
                }} />
              </Box>
              <Box display={"flex"} py={3} justifyContent={"start"} mx={6}>
                <Button variant='outlined' sx={{ backgroundColor: "#C49D4B", color: "white", padding: "10px 40px", borderRadius: "50px", "&:hover": { borderColor: "#C49D4B" }, transition: ".7s" }}>Submit</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>

            <Box sx={{ backgroundImage: `url(${industrial5})`, height: "100%", backgroundSize: "cover", borderRadius: "20px" }}>

              <Box mx={6} py={1}>
                <Typography sx={{ color: "white" }} variant='h4' pt={3}>About Our</Typography>
                <Typography sx={{ color: "#C49D4B" }} variant='h4' >Residential Projects</Typography>
              </Box>
              <Box mx={6}>
                <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>Pioneering a New Era in Luxurious Residential Living</Typography>
                <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>Dwarkesh Group, the epitome of luxury and comfort in residential living, has established itself as an industry leader. We have redefined the standard of excellence by offering world-class amenities and impeccable craftsmanship.</Typography>
                <Typography marginTop={3} sx={{ color: "white", fontSize: "16px", fontWeight: "500", lineHeight: "24px", fontFamily: "Gothic A1, sans-serif" }}>With a strong emphasis on architectural brilliance, each project at Dwarkesh Group embodies the essence of a luxurious lifestyle. Our homes feature spacious living spaces, top-notch security, and unparalleled comforts.</Typography>
              </Box>
              <Box sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "block" } }} gap={3} mx={6} mt={3}>
                <Button variant='outlined' sx={{ marginBottom: "20px", backgroundColor: "#C49D4B", color: "white", padding: "10px 20px", borderRadius: "50px", "&:hover": { borderColor: "#C49D4B" }, transition: ".7s" }}>About Dwarkesh Group</Button>
                <Button variant='outlined' sx={{ marginBottom: "20px", borderColor: "#C49D4B", color: "white", padding: "10px 20px", borderRadius: "50px", "&:hover": { backgroundColor: "#C49D4B", borderColor: "#C49D4B" }, transition: ".7s", display: "flex", justifyContent: { lg: "start", md: "start", sm: "start", xs: "center" } }}>Contact Us</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Residentialproperty;


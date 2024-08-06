import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import home1 from '../../assets/images/industrial/industrial1.png';
import home2 from '../../assets/images/industrial/industrial2.png';
import home3 from '../../assets/images/industrial/industrial3.png';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import industrial4 from '../../assets/images/industrial/industrial4.png'
import industrial5 from '../../assets/images/industrial/industrial5.png'

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
  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Container>
        <Typography variant='h5' fontWeight={700} py={6} textAlign={"center"} sx={{
          "&:hover": {
            color: "#c29943",
            transition: ".3s"
          }
        }}>Residential Properties</Typography>
        <Grid container spacing={3} py={2} paddingBottom={10} display={"flex"} sx={{ justifyContent: { md: "center", sm: "center" } }}>
          {Properties.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "21px", padding: "0px 1px", boxShadow: "0px 0px 10px #00000030" }}>
                <Box sx={{ backgroundImage: `url(${item.img})`, width: "100%", height: "350px", backgroundSize: "cover", display: "flex", justifyContent: "flex-end", flexDirection: "column", borderRadius: "20px", backgroundPosition: "center", }}>
                  <Button sx={{ bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Residential</Button>
                </Box>
                <Box paddingLeft={3} paddingBottom={2}>
                  <Typography paddingTop={3} variant='h5' fontWeight={600}>{item.name}</Typography>
                  <Typography variant='h7' sx={{ color: "#8F8F8F" }}>2 BHHK Fabulous Living</Typography>
                </Box>
                <Box padding={"0px 22px"} borderTop={"1px solid #E3E3E3"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} sx={{ color: "#B57E0A" }}>
                  <Typography py={1}>Gujarat - Surat</Typography>
                  <ArrowRightAltOutlinedIcon sx={{ fontWeight: "900" }} fontSize='large' />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} container spacing={3} py={5} display={"flex"} sx={{ justifyContent: { md: "center" } }}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Box sx={{ backgroundImage: `url(${industrial4})`, height: "100%", backgroundSize: "cover", borderRadius: "20px" }}>

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
          <Grid item xs={12} sm={12} md={8} lg={6}>

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
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import card1 from "../../assets/images/socialInitiatives/CARD1.png";
import card2 from "../../assets/images/socialInitiatives/CARD2.png"
import card3 from "../../assets/images/socialInitiatives/CARD3.png";
import bg from "../../assets/images/socialInitiatives/bgyellow.png";

// import './styles.css';

// import required modules
// import { Pagination } from "swiper/modules";
function SocialSection3() {
  return (
    <div>
      <Box>
        <Container>
          <Grid
            item
            container
            sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}
            spacing={1}
          >
            <Grid item lg={4} md={6} sm={12} sx={{justifyContent:{sm:"center", xs:"center"},display:{lg:"flex",sm:"flex",xs:"flex"},textAlign:{sm:"center", xs:"center"}}}>
              <Box>
                <Box sx={{ position: "relative", width:{lg:"380px", md:"380px", sm:"100%", xs:"100%"} }}>
                  <img
                    src={bg}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "4%",
                      left: "8%",
                      width: {lg:"400px", md:"400px", sm:"100%", xs:"100%"},
                    }}
                  >
                    <img
                      src={card1}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                 <Box>
                 <Typography sx={{padding:"9px 10px", backgroundColor:"#CBA658", color:"#FFF", width:"25%", fontSize:"14px", position:"absolute", bottom:{lg:"-23px", md:"-23px",sm:"-3px",xs:"0px"}, right:{lg:"-29px", md:"-29px",sm:"-14px",xs:"-9px"}, borderRadius:"0 10px 0 10px", cursor:"pointer"}} >Read More</Typography>
                 </Box>
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} lg={7} md={6} sm={12} sx={{display:{xs:"flex"}, justifyContent:{xs:"center"}}}>
              <Box sx={{margin:{lg:"0 20px", md:"0 20px" ,sm:"50px 20px", xs:"50px 20px"}}}>
                <Typography variant="h5" fontWeight={"700"}>Labour Day Celebration</Typography>
                <Typography mt={2} sx={{color:"#CBA658", fontWeight:"600", fontSize:{sm:"14px",xs:"14px"}}}>
                  Sessions Are Concluded With Distribution Of Sweets To The
                  Workers. Needless To Say A Healthy And A Strong Workforce
                  Ensures A Healthy Growth For The Organization.
                </Typography>

                <Typography mt={2} sx={{fontSize:"14px"}}>
                  Workforce is what makes a difference to a company. And there
                  can be no better day to celebrate the spirit of workmanship
                  than the Labour Day itself. At Rajhans (Desai-Jain) Group, we
                  understand the importance of our workforce. Thus we conduct
                  sessions every year on “General Awareness Training on Health &
                  Safety”. The session enables the staff and the workers at our
                  various construction sites to gain knowledge on health and
                  safety. Construction being a rapidly growing industry in the
                  nation, demands a healthy and a competent workforce on a large
                  scale. This session adds impetus to the construction workers
                  as it highlights the benefits of health and safety.
                </Typography>

                <Typography mt={4} sx={{fontSize:"14px"}}>
                  A safe work environment in construction is essential and
                  required by the Occupational and Health Safety Administration
                  (OSHA). Making workers aware of the hazards, safety procedures
                  and accident prevention can help to reduce injuries amongst
                  the workers. Training supports employees by providing....
                </Typography>
              </Box>
            </Grid>
          </Grid>


          <Grid
            item
            container
            sx={{ display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:{lg:"60px", md:"60px", sm:"10px", xs:"10px"} }}
            spacing={1}
          >
            <Grid item lg={4} md={6} sm={12} sx={{justifyContent:{sm:"center", xs:"center"},display:{lg:"flex",sm:"flex",xs:"flex"},textAlign:{sm:"center", xs:"center"}}}>
              <Box sx={{}}>
                <Box sx={{ position: "relative", width:{lg:"380px", md:"380px", sm:"100%", xs:"100%"} }}>
                  <img
                    src={bg}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "4%",
                      left: "8%",
                      width: {lg:"400px", md:"400px", sm:"100%", xs:"100%"},
                    }}
                  >
                    <img
                      src={card2}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                  <Box>
                 <Typography sx={{padding:"9px 10px", backgroundColor:"#CBA658", color:"#FFF", width:"25%", fontSize:"14px", position:"absolute", bottom:{lg:"-23px", md:"-23px",sm:"-3px",xs:"0px"}, right:{lg:"-29px", md:"-29px",sm:"-14px",xs:"-9px"}, borderRadius:"0 10px 0 10px", cursor:"pointer"}} >Read More</Typography>
                 </Box>
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} lg={7} md={6} sm={12} sx={{display:{xs:"flex"}, justifyContent:{xs:"center"}}}>
              <Box sx={{margin:{lg:"0 20px", md:"0 20px" ,sm:"50px 20px", xs:"50px 20px"}}}>
                <Typography variant="h5" fontWeight={"700"}>Spreading The Wings Of Greenery!</Typography>
                <Typography mt={2} sx={{color:"#CBA658", fontWeight:"600", fontSize:{sm:"14px",xs:"14px"}}}>
                Dwarkesh Group Calls For One More Action To Protect The Environment And Our Mother-Earth On 'The World Environment Day' By Planting Trees Every Year.
                </Typography>

                <Typography mt={2} sx={{fontSize:"14px"}}>
                Rajhans (Desai-Jain) Group calls for one more action to protect the environment and our Mother-Earth on 'The World Environment Day' by Planting trees every year.
                </Typography>

                <Typography mt={4} sx={{fontSize:"14px"}}>
                  To keep this World Clean & Green, we started from our home to take this message ahead by planting trees at our corporate office, all the Project Sites and Branches. The task of environment protection is a universal responsibility of all of us. Everyone counts in this initiative. This way, we are making an important gesture to the world in demonstrating our global concern and at the same time making our own little but significant, contribution to the cause.
                </Typography>
              </Box>
            </Grid>
          </Grid>



          <Grid
            item
            container
            sx={{ display: "flex", justifyContent: "space-between",alignItems:"center", marginTop:{lg:"60px", md:"60px", sm:"10px", xs:"10px"}}}
            spacing={1}
          >
            <Grid item lg={4} md={6} sm={12} sx={{justifyContent:{sm:"center", xs:"center"},display:{lg:"flex",sm:"flex",xs:"flex"},textAlign:{sm:"center", xs:"center"}}}>
              <Box sx={{}}>
                <Box sx={{ position: "relative", width:{lg:"380px", md:"380px", sm:"100%", xs:"100%"} }}>
                  <img
                    src={bg}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "4%",
                      left: "8%",
                      width: {lg:"400px", md:"400px", sm:"100%", xs:"100%"},
                    }}
                  >
                    <img
                      src={card3}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                  <Box>
                 <Typography sx={{padding:"9px 10px", backgroundColor:"#CBA658", color:"#FFF", width:"25%", fontSize:"14px", position:"absolute", bottom:{lg:"-23px", md:"-23px",sm:"-3px",xs:"0px"}, right:{lg:"-29px", md:"-29px",sm:"-14px",xs:"-9px"}, borderRadius:"0 10px 0 10px", cursor:"pointer"}} >Read More</Typography>
                 </Box>
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} lg={7} md={6} sm={12} sx={{display:{xs:"flex"}, justifyContent:{xs:"center"}}}>
              <Box sx={{margin:{lg:"0 20px", md:"0 20px" ,sm:"50px 20px", xs:"50px 20px"}}}>
                <Typography variant="h5" fontWeight={"700"}>Blood Donation Drive</Typography>
                <Typography mt={2} sx={{color:"#CBA658", fontWeight:"600", fontSize:{sm:"14px",xs:"14px"}}}>
                July.01.2021, Surat: Spreading Wings Of Happiness Being The Motto, Rajhans (Desai-Jain) Group Came Up With A Blood Donation Camp In Cooperation With Surat Raktdan Kendra At The Corporate Office, 'Rajhans Empire' Situated On Dumas Road.
                </Typography>

                <Typography mt={2} sx={{fontSize:"14px"}}>
                July.01.2021, Surat: Spreading Wings of Happiness being the motto, Rajhans (Desai-Jain) Group came up with a blood donation camp in cooperation with Surat Raktdan Kendra at the corporate office, 'Rajhans Empire' situated on dumas road. For Rajhans (Desai-Jain) Group, helping out community in the best possible ways has always been of prime focus.
                </Typography>

                <Typography mt={4} sx={{fontSize:"14px"}}>
                A large number of employees of the Group extended their helping hands in the support for blood donation. By initiating such a noble cause in this need of the hour, Rajhans (Desai-Jain) Group has rightly exemplified itself as a responsible organization who cares for the society.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default SocialSection3;

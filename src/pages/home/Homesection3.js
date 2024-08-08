

import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import devlopingimg from '../../assets/images/Home/devlopingimg.png';
import icon1 from '../../assets/images/Home/icon1.png'
import icon3 from '../../assets/images/Home/icon3.png'
import icon2 from '../../assets/images/Home/icon2.png'
import { useNavigate } from 'react-router-dom';
function Homesection3() {
  const navigate = useNavigate()
  const card2 = [
    {
      icon: icon1,
      cardtitle1: "2023Msq",
      cardtitle2: "Successfully Delivered"
    },
    {
      icon: icon3,
      cardtitle1: "2023Msq",
      cardtitle2: "Successfully Delivered"
    },
    {
      icon: icon2,
      cardtitle1: "2023Msq",
      cardtitle2: "Successfully Delivered"
    },
  ]
  return (
    <div>
      <Box sx={{ marginTop: '100px' }}>

        <Box
          sx={{
            backgroundImage: `url(${devlopingimg})`,
            maxwidth: "100%",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: "relative",
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: "180px"
          }}
        >
          <Container>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: '#b88417', fontSize: '16px', lineHeight: "80px", paddingTop: "10px" }}>
                Dwarkesh Group
              </Typography>
              <Typography sx={{ color: "white", fontSize: "26px", paddingBottom: "20px" }}>
                Developing PremiumReal  <br />Estate Since 2000
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                their dreams. For others, it’s a commercial space that fulfills their business aspirations. At Dwarkesh Group, we
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                turn these dreams into reality by creating iconic landmarks across residential, commercial, leisure,
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                industrial, and logistics sectors.
              </Typography>


              <Typography sx={{ color: "white", fontSize: "15px", paddingTop: "50px" }}>


                Our developments seamlessly blend luxury and functionality, earning recognition as coveted landmarks and reliable
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                investment opportunities. We relentlessly aspire to create even more aesthetically pleasing and efficient space
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                Dwarkesh Group, our customers are at the core of what we do, and we therefore expand to serve their
              </Typography>
              <Typography sx={{ color: "white", fontSize: "15px", lineHeight: "33px" }}>
                property needs across geographies in better ways
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", alignContent: "center", paddingTop: "30px" }}>
                <Typography sx={{
                  padding: "10px", backgroundColor: "#c8a55b", color: "white", borderRadius: "50px", whiteSpace: "nowrap", fontSize: "13px", width: {
                    lg: "10%", md: "15%", sm: "15%", xs: "25%",border:"2px solid #c29943",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#c29943",
                    }
                  }
                }} onClick={()=>navigate("/about")}>  More About Us</Typography>
              </Box>

            </Box>
            <Box>
              <Grid container spacing={7} sx={{ display: "flex", justifyContent: "center", position: "absolute", top: "90%", left: "0%" }}>
                {
                  card2.map((item) => {
                    return (
                      <Grid item lg={2}>
                        <Box sx={{ backgroundColor: "white", borderRadius: "0px 25px 0px 25px", width: "100%", height: "200px", border: "solid 2px #c8a55b", textAlign: "center" }}>
                          <img src={item.icon} alt="" style={{ width: "35%", paddingTop: "30px" }} />
                          <Typography sx={{ fontSize: "15px", fontWeight: "500", paddingTop: "10px  " }}>{item.cardtitle1}</Typography>
                          <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>{item.cardtitle2}</Typography>
                        </Box>

                      </Grid>
                    )
                  })
                }

              </Grid>
            </Box>
          </Container>

        </Box>

      </Box>
    </div>
  );
}

export default Homesection3;



// import { Box, Container, Typography, Grid } from '@mui/material';
// import React from 'react';
// import devlopingimg from '../../assets/images/Home/devlopingimg.png';
// import icon1 from '../../assets/images/Home/icon1.png'
// import icon2 from '../../assets/images/Home/icon2.png'
// import icon3 from '../../assets/images/Home/icon3.png'

// function Homesection3() {
//   return (
//     <div>
//       <Box sx={{ marginTop: '100px' }}>

//         <Box
//           sx={{
//             backgroundImage: `url(${devlopingimg})`,
//             maxWidth: "100%",
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             position: "relative",
//             justifyContent: 'center',
//             alignItems: 'center',
//             paddingBottom: "180px"
//           }}
//         >
//           <Container>
//             <Box sx={{ textAlign: "center" }}>
//               <Typography sx={{ color: '#b88417', fontSize: '13px', lineHeight: "80px", paddingTop: "10px" }}>
//                 Dwarkesh Group
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "26px", paddingBottom: "20px" }}>
//                 Developing PremiumReal <br />Estate Since 2000
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 their dreams. For others, it’s a commercial space that fulfills their business aspirations. At Dwarkesh Group, we
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 turn these dreams into reality by creating iconic landmarks across residential, commercial, leisure,
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 industrial, and logistics sectors.
//               </Typography>

//               <Typography sx={{ color: "white", fontSize: "12px", paddingTop: "50px" }}>
//                 Our developments seamlessly blend luxury and functionality, earning recognition as coveted landmarks and reliable
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 investment opportunities. We relentlessly aspire to create even more aesthetically pleasing and efficient space
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 Dwarkesh Group, our customers are at the core of what we do, and we therefore expand to serve their
//               </Typography>
//               <Typography sx={{ color: "white", fontSize: "12px", lineHeight: "33px" }}>
//                 property needs across geographies in better ways
//               </Typography>
//               <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", alignContent: "center", paddingTop: "30px" }}>
//                 <Typography sx={{
//                   padding: "10px", backgroundColor: "#c8a55b", color: "white", borderRadius: "50px", whiteSpace: "nowrap", fontSize: "13px", width: {
//                     lg: "10%", md: "15%", sm: "15%", xs: "25%", border: "2px solid #c29943",
//                     "&:hover": {
//                       backgroundColor: "transparent",
//                       color: "#c29943",
//                     }
//                   }
//                 }}>  More About Us</Typography>
//               </Box>
//             </Box>

//             <Box>
//               <Grid container spacing={7} sx={{ display: "flex", justifyContent: "center", position: "absolute", top: "90%", left: "0%" }}>
//                 <Grid item lg={2}>
//                   <Box sx={{ backgroundColor: "white", borderRadius: "0px 25px 0px 25px", width: "100%", height: "170px", border: "solid 2px #c8a55b", textAlign: "center" }}>
//                     <img src={icon1} alt="" style={{ width: "35%", paddingTop: "30px" }} />
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500", paddingTop: "10px" }}>2023Msq</Typography>
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>Successfully Delivered</Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item lg={2}>
//                   <Box sx={{ backgroundColor: "white", borderRadius: "0px 25px 0px 25px", width: "100%", height: "170px", border: "solid 2px #c8a55b", textAlign: "center" }}>
//                     <img src={icon3} alt="" style={{ width: "35%", paddingTop: "30px" }} />
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500", paddingTop: "10px" }}>2023Msq</Typography>
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>Successfully Delivered</Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item lg={2}>
//                   <Box sx={{ backgroundColor: "white", borderRadius: "0px 25px 0px 25px", width: "100%", height: "170px", border: "solid 2px #c8a55b", textAlign: "center" }}>
//                     <img src={icon2} alt="" style={{ width: "35%", paddingTop: "30px" }} />
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500", paddingTop: "10px" }}>2023Msq</Typography>
//                     <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>Successfully Delivered</Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Container>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default Homesection3;

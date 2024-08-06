
import { Box, Container, Typography, Grid, colors } from '@mui/material';
import React from 'react';
import logo from '../../assets/images/Home/footerlogo.png';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate()

  return (
    <div style={{ padding: "100px 0 0" }}>
      <Box sx={{ marginTop: "100px", cursor: "pointer", position: "relative" }}>
        <Box sx={{ backgroundColor: "black", padding: "130px 0" }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={2.5}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <img src={logo} alt="" style={{ width: "80%", margin: "0 auto" }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={{ textAlign: { xs: "center", md: "left" }, }}>
                  <Typography sx={{ color: "#c29942", fontSize: "14px" }}>
                    Who We Are
                  </Typography>
                  <Typography sx={{paddingBottom:"8px",
                    fontSize: "12px", color: "white", fontWeight: "200", paddingTop: "15px", "&:hover": {
                      color: "#c29943", transition: ".3s",
                      
                    }
                  }} onClick={() => navigate("/about")}>About Us</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} >Dwarkesh World</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/leadership")}>Leadership</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/socialInitiatives")}>Social Initiatives</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/sustainability")}>Sustainability</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography sx={{ color: "#c29942", fontSize: "14px" }}>
                    Quick Links
                  </Typography>
                  <Typography sx={{paddingBottom:"8px",
                    fontSize: "12px", color: "white", fontWeight: "200", paddingTop: "15px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/news")}>News Highlights</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/mediacoverage")}>Media Coverage</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/mediaassets")}>Media Assets</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/award")}>Awards</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/faqs")}>FAQ's</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography sx={{ color: "#c29942", fontSize: "14px" }}>
                    Reach Us
                  </Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", paddingTop: "10px", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/blogs")}>Blogs</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/register")}>Vender Registration</Typography>
                  <Typography sx={{
                    fontSize: "12px", color: "white", fontWeight: "200", lineHeight: "33px", "&:hover": {
                      color: "#c29943", transition: ".3s"
                    }
                  }} onClick={() => navigate("/register")}>Completed Project</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography sx={{ color: "#c29942", fontSize: "14px" }} onClick={() => navigate("/contact")}>
                    Contact Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "15px" }}>
                    <Typography sx={{ color: "#c29942", fontSize: "13px" }}><EmailIcon /></Typography>
                    <Typography sx={{
                      color: "white", fontSize: "12px", fontWeight: "200", "&:hover": {
                        color: "#c29943", transition: ".3s"
                      }
                    }}>dwarkesh.groupp@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography sx={{ color: "#c29942", fontSize: "13px" }}><CallIcon /></Typography>
                    <Box>
                      <Typography sx={{
                        color: "white", fontSize: "12px", fontWeight: "200", "&:hover": {
                          color: "#c29943", transition: ".3s"
                        }
                      }}>+91 84695 93034</Typography>
                      <Typography sx={{
                        color: "white", fontSize: "12px", fontWeight: "200", "&:hover": {
                          color: "#c29943", transition: ".3s"
                        }
                      }}>+91 99132 14936</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", alignItems: "center", paddingTop: "10px" }}>
                    <Typography sx={{ color: "#c29942", fontSize: "11px" }}><InstagramIcon /></Typography>
                    <Typography sx={{ color: "#c29942", fontSize: "11px" }}><XIcon /></Typography>
                    <Typography sx={{ color: "#c29942", fontSize: "11px" }}><LinkedInIcon /></Typography>
                    <Typography sx={{ color: "#c29942", fontSize: "11px" }}><FacebookIcon /></Typography>
                    <Typography sx={{ color: "#c29942", fontSize: "11px" }}><WhatsAppIcon /></Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-around", padding: "10px 90px 10px 10px", borderTop: "solid 1px white", background: "black" }}>

          <Grid xs={6}>
            <Box sx={{ color: "white", justifyContent: "start", display: "flex", alignItems: "center" }}>
              <Typography sx={{
                fontSize: "12px", "&:hover": {
                  color: "#c29943",
                  transition: ".3s"
                }
              }}>© 2024 Dwarkesh Group. All rights reserved.</Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ display: "flex", gap: "0 20px", justifyContent: "end" }}>
              <Typography sx={{
                fontSize: "12px", color: "white", "&:hover": {
                  transition: ".3s",
                  color: "#c29943"
                }
              }}>Disclaimer</Typography>
              <Typography sx={{
                fontSize: "12px", color: "white", "&:hover": {
                  transition: ".3s",
                  color: "#c29943"
                }
              }}>Privacy</Typography>
              <Typography sx={{
                fontSize: "12px", color: "white", "&:hover": {
                  transition: ".3s",
                  color: "#c29943"
                }
              }}>Cookie Policy</Typography>
            </Box>
          </Grid>

        </Grid>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", top: { lg: "-35%", md: "-30%", sm: "-10%", xs: "-10%" }, left: "50%", transform: "translate(-50% , 50%)" }}>
            <Box sx={{
              textAlign: "center",
              padding: { xs: "16px 20px", sm: "16px 30px", md: "16px 50px", lg: "25px 256px" },
              borderRadius: "15px",
              width: { lg: "300px", md: "500px", sm: "400px", xs: "100%" },
              backdropFilter: 'blur(7px)',
              // backgroundColor:"rgb(216, 192, 139),rgb(148, 114, 40),",
              backgroundImage: "linear-gradient(rgb(216, 192, 139), rgb(148, 114, 40))"

            }}>
              <Typography sx={{ color: "white", fontSize: { xs: "14px", sm: "15px", md: "17px" } }}>
                Newsletter
              </Typography>
              <Typography sx={{ color: "white", marginBottom: "10px", fontSize: { xs: "10px", sm: "12px" } }}>
                Subscribe us & get update to your inbox
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
                <input type="text" className='inputFooter' placeholder='Your Email ID' style={{
                  borderRadius: "20px",
                  height: "30px",
                  border: "none",
                  padding: "4px 10px",
                  outline: "none",
                  flex: 1,
                  backgroundColor: "#b0955c"
                  // backgroundColor: "linear-gradient(rgb(216, 192, 139), rgb(148, 114, 40))"

                }} />
                <Box sx={{
                  height: "37px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  padding: "0 15px",
                  cursor: "pointer",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center"
                }}>
                  Subscribe
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;


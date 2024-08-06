import React from "react";
import highlights from "../../assets/images/Home/highlights.png";
import { Box, Typography, Grid, Container } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CottageIcon from "@mui/icons-material/Cottage";

function Homesection1() {
  const Roundcard = [
    {
      Round_icon: <ApartmentIcon sx={{ fontSize: "55px", color: "#b98619" }} />,
    },
    {
      Round_icon: (
        <CurrencyExchangeIcon sx={{ fontSize: "55px", color: "#b98619" }} />
      ),
    },
    {
      Round_icon: <CottageIcon sx={{ fontSize: "55px", color: "#b98619" }} />,
    },
  ];
  return (
    <div>
      <Box>
        <Box
          style={{
            backgroundImage: `url(${highlights})`,
            height: "65vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position:"relative",
          marginBottom:"200px",
   
     
          }}
        >
          <Box
            sx={{ textAlign: "center", color: "white", borderRadius: "8px" }}
          >
            <Typography sx={{ fontSize: "13px", color: "#b98619" }}>
              Dwarkesh Group
            </Typography>
            <Typography
              sx={{ fontSize: "32px", color: "white", paddingTop: "11px","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }}
            >
              Live Your Luxury Life
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#b98619",
                margin: "30px",
                width: "50%",
                borderRadius: "20px",
                textAlign: "center",
                padding: "10px",
                fontSize: "13px",
                marginLeft: "60px",
                display:"flex",
                justifyContent:"center",
                border:"2px solid #c39b46",
                "&:hover":{
                  backgroundColor:"transparent",
                  color:"#c39b46",
                  transition:".3s"
                }
              }}
            >
              Book Meeting
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              position: "absolute",
              top: "63%",
              left: "0%",
             
            }}
          >
            {Roundcard.map((item) => {
              return (
                <Grid item>
                  <Box>
                    <Box
                      sx={{
                        // background: "#c49e4c",
                        // border:"2px solid #c29943",
                        width: "110%",
                        height: "165px",
                        borderRadius: "50px 50px 50px 50px",
                        textAlign:"center",
                        "&:hover":{
                          background: "#c49e4c",
                          transition:".3s",
                          "& .residentialBtn":{
                              display:"block",
                            }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          padding: "20px",
                          backgroundColor: "white",
                          border:"2px solid #c29943",
                          "&:hover": {
                            // transform: "scale(0.7)",
                            transition:".3s",
                           
                          },
                        }}
                      >
                        <Typography sx={{}}>{item.Round_icon}</Typography>
                      </Box>
                      <Typography className="residentialBtn"
                        sx={{
                          fontSize: "12px",
                          padding: "10px",
                          color: "white",
                          textAlign:"center",
                          display:"none",
                        }}
                      >
                        Residential <br />
                        <ArrowRightAltIcon
                          className="arrowicon"
                          sx={{ transition: "transform 0.5s ease-in-out" }}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Homesection1;

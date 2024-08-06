
import React, { useState } from 'react';
import logo from '../../assets/images/Home/LOGO.png';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {['Residential', 'Commercial', 'Industrial'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box>
        <Container maxWidth="lg">
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px',
              }}
            >
              <Typography sx={{cursor:"pointer"}} onClick={()=>navigate("/")}>
                <img src={logo} alt="Logo" />
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                  },
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor:"pointer"
                }}
              >
                <Typography
                  sx={{
                    paddingRight: '20px',
                    fontSize: '15px',
                    '&:hover': { color: '#c39b46' },
                  }}
                  onClick={() => navigate("/residential")}
                >
                  Residential
                </Typography>
                <Typography
                  sx={{
                    paddingRight: '20px',
                    fontSize: '15px',
                    '&:hover': { color: '#c39b46' },
                  }}
                  onClick={() => navigate("/commercial")}
                >
                  Commercial
                </Typography>
                <Typography
                  sx={{
                    paddingRight: '20px',
                    fontSize: '15px',
                    '&:hover': { color: '#c39b46' },
                  }}
                  onClick={() => navigate("/industrial")}
                >
                  Industrial
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton>
                  <CallIcon sx={{ color: '#c39b46', paddingRight: '15px' }} />
                </IconButton>
                <IconButton>
                  <EmailIcon sx={{ color: '#c39b46' }} />
                </IconButton>
                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'none',
                    },
                  }}
                >
                  <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon sx={{ color: '#c39b46' }} />
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                  >
                    {list}
                  </Drawer>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Header;

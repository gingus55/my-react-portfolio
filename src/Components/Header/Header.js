import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import pixelImage from "../../assets/images/PixelChris.jpg";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const pages = ["home", "projects", "contact"];
// const settings = ["Home", "rojects", "Contact", "About"];

export const Header = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const handleCloseNavMenu = (event) => {
  //   if (event.target.textContent === "contact") {
  //     const url = `http://localhost:3000/${event.target.textContent}`;
  //     window.location.href = url;
  //     setAnchorElUser(null);
  //   } else if (event.target.textContent === "home") {
  //     const url = `http://localhost:3000/`;
  //     window.location.href = url;
  //     setAnchorElUser(null);
  //   } else if (event.target.textContent === "projects") {
  //     const url = `http://localhost:3000/${event.target.textContent}`;
  //     window.location.href = url;
  //     setAnchorElUser(null);
  //   } else {
  //   }
  //   setAnchorElUser(null);
  // };

  const handleCloseUserMenu = (event) => {
    if (event.target.textContent === "contact") {
      // const url = `https://gingus55.github.io/my-react-portfolio/${event.target.textContent}`;
      // window.location.href = url;
      // setAnchorElUser(null);

      <Link to="/contact"></Link>;
    } else if (event.target.textContent === "home") {
      const url = `https://gingus55.github.io/my-react-portfolio/`;
      window.location.href = url;
      setAnchorElUser(null);
    } else if (event.target.textContent === "projects") {
      const url = `https://gingus55.github.io/my-react-portfolio/${event.target.textContent}`;
      window.location.href = url;
      setAnchorElUser(null);
    } else if (event.target.textContent === "about") {
      const url = `https://gingus55.github.io/my-react-portfolio/${event.target.textContent}`;
      window.location.href = url;
      setAnchorElUser(null);
    } else {
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "#E08604" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            CHRIS BRADSHAW
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            CHRIS BRADSHAW
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={page === "home" ? "/" : `/${page}`}
                variant="h6"
                key={page}
                component={RouterLink}
                underline="none"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "padding-right": "10px",
                  "text-transform": "capitalize",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="More Pages">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Chris Bradshaw"
                  src={pixelImage}
                  //   sx={{ width: 24, height: 24 }}
                />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
            >
              {pages.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

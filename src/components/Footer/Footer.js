import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import SwinLogo from "../../assets/images/swinLogo.png";
import TUMLogo from "../../assets/images/TUMLogo.png";
import { useTheme } from "@mui/material/styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  footerGrid: {
    padding: "1rem 15rem",
  },
  logoGrid: {
    padding: "1rem 0rem",
  },
  addressGrid: {
    padding: "0.5rem 0rem",
  },
  contactGrid: {
    padding: "0.5rem 0rem",
  },
  linkDecoration: {
    textDecorationThickness: "2px",
  },
  logoTwoImageFooter: {
    display: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: common.black }}>
      <Grid
        xs={12}
        container
        direction="row"
        sx={{
          padding: {
            xs: "1rem 2rem",
            sm: "1rem 3rem",
            md: "1rem 6rem",
            lg: "1rem 15rem",
          },
        }}
      >
        <Grid container item xs={12} sm={4} justifySelf="center">
          <Grid item xs={12} className={classes.logoGrid}>
            <Typography variant="h3" color="common.white" fontWeight="700">
              DivIT
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.contactGrid}>
            <Typography color="common.white">diversityit@gmail.com</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={4}
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "block",
            },
          }}
          flexDirection="column"
          alignContent="center"
        >
          <Grid item xs={12} sm={4} className={classes.logoGrid}>
            <Typography color="common.white" variant="h6" fontWeight="700">
              Follow
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={5}
            sx={{ paddingBottom: "1rem" }}
            flexDirection="row"
          >
            <Typography>
              <Link href="#" color="common.white" underline="always">
                <FacebookRoundedIcon
                  sx={{
                    color: "white",
                    height: "2rem",
                    width: "2rem",
                  }}
                />
              </Link>
            </Typography>
            <Typography>
              <Link href="#" color="common.white" underline="always">
                <InstagramIcon
                  sx={{
                    color: "white",
                    height: "2rem",
                    width: "2rem",
                    margin: "0rem 0.5rem",
                  }}
                />
              </Link>
            </Typography>
            <Typography>
              <Link href="#" color="common.white" underline="always">
                <TwitterIcon
                  sx={{
                    color: "white",
                    height: "2rem",
                    width: "2rem",
                  }}
                />
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={4}
          sx={{
            padding: "1rem 0rem",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
          justifyContent="flex-end"
        >
          <img
            src={SwinLogo}
            alt="Logo"
            width="40%"
            height="70%"
            style={{ padding: "0rem 0.3rem" }}
          />
          <img
            src={TUMLogo}
            alt="Logo"
            width="40%"
            height="70%"
            style={{ padding: "0rem 0.3rem" }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={4}
          sx={{
            padding: "1rem 0rem",
            display: {
              xs: "flex",
              sm: "none",
            },
            [theme.breakpoints.down("sm")]: {
              justifyContent: "space-between",
            },
          }}
          direction="row"
        >
          <img src={SwinLogo} alt="Logo" width="40%" height="100%" />
          <img src={TUMLogo} alt="Logo" width="40%" height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

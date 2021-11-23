import { Grid, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Image from "../../assets/images/girls_computer_science.jpeg";
import HomeCard from "../../components/Common/HomeCard";
import { HEADER_HEIGHT } from "../../utils/Constant";
import { homeCardData } from "../../utils/Data";

const useStyles = makeStyles((theme) => ({
  headerBackground: {
    background: theme.palette.primary.main,
  },
  boxContainer: {
    backgroundImage: `url(${Image})`,
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    transition: "transform 1000ms ease-in-out",
  },
  title: {
    color: theme.palette.common.white,
  },
  subTitle: {
    color: theme.palette.common.white,
  },
  sloganContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  root: {
    maxWidth: 345,
    height: "100%",
  },
  headTitle: {
    color: theme.palette.tertiary.main,
  },
  cardTitle: {
    color: theme.palette.tertiary.main,
    textAlign: "center",
  },
  cardText: {
    paddingTop: "2rem",
    textAlign: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container item className={classes.boxContainer}>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.4);",
            height: `calc(100vh - ${HEADER_HEIGHT})`,
            width: "100%",
          }}
        ></Box>
        <Grid
          sm={9}
          className={classes.sloganContainer}
          sx={{
            margin: { xs: "2rem", sm: "8rem 4rem" },
          }}
        >
          <Typography
            fontWeight="700"
            className={classes.title}
            sx={{
              fontSize: {
                xs: "2em",
                sm: "3.2em",
              },
            }}
          >
            What is Diversity in Information Technology (DivIT)?
          </Typography>
          <Typography
            fontWeight="500"
            className={classes.subTitle}
            sx={{ fontSize: "1.2em", fontWeight: "500" }}
          >
            It is a new focus group at TUM IAS that is run by newly-appointed
            Anna Boyksen Fellow Andreea Molnar and her host at IN.TUM, Anne
            Brüggemann-Klein.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        sx={{
          margin: { xs: "2rem 0rem", md: "2rem 0rem", lg: "0rem 0rem" },
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: {
                xs: "2em",
                sm: "3.2em",
              },
              fontWeight: "700",
              textAlign: "center",
              margin: "4rem 4rem",
            }}
            className={classes.headTitle}
          >
            What is the purpose of DivIT?
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            margin: {
              xs: "0rem 0rem",
              sm: "1rem 0rem",
              md: "4rem 0rem",
            },
            width: { md: "initial" },
            justifyContent: { sm: "space-evenly" },
          }}
        >
          {homeCardData.map((item) => (
            <HomeCard
              title={item.cardTitle}
              icon={item.icon}
              content={item.cardContent}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;

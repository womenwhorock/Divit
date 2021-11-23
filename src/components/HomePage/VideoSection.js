import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import CustomButton from "../Common/Button";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.tertiary.main,
    textAlign: "center",
  },
  cardText: {
    paddingTop: "1rem",
    textAlign: "center",
  },
  cardRoot: {
    height: "100%",
  },
  headTitle: {
    color: theme.palette.tertiary.main,
  },
}));
const handleClick = () =>
  window.open(
    "https://www.ias.tum.de/en/ias/research-areas/gender-and-diversity-in-science-and-engineering/diversity-in-information-technology/"
  );

const VideoSection = (props) => {
  const { backgroundColor } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      xs={12}
      sx={{
        background: backgroundColor,
      }}
      alignContent="center"
    >
      <Grid
        container
        item
        sx={{
          margin: {
            xs: "6rem 2rem",
            lg: "6rem 4rem",
          },
        }}
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            display: { xs: "block", sm: "none" },
            alignSelf: { xs: "center", md: "none" },
            height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
          }}
        >
          <iframe
            height="100%"
            width="100%"
            id="video"
            src={"https://www.youtube.com/embed/0ugLVIT1aKw"}
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={4}
          md={4}
          lg={3}
          sx={{ marginBottom: { lg: "8rem" } }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "2em",
                sm: "2em",
                md: "2.7em",
              },
              fontWeight: "700",
              textAlign: "left",
              lineHeight: { xs: 1.2 },
            }}
            className={classes.headTitle}
          >
            More Women In Technology
          </Typography>
          <Typography
            className={classes.cardText}
            sx={{
              textAlign: "left",
              fontSize: {
                sm: "1rem",
              },
            }}
          >
            Further information on Diversity in Information Technology at TUM
          </Typography>
          <CustomButton
            sx={{
              margin: { xs: "1rem 0rem", md: "1rem 0rem" },
            }}
            type="submit"
            backGroundColor={theme.palette.tertiary.main}
            color={theme.palette.common.white}
            hoverTextColor={theme.palette.common.white}
            onClick={() => handleClick()}
          >
            Read More
          </CustomButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            display: { xs: "none", sm: "block" },
            alignSelf: { xs: "center", md: "none" },
            height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
          }}
        >
          <iframe
            height="100%"
            width="100%"
            id="video"
            src={"https://www.youtube.com/embed/0ugLVIT1aKw"}
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoSection;

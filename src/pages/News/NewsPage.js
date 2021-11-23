import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { eventCardData } from "../../utils/Data";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CustomButton from "../../components/Common/Button";
import CardMedia from "@mui/material/CardMedia";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tertiary.main,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 450,
    [theme.breakpoints.down("md")]: {
      height: "16rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: 550,
      width: 260,
    },
  },
}));

const handleClick = (item) => window.open(item.url);
const NewsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        padding: {
          xs: "2rem 2rem",
          md: "0rem 0rem",
        },
        margin: "6rem 0rem 2rem 0rem",
      }}
      xs={12}
      justifyContent="space-evenly"
    >
      {eventCardData.map((item) => (
        <Grid
          container
          sm={3.7}
          md={3.5}
          sx={{
            backgroundColor: theme.palette.tertiary.main,
            borderRadius: "0px",
            margin: {
              xs: "2rem 0rem",
              lg: "3rem 0rem 0rem 0rem",
            },
            padding: "16px",
          }}
          justifyContent="center"
        >
          <Card
            className={classes.root}
            sx={{
              backgroundColor: theme.palette.tertiary.main,
              borderRadius: "0px",
              boxShadow: 0,
            }}
          >
            <CardMedia
              title="Contemplative Reptile"
              image={item.imageURl}
              sx={{
                height: { xs: "23rem", sm: "15rem", md: "23rem", lg: "35rem" },
                width: "100%",
              }}
            />
            <CardContent sx={{ padding: "16px 0px" }}>
              <Typography
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.4rem", md: "1.9rem" },
                  lineHeight: "1.1",
                }}
                color={theme.palette.common.white}
              >
                {item.eventTitle}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  lineHeight: "1.1",
                  margin: "0.5rem 0rem",
                }}
                color={theme.palette.common.white}
              >
                {item.date}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  lineHeight: "1.1",
                  margin: "0.5rem 0rem",
                }}
                color={theme.palette.common.white}
              >
                {item.time}
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.common.white}
                sx={{
                  margin: "1rem 0rem",
                }}
              >
                {item.eventDetail}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ marginTop: "auto", backgroundColor: "transparent" }}
            >
              <CustomButton
                type="submit"
                backGroundColor={theme.palette.common.white}
                color={theme.palette.tertiary.main}
                hoverTextColor={theme.palette.common.white}
                onClick={() => handleClick(item)}
              >
                Read More
              </CustomButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsPage;

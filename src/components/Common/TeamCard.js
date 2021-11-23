import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import girlImage from "../../assets/images/girl_ipad.jpg";
import Andreea from "../../assets/images/andreea.png";
import Anne from "../../assets/images/Anne.jpg";

import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.tertiary.main,
    textAlign: "center",
  },
  cardText: {
    paddingTop: "2rem",
    textAlign: "center",
  },
  card: {
    justifyContent: "space-between",
    borderRadius: "0px",
  },
}));

const TeamCard = (props) => {
  const { name, description } = props;
  const classes = useStyles();
  const theme = useTheme();
  const getComponent = () => {
    switch (name) {
      case "Dr Andreea Molnar":
        return Andreea;
      case "Prof. Dr. Anne Brüggemann-Klein":
        return Anne;
      default:
        return girlImage;
    }
  };

  return (
    <Grid
      item
      xs
      sx={{
        margin: {
          xs: "4rem 0rem",
          sm: "4rem 1rem",
          md: "4rem 4rem",
        },
        backgroundColor: theme.palette.tertiary.main,
        borderRadius: "0px",
        display: {
          xs: "block",
        },
      }}
      component={Card}
      className={classes.card}
    >
      <CardContent>
        <img
          height="70%"
          width="100%"
          src={getComponent()}
          wrapped
          ui={false}
          alt={"girlImage"}
        />
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.4rem", md: "1.9rem" },
          }}
          color={theme.palette.common.white}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={theme.palette.common.white}>
          {description}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default TeamCard;

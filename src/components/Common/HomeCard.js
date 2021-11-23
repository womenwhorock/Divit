import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
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

const HomeCard = (props) => {
  const { title, content } = props;
  const classes = useStyles();
  const theme = useTheme();
  const getComponent = () => {
    switch (title) {
      case "Analyse":
        return (
          <ManageSearchIcon
            sx={{
              width: { xs: 45, md: 60 },
              height: { xs: 45, md: 60 },
              color: theme.palette.tertiary.main,
            }}
          />
        );
      case "Action Plan":
        return (
          <AssignmentIcon
            sx={{
              width: { xs: 45, md: 60 },
              height: { xs: 45, md: 60 },
              color: theme.palette.tertiary.main,
            }}
          />
        );
      case "Implementation":
        return (
          <SettingsSuggestIcon
            sx={{
              width: { xs: 45, md: 60 },
              height: { xs: 45, md: 60 },
              color: theme.palette.tertiary.main,
            }}
          />
        );
      default:
        return (
          <ManageSearchIcon
            sx={{
              width: { xs: 45, md: 60 },
              height: { xs: 45, md: 60 },
              color: theme.palette.tertiary.main,
            }}
          />
        );
    }
  };

  return (
    <Grid
      sm={3}
      md={3.5}
      lg={3}
      container
      item
      sx={{
        margin: {
          xs: "2rem 2rem",
          sm: "0rem 0rem",
        },
        height: { xs: "390px", sm: "100%" },
      }}
    >
      <Card
        className={classes.root}
        sx={{
          background: theme.palette.primary.main,
          borderRadius: 0,
          textAlign: "center",
          padding: {
            md: "0rem 1rem",
          },
        }}
      >
        <CardContent>
          {getComponent()}
          <Typography
            className={classes.cardTitle}
            sx={{
              fontSize: {
                xs: "1.6rem",
                sm: "1.2rem",
                md: "1.6rem",
              },
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          <Typography
            className={classes.cardText}
            sx={{
              fontSize: {
                sm: "1rem",
              },
            }}
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HomeCard;

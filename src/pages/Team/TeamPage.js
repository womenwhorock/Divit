import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import placeHolder from "../../assets/images/placeholder.jpg";
import TeamCard from "../../components/Common/TeamCard";
import { investigatorsData, studentData } from "../../utils/Data";
import { makeStyles, useTheme } from "@mui/styles";
import julia from "../../assets/images/julia.png";
import kinal from "../../assets/images/kinal.jpg";
import paras from "../../assets/images/paras.jpg";
import harsha from "../../assets/images/harsha.png";
import pawan from "../../assets/images/pawan.jpeg";
import raman from "../../assets/images/raman.jpg";
const useStyles = makeStyles((theme) => ({}));

const TeamPage = (props) => {
  const getComponent = (name) => {
    switch (name) {
      case "Julia Pühl":
        return julia;
      case "Kinal Patel":
        return kinal;
      case "Ramandeep Kaur":
        return raman;
      case "Paras Korat":
        return paras;
      case "Pawan Dhami":
        return pawan;
      case "Sri Harsha Anisetti":
        return harsha;
      default:
        return placeHolder;
    }
  };
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid
        container
        item
        justifyContent="center"
        sx={{
          padding: {
            xs: "1rem 2rem",
            sm: "0rem 0rem",
          },
        }}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={12} textAlign="center" sx={{ margin: "2rem 0rem" }}>
            <Typography
              color="common.black"
              variant="h3"
              fontWeight="700"
              color={theme.palette.tertiary.main}
            >
              Project Investigators
            </Typography>
          </Grid>

          <Grid
            container
            sm={10}
            md={11}
            xs={12}
            sx={{
              display: {
                xs: "block",
                sm: "flex",
              },
            }}
          >
            {investigatorsData.map((item) => (
              <TeamCard name={item.name} description={item.description} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: {
            xs: "1rem 2rem",
            sm: "0rem 0rem",
          },
        }}
      >
        <Grid item xs={12} textAlign="center" sx={{ margin: "2rem 0rem" }}>
          <Typography
            variant="h3"
            fontWeight="700"
            color={theme.palette.tertiary.main}
          >
            Student Assistants
          </Typography>
        </Grid>

        <Grid
          item
          container
          sx={{
            justifyContent: { sm: "space-evenly" },
          }}
        >
          {studentData.map((item) => (
            <Grid
              item
              sm={3.5}
              md={3.5}
              lg={3.5}
              sx={{
                borderRadius: "0px",
                margin: {
                  xs: "2rem 0rem",
                  sm: "1.5rem 0rem",
                },
              }}
              component={Card}
              className={classes.card}
            >
              <CardContent>
                <img
                  alt={"teamMember"}
                  height="90%"
                  width="100%"
                  src={getComponent(item.name)}
                  wrapped
                  ui={false}
                />

                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: { sm: "1.4rem", md: "1.9rem" },
                  }}
                  color={theme.palette.tertiary.main}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" color={theme.palette.tertiary.main}>
                  {item.description}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamPage;

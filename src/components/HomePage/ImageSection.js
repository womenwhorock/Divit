import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import girlImage from "../../assets/images/girl_ipad.jpg";
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
    "https://www.itu.int/en/ITU-D/Digital-Inclusion/Women-and-Girls/Girls-in-ICT-Portal/Pages/GirlsInICTDay/2021/GICT-2021.aspx"
  );

const ImageSection = (props) => {
  const { backgroundColor } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container sx={{ backgroundColor: backgroundColor }}>
      <Grid
        container
        xs={12}
        sx={{
          margin: {
            xs: "2rem 2rem",
            sm: "6rem 2rem",
            lg: "6rem 4rem",
          },
        }}
      >
        <Card
          sx={{
            display: { xs: "", sm: "flex" },
            margin: { xs: "auto" },
            boxShadow: 0,
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
          justifyContent="center"
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "60%" },
              height: { xs: "50%", sm: "100%" },
              display: { xs: "block", sm: "none" },
            }}
            image={girlImage}
            alt="Girl with ipad"
          />
          <Grid item container sm={12} md={3} lg={2}>
            <CardContent sx={{ padding: { xs: 0, sm: "16px 0px" } }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2em",
                    sm: "2.7em",
                  },
                  fontWeight: "700",
                  textAlign: "left",
                  margin: { xs: "-2rem 0rem", sm: "0rem" },
                  position: { xs: "absolute" },
                }}
                className={classes.headTitle}
              >
                <div
                  style={{
                    backgroundColor: backgroundColor,
                  }}
                >
                  Girls in ICT Day
                </div>
                <Typography
                  sx={{
                    display: { xs: "none", sm: "table-caption" },
                    width: { sm: "16rem", md: "14.5rem", lg: "14rem" },
                  }}
                >
                  ​​International Girls in ICTs will be celebrated the 10th
                  Anniversary this year. More on this at ITU Girl's in ICT 10th
                  Anniversary ToolKit.
                </Typography>
                <CustomButton
                  sx={{
                    display: { xs: "none", sm: "table-caption" },
                  }}
                  type="submit"
                  backGroundColor={theme.palette.tertiary.main}
                  color={theme.palette.common.white}
                  hoverTextColor={theme.palette.common.white}
                  onClick={() => handleClick()}
                >
                  Read More
                </CustomButton>
              </Typography>
              <Typography
                sx={{
                  display: { sm: "none" },
                  width: { sm: "16rem", lg: "14rem" },
                  position: { xs: "relative" },
                  margin: { xs: "2rem 0rem" },
                }}
              >
                ​​International Girls in ICTs will be celebrated the 10th
                Anniversary this year. More on this at ITU Girl's in ICT 10th
                Anniversary ToolKit
              </Typography>
              <CustomButton
                sx={{ display: { sm: "none" } }}
                type="submit"
                backGroundColor={theme.palette.tertiary.main}
                color={theme.palette.common.white}
                hoverTextColor={theme.palette.common.white}
                onClick={() => handleClick()}
              >
                Read More
              </CustomButton>
            </CardContent>
          </Grid>
          <CardMedia
            component="img"
            sx={{
              width: "60%",
              height: "100%",
              display: { xs: "none", sm: "block" },
              margin: { md: "0rem 1rem" },
            }}
            image={girlImage}
            alt="Girl with Ipad"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageSection;

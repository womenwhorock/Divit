import { Grid } from "@mui/material";
import VideoSection from "../../components/HomePage/VideoSection";
import ImageSection from "../../components/HomePage/ImageSection";
import React from "react";
import { useTheme } from "@mui/styles";

const ResourcesPage = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        padding: {
          sm: "0rem 0rem",
        },
      }}
    >
      <VideoSection backgroundColor={theme.palette.common.white} />
      <ImageSection backgroundColor={theme.palette.primary.main} />
    </Grid>
  );
};

export default ResourcesPage;

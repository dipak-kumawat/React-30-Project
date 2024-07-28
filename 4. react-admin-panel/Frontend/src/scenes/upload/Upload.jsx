import React, { useState } from "react";
import { Box, Button,  } from "@mui/material";
import Header from "../../components/Header";
import Model from "./Model";

const Upload = () => {
  const [showModel, setShowModel] = useState(false);

  const closeModel = () => setShowModel(false);

  return (
    <Box m={4}>
      <Header title="Upload" subtitle="Upload your files" />
      <Box>
        <Button onClick={() => setShowModel(true)} variant="outlined" color="secondary" size="large">
          Upload
        </Button>
        {showModel && <Model  closeModel = {closeModel} />}
      </Box>
    </Box>
  );
};

export default Upload;

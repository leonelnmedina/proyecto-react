import { Box, Grid } from "@mui/material";

const material = () => {
  return (
    // <Box>
    //   <Grid container>
    //     <Grid item xs={12} md={6}>
    //       <h2 style={{ width: "100%", backgroundColor: "green" }}>Caja uno</h2>
    //     </Grid>

    //     <Grid item xs={12} md={6}>
    //       <h2 style={{ width: "100%", backgroundColor: "red" }}>Caja dos</h2>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box>
      <Box
        sx={{
          border: {
            xs: "2px solid black",
            sm: "1px solid blue",
            md: "3px solid red",
          },
          fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
        }}
      >
        <h1>Titulo</h1>
      </Box>
      <Box
        sx={{
          border: {
            xs: "2px solid black",
            sm: "1px solid blue",
            md: "3px solid red",
          },
          fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
          display: { xs: "block", sm: "none" },
        }}
      >
        <h1>Titulo</h1>
      </Box>
    </Box>
  );
};

export default material;

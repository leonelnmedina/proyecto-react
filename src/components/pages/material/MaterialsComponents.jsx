import { Padding } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
const MaterialsComponents = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Button color="success" variant="contained">
        Sumar
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Borrar
      </Button>
    </div>
  );
};

export default MaterialsComponents;

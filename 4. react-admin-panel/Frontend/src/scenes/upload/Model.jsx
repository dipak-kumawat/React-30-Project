import { Button,  } from "@mui/material";


const Model = ({closeModel}) => {

    return (
      <>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nostrum cupiditate esse officia eligendi ab rerum eum odit distinctio.
          Quis totam natus voluptas quae expedita corrupti molestiae assumenda
          quisquam iste.
        </p>
        <Button onClick={closeModel} variant="outlined" color="secondary" size="large">
          Done
        </Button>
      </>
    );
  };

  export default Model
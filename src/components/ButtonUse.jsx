import Button from "@mui/material/Button";

function ButtonUse({ text, handler }) {
  const buttonStyle = {
    margin: "10px",
  };

  return (
    <Button variant="outlined" style={buttonStyle} onClick={handler}>
      {text}
    </Button>
  );
}

export default ButtonUse;

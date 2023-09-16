import Button from '@mui/material/Button';

function ButtonUse({ text }) {
  const buttonStyle = {
    margin: '10px'
  };

  return (
    <Button variant ="outlined" style={buttonStyle}>
      {text}
    </Button>
  );
}

export default ButtonUse;

const {
  InputAdornment,
  TextField,
} = require("@mui/material");

const CustomInputAdorment = (props) => {
  if (props?.type) {
    switch (props.type) {
      case "text":
        return (
          <InputAdornment position={props.positon}>{props.name}</InputAdornment>
        );
      case "icon":
        return (
          <InputAdornment position={props.positon}>
           {props.name}
          </InputAdornment>
        );
      default:
        return "";
    }
  } else {
    return "";
  }
};

const CustomTextField = (props) => {
  const handleChange = (event) => {
    props.onInputChange({ data: event, name: props.name });
  };

  return (
    <TextField
      variant={props.variant}
      className={props.className}
      value={props.value}
      onChange={handleChange}
      label={props.label}
        type={props.type}
      InputProps={{
        endAdornment: (
          <CustomInputAdorment
            position="end"
            type={props.endIconType}
            name={props.endIcon}
          />
        ),
      }}
    />
  );
};

export default CustomTextField;
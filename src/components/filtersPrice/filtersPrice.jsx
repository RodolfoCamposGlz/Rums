import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {red} from "@material-ui/core/colors";
import {Container, Row, Col} from "reactstrap";

// const useStyles = makeStyles({
//   root: {
//     width: 300,

//   },
// });

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  // const classes = useStyles();
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //get the value of the slider
  var ValueSlider = valuetext(value);
  var ValueArray = ValueSlider.split(",");

  return (
    /* <Typography id="range-slider" gutterBottom>
        Presupuesto
      </Typography> */

    <Container>
      <Container className="text-filter">
        <Row>
          <Col className="text-slider" xl="4">
            Presupuesto
          </Col>
          <Col xl="8">
            <div></div>
            <Slider
              style={{paddingTop: "30px"}}
              // className="slider-hijo"
              value={value}
              onChange={handleChange}
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              max={10000}
              min={0}
            ></Slider>
            <div>
              <span className="price-right">${ValueArray[1]}</span>
              <span className="price-left">${ValueArray[0]}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

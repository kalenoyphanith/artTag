import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import './App.css';

// function capture(imgSrc) {
//   console.log(imgSrc);
// }

//width="window.innerWidth"
//height="window.innerHeight"
const CameraPage = () => {
  const classes = useStyles();const [source, setSource] = useState("");const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>}
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}

export default CameraPage;

// const CameraPage = () => {
//   const cam = useRef(null);
//   return (
//     <Fragment>
//       <Camera
//         showFocus={true}
//         front={true}
//         capture={capture}
//         ref={cam}
//         width="100%"
//         height="100%"
//         focusWidth="80%"
//         focusHeight="60%"
//         btnColor="white"
//         objectFit="cover"
//       />
//       {/* <button onClick={img => cam.current.capture(img)}>Take image</button> */}
//     </Fragment>
//   );
// };
// ReactDOM.render(<CameraPage />, document.getElementById('root'));

// export default CameraPage;
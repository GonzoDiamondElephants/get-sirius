import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
export default function AnimatedModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {wowHouse}=props;


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <div id="buttonWrapper">
     <div className="submitButton">
        <button onClick={handleOpen} className="glow" type="submit" id="expectoApplyo">Expecto Apply
        </button>      
        </div>
        </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
        <div className="houseContain">
            <div className="houseLogo">
                <img src={wowHouse.icon} alt={wowHouse.houseName}/>
            </div>
      <div id="houseName">{wowHouse.houseName}</div>
                <div id="houseDesc">{wowHouse.description}</div>
                <Link to='/'>
                <div id="goHome">Back to Howarts</div>
                </Link>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}




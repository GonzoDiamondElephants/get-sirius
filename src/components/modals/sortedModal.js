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

export default function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
                <img src="https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest?cb=20190222162949" alt="Gryffindor" />
            </div>
            <div id="houseName">Gryffindor</div>
                <div id="houseDesc">The Gryffindor house emphasizes the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness.</div>
                <Link to='/'>
                <div id="goHome">Back to Howarts</div>
                </Link>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}
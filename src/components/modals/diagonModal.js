import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function DiagonModal() {
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
      <div className="daButton">
        <Button id="owlPost" variant="contained" onClick={handleOpen}  disableElevation>
            DELIVER VIA OWL POST
          </Button>
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
                <img src="https://www.irishnews.com/picturesarchive/irishnews/irishnews/2019/01/29/140102630-18d5db6b-564e-4272-8506-0153bdabbd12.jpg" alt="Gringotts Goblin" />
            </div>
            <div id="houseName">Congratulations on your purchase!</div>
                <div id="houseDesc">Your new gringCoin balance is AMOUNT</div>
                <Link to='/'>
                <div id="goHome">Back to Howarts</div>
                </Link>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}

import React, {useContext, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import {Context} from '../../App'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function DiagonModal(props) {
  const {currentUser} = useContext(Context);
  const [balance, setBalance] = useState(0)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  



  const handleOpen = async () => {
    setOpen(true);

    let balance =  await axios.get(`${process.env.REACT_APP_API}/student/id/${currentUser._id}`);

    balance = balance.data.gringCoin;
    balance = balance - Math.floor(Math.random() * 1000) + 1 ;
    currentUser.gringCoin = balance;
    axios.put(`${process.env.REACT_APP_API}/student/${currentUser._id}`, {gringCoin: balance});

    setBalance(balance);
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
                <div id="houseDesc">Your new gringCoin balance is {balance}</div>
                <Link to='/'>
                <div id="goHome">Back to Howarts</div>
                </Link>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}

import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from 'axios';
import { Button } from "@material-ui/core";
import { Context } from '../../App';
import "../../styles/patronusModal.scss"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function PatronusModal() {
  const { currentUser } = useContext(Context);
  const [source, setSource] = useState('');
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [beast, setBeast] = useState('');
  const getPatronus = async () => {
    if (!currentUser.patronus) {
      let userDbPatronus = await axios.get(`${process.env.REACT_APP_API}/student/id/${currentUser._id}`);
      if (!userDbPatronus.data.patronus) {
        let options = await axios.get('https://gde-patronus.herokuapp.com/');
        let randomNum = Math.floor(Math.random() * Math.floor(9));
        options = options.data[randomNum];
        axios.put(`${process.env.REACT_APP_API}/student/${currentUser._id}`, { patronus: options.patronus });
        currentUser.patronus = options.patronus;
        setBeast(options.patronus);
      } else { setBeast(userDbPatronus.data.patronus) }
    } else { setBeast(currentUser.patronus) }
    setSource(`https://raw.githubusercontent.com/testOrg762/testPic/master/${beast}.png`)
  };

  useEffect(() => {
    getPatronus();
  }, [beast]);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
      <div className="patButton">
        <Button id="patronusButton" variant="contained" onClick={handleOpen} disableElevation>
          Call on your Patronus
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
            <div className="patronusPic">
              <img src={source} alt="{beast}" i/>
            </div>
            <div id="houseName">{beast}</div>
            <div id="houseDesc">A Patronus is an kind of Anti-Dementor – a guardian which acts as a shield between you and the Dementor.’ It’s also ‘a kind of positive force, a projection of the very things that the Dementor feeds upon – hope, happiness, the desire to survive – but it cannot feel despair, as real humans can, so the Dementors can’t hurt it.</div>
             
          </div>
        </Fade>
      </Modal>
    </div>
  );

}

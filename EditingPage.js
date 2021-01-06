import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db } from "../base";

const ref = db.collection("learning");

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditingPage({ profile, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(profile);

  const updateData = async (id) => {
    await ref.doc(id).update({
      profile: input,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>Edit</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit me here</h2>
            <p id="transition-modal-description">Put the Edited input here.</p>
            <form
              style={{
                marginTop: "50px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "300px",
                  height: "60px",
                  borderRadius: "30px",
                  border: "1px solid lightblue",
                  marginRight: "20px",
                  outlineWidth: "0",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
                type="text"
                placeholder={profile}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />

              <button
                type="submit"
                style={{
                  // display: "none",
                  backgroundColor: "red",
                  color: "white",
                  width: "100px",
                  height: "40px",
                  borderRadius: "20px",
                  outlineWidth: "0",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  updateData(id);
                  handleClose();
                  console.log("");
                }}
              >
                Enter
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

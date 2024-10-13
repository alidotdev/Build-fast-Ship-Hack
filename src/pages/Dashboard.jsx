import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from "@mui/material";
import { Modal } from "bootstrap";
import React, { useState } from "react";

const Dashboard = () => {
  const [tododModal, setTododModal] = useState(false);
  const openTodoModal = () => setTododModal(true);
  const closeTodoModal = () => setTododModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        open={tododModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeTodoModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Todo Text"}</DialogTitle>
        <DialogContent>
            <div>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTodoModal}>Disagree</Button>
          <Button onClick={closeTodoModal}>Agree</Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <Card className="todoCard" sx={{ minWidth: 275 }}>
            <div
              style={{
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ textAlign: "center" }}>TO Do List</h3>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={openTodoModal}
              >
                Create
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

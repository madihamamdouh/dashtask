import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./poper.scss";
export default function FormDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ bgcolor: "#050e2d", color: "#fff" }}>
          Add New User
        </DialogTitle>
        <DialogContent sx={{ px: 5, py: 6 }}>
          <TextField
            autoFocus
            margin="dense"
            id="fullname"
            label="Full Name"
            type="string"
            fullWidth
            variant="standard"
            sx={{ py: 1 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="string"
            fullWidth
            variant="standard"
            sx={{ py: 1 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            sx={{ py: 1 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="group"
            label="User Group"
            type="string"
            fullWidth
            variant="standard"
            sx={{ py: 1 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="profile"
            label="Assign Profile "
            type="string"
            fullWidth
            variant="standard"
            sx={{ py: 1 }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 4 }}>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="success">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

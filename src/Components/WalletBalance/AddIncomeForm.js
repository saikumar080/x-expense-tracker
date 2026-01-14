import React, { useState } from "react";
import {
  Box,
  Modal,
  CardContent,
  TextField,
  Card,
  Alert,
  Collapse,
  Fade,
  Backdrop,
  Button,
  Typography,
} from "@mui/material";

const AddIncomeForm = ({ open, handleClose, balance, setBalance }) => {
  const [amount, setAmount] = useState("");
  const [errorAlert, setErrorAlert] = useState({ show: false, message: "" });
  const [successAlert, setSuccessAlert] = useState({ show: false, message: "" });

  const handleAddIncome = () => {
    const value = Number(amount);
    if (!value || value <= 0) {
      setErrorAlert({ show: true, message: "Please enter a valid amount!" });
      return;
    }

    setBalance((prev) => prev + value);
    setSuccessAlert({ show: true, message: "Balance added successfully!" });
    handleClose();
    setAmount("");

    setTimeout(() => setSuccessAlert({ show: false, message: "" }), 2000);
  };

  return (
    <Box>
      {/* Success Alert */}
      <Collapse in={successAlert.show}>
        <Alert severity="success" sx={{ mt: 2, width: "100%", textAlign: "center" }}>
          {successAlert.message}
        </Alert>
      </Collapse>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 300 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              bgcolor: "white",
              boxShadow: 24,
              borderRadius: 2,
              p: 3,
              width: 400,
            }}
          >
            <Card sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}>
                  Add Balance
                </Typography>

                {/* Error alert */}
                <Collapse in={errorAlert.show}>
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {errorAlert.message}
                  </Alert>
                </Collapse>

                <TextField
                  label="Income Amount"
                  type="number"
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  sx={{ mb: 3 }}
                />

                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#b58b00", "&:hover": { bgcolor: "#a07a00" }, fontWeight: "bold" }}
                    onClick={handleAddIncome}
                  >
                    Add Balance
                  </Button>
                  <Button variant="outlined" color="error" onClick={handleClose} sx={{ fontWeight: "bold" }}>
                    Cancel
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default React.memo(AddIncomeForm);

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function AddTripForm() {
  return (
    <div className="addtripform">
      <h1 className="addtripform--title">Add Trip</h1>
      <h3 className="addtripform--subtitle">Enter Flight Details</h3>
      <div className="addtripform--form">
        <TextField
          name="Departure"
          required
          id="dptAirport"
          label="Departure Airport"
          autoFocus
        />
        <TextField
          name="Destination"
          required
          id="dstAirport"
          label="Destination Airport"
          autoFocus
        />
        <Button className="addtripform--form--button" variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
}

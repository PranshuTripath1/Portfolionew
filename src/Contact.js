import React from "react";
import { Button } from "@mui/material";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="tages">CONTACT</h2>
      <div className="mail">
        <a href="mailto:tripathi22pranshu@gmail.com">
          <Button variant="contained">Email Me</Button>
        </a>
      </div>
    </div>
  );
};

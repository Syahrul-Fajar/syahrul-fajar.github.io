// src/components/Logo/Logo.jsx

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.text.primary, // Warna dari tema
    transition: "fill 0.3s ease-in-out",
    "&:hover": {
      fill: theme.palette.primary.main, // Warna saat hover
    },
  },
  logoText: {
    fontSize: "80px",
    fontWeight: "bold",
    fontFamily: "monospace",
    textAnchor: "middle",
    dominantBaseline: "central",
  }
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={classes.svgHover}
      aria-labelledby="logoTitle"
      overflow="visible" // <-- TAMBAHKAN PROPERTI INI
    >
      <title id="logoTitle">Logo Kode</title>
      <text x="50" y="52" className={classes.logoText}>
        &lt;/&gt;
      </text>
    </svg>
  );
};
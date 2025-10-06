// src/components/LogoLink/LogoLink.jsx

import React from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    position: "fixed",
    width: "30px",
    height: "30px",
    top: theme.spacing(6),
    left: theme.spacing(6),
    // HAPUS SEMUA STYLE DI BAWAH INI untuk menghilangkan lingkaran
    // boxShadow: "...",
    // borderRadius: "50%",
    // backgroundColor: "...",
    // "&:hover": { ... },
  },
}));

export const LogoLink = () => {
  const classes = useStyles();

  return (
    <Tooltip
      title={Resume.basics.name}
      placement="right"
      TransitionComponent={Zoom}
    >
      <Link
          href={Resume.basics.url}
          underline="none"
          className={classes.logoWrapper}
      >
        <Logo />
      </Link>
    </Tooltip>
  );
};
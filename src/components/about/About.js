/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Halo Semua!";
  const aboutme = ` Saya ${FirstName} ${LastName} seorang Full-Stack Web Developer yang berdedikasi dalam menciptakan solusi digital yang efisien, responsif, dan fungsional. Saya memiliki ketertarikan khusus pada perpaduan pengembangan web modern dengan potensi kecerdasan buatan, selalu mencari cara untuk menerjemahkan ide-ide kompleks menjadi pengalaman pengguna yang intuitif.

Pengalaman saya dalam React.js dan keahlian saya sebagai pengembang full-stack telah mengasah kemampuan saya untuk tidak hanya membangun, tetapi juga memahami arsitektur di balik sebuah sistem. Puncak dari perjalanan ini adalah kontribusi signifikan saya dalam program P2MW-Bisnis Digital

Saya percaya bahwa setiap individu, dari latar belakang apa pun, memiliki potensi tak terbatas untuk bersaing dan berkontribusi di era teknologi ini. Saat ini, saya bersemangat untuk terus berkontribusi, memperdalam keahlian saya dalam software engineering, arsitektur cloud, dan mengaplikasikan AI untuk menciptakan dampak positif yang lebih luas.`;
                 
  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Kirim pesan.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

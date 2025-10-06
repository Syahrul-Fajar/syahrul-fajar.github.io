/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import cnai from '../../assets/images/cnai.png';
import baelangan from '../../assets/images/baelangan.png';
import blog from '../../assets/images/blog.png';
import inventaris from '../../assets/images/inventaris.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'ChatNiaga AI', 
      description: `Lolos pendanaan P2MW-Bisnis DIgital dimana ini adalah sebuah marketplace untuk umkm yang berbasis AI.`,
      alter: 'ChatNiaga AI',
      image: cnai,
    },
    { 
      id: 2,
      title: 'Inventaris Klinik Pratama UNIMUS', 
      description: `Sebuah website inventaris klinik pratama UNIMUS.`,
      alter: 'Inventaris Klinik Pratama Unimus',
      image: inventaris,
    },
    { 
      id: 3,
      title: 'Baelangan', 
      description: `Sebuah website untuk jasa pembuatan undangan digital`,
      alter: 'Baelangan Project',
      image: baelangan,
    },
    { 
      id: 4,
      title: 'Blog Pribadi', 
      description: `Website Blog untuk arsip tugas-tugas kuliah`,
      alter: 'Blog Pribadi',
      image: blog,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

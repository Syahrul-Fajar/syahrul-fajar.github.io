// src/utils/skill-image.js

import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import react from '../assets/svg/react.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import supabase from '../assets/svg//supabase.svg';
import mysql from '../assets/svg/mysql.svg';
import tailwind from '../assets/svg/tailwind.svg';
import typescript from '../assets/svg//typescript.svg';
import php from '../assets/svg//php.svg';
import laravel from '../assets/svg//laravel.svg';
import git from '../assets/svg//git.svg';
import wordpress from '../assets/svg//wordpress.svg';
import figma from '../assets/svg//figma.svg';
import microsoftoffice from '../assets/svg//microsoftoffice.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'supabase':
      return supabase;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'typescript':
      return typescript;
    case 'php':
      return php;
    case 'laravel':
      return laravel;
    case 'git':
      return git;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    default:
      return null;
  }
}
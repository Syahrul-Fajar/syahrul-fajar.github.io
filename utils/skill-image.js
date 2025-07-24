import html from '../app/assets/svg/skills/html.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import git from '../app/assets/svg/skills/git.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import supabase from '../app/assets/svg/skills/supabase.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import php from '../app/assets/svg/skills/php.svg';
import laravel from '../app/assets/svg/skills/laravel.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';



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
    case 'vitejs':
      return vitejs;
    case 'php':
      return php;
    case 'laravel':
      return laravel;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    default:
      break;
  }
}
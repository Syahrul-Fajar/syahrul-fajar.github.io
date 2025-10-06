import React from "react";
import { Typography } from "@material-ui/core";

export const Today = () => {
    var date = new Date();
    var hour = date.getHours();
    var time = `${
      (hour < 4 && "pagi") ||
      (hour < 12 && "pagi") ||
      (hour < 18 && "siang") ||
      (hour < 22 && "sore") ||
      "malam"
    }`;
    var days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    var day = days[date.getDay()];

    return (
      <Typography variant="h5" component="h2" gutterBottom>
          Semoga menyenangkan {day === "Minggu" || day === "Sabtu" ? "weekend" : time}.
      </Typography>
    );
};

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer
  .prompt([
    {
      message: "type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTyError) {
      //Prompt could not be rendered in the environment
    } else {
      //something else went wrong
    }
  });

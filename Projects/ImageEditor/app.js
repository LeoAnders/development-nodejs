
const sharp = require("sharp");
const compress_images = require("compress-images");
const fs = require("fs")


let path = process.argv[2];
let width = Number(process.argv[3]);

//Resize image
function resize(inputPatch, outputPath, width){

  sharp(inputPatch).resize({width: width}).
  toFile(outputPath, (error)=>{

    if(error){
      console.log(error);
    }else{
      console.log("Image success resized");
      //After resizing the image, let's compress it
      compress(outputPath, "./compressed/")
    }
  });
};

//Compress image
function compress(pathInput, outputPath){

  compress_images(pathInput,outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");
      
      //Erased image
      fs.unlink(pathInput, (error)=>{
        if(error){
          console.log(error);
        }else{
          console.log(pathInput, "erased image");
        }
      })

  });
}

resize(path,"./temp/output_resize.jpg", width);
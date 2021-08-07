let topTextInput,bottomTextInput,imageInput,generateBtn, canvas,ctx, fontSize, fontColor;

function generateMeme(img, topText,bottomText, fontSize, fontColor){
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);

    ctx.font = fontSize + 'px Segoe UI';
    ctx.fillStyle = fontColor;

    ctx.moveTo(10, 20);
    ctx.textBaseline = "top";     
    ctx.fillText(topText, 50, 50);    

    ctx.moveTo(10, canvas.height - 20);
    ctx.textBaseline = "bottom"; 
    ctx.fillText(bottomText, 50, canvas.height-30);   

}


function init(){
topTextInput = document.getElementById('topTextInput');
bottomTextInput = document.getElementById('bottomTextInput');
fontSize = document.getElementById('fontSize');
imageInput = document.getElementById('image-input');
generateBtn = document.getElementById('btn')
canvas = document.getElementById('canvas');
fontColor = document.getElementById("fontColor");

ctx = canvas.getContext('2d');
canvas.width = canvas.height = 0;

generateBtn.addEventListener('click', function(){
    let reader = new FileReader();

    reader.addEventListener("load", function () {
        let img = new Image;
        img.src = reader.result;
        img.addEventListener("load", function() {
            generateMeme(img, topTextInput.value, bottomTextInput.value, fontSize.value, fontColor.value)
          });
      }, false);

    reader.readAsDataURL(imageInput.files[0]);

});

}
init();
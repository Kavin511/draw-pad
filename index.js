   
function launch(){
    const canvas=document.getElementById("canvas")
const ctx=canvas.getContext('2d')
let colorInput=document.querySelector("#color")
canvas.height=innerHeight;
canvas.width=innerWidth;
let select="5px";
let k=false;
let color="#000000";
colorInput.addEventListener('input',()=>{color=colorInput.value})
document.getElementById('clearCanvas').addEventListener('click',()=>{
   ctx.clearRect(0, 0, canvas.width, canvas.height);
})

// var button = document.getElementById('download');
// button.addEventListener('click', function (e) {
//     var dataURL = canvas.toDataURL('image/png');
//     button.href = dataURL;
// });


let size=10;
document.getElementById('erase').addEventListener('click',()=>{
   color="#FFFFFF"
})

document.getElementById('sketch').addEventListener('click',()=>{
   color="#000000"
})

document.getElementById('inputfont').addEventListener("keydown",input)

function input(e)
{
   if(e.keyCode===13)
   {
         size=document.getElementById('inputfont').value;
   document.getElementById('inputfont').value="";
   }

}
function draw(e)
{
   if(!k)
   return
   let sel=document.getElementById("fontval");
   function option(selec)
   {
      let opt;
      for(let i=0;i<selec.options.length;i++)
      {
         opt=sel.options[i]
         console.log(opt);
         if(opt.selected==true)
         break
      }
      return opt
   }
   let check=option(sel);
   ctx.lineWidth=size;
   console.log(ctx.lineWidth);
   ctx.lineCap=check.value;
   ctx.lineTo((e.clientX- this.offsetLeft)*this.width/this.clientWidth,(e.clientY-this.offsetTop)*this.height/this.clientHeight)
   ctx.strokeStyle=color
   ctx.stroke();
   ctx.beginPath();
   console.log((e.clientX- this.offsetLeft)*this.width/this.clientWidth,e.clientX)
   ctx.moveTo((e.clientX- this.offsetLeft)*this.width/this.clientWidth,(e.clientY-this.offsetTop)*this.height/this.clientHeight)
}
canvas.addEventListener("mousedown",()=>{ k=true;
   draw()})
canvas.addEventListener("mouseup",()=>{ k=false;
   ctx.beginPath();})


canvas.addEventListener("mousemove",draw)
   canvas.addEventListener("mouseout",()=>{k=false,ctx.beginPath()})

   canvas.addEventListener("touchstart",()=>{ k=true;
      draw()})
   canvas.addEventListener("touchend",()=>{ k=false;
      ctx.beginPath();})
      canvas.addEventListener("touchmove",(e)=>{mousePos=getTouchPos(canvas,e)
      let touch=e.touches[0]
   let mouseEvent=new mouseEvent("mouseDown",{
      clientX:touch.clientX,
      clientY:touch.clientY

   });
canvas.dispatchEvent(mouseEvent)})
canvas.addEventListener("touchend", function (e) {
   var mouseEvent = new MouseEvent("mouseup", {});
   canvas.dispatchEvent(mouseEvent);
 }, false);
 canvas.addEventListener("touchmove", function (e) {
   var touch = e.touches[0];
   var mouseEvent = new MouseEvent("mousemove", {
     clientX: touch.clientX,
     clientY: touch.clientY
   });
   canvas.dispatchEvent(mouseEvent);
 }, false);
 function getTouchPos(canvasDom, touchEvent) {
   var rect = canvasDom.getBoundingClientRect();
   return {
     x: touchEvent.touches[0].clientX - rect.left,
     y: touchEvent.touches[0].clientY - rect.top
   };
 }
   // canvas.addEventListener("mouseout",()=>{k=false,ctx.beginPath()})

}


   
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
   ctx.lineTo(e.clientX,e.clientY)
   ctx.strokeStyle=color
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(e.clientX,e.clientY)
}
canvas.addEventListener("mousedown",()=>{ k=true;
   draw()})
canvas.addEventListener("mouseup",()=>{ k=false;
   ctx.beginPath();})
canvas.addEventListener("mousemove",draw)
   canvas.addEventListener("mouseout",()=>{k=false,ctx.beginPath()})


}


/* PARTICLES */
const c=document.getElementById("particles");
const ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let p=[];
for(let i=0;i<80;i++){
p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:2,
dx:(Math.random()-.5),dy:(Math.random()-.5)});
}
function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="#00f5ff";
p.forEach(e=>{
ctx.beginPath();
ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
ctx.fill();
e.x+=e.dx;e.y+=e.dy;
});
requestAnimationFrame(draw);
}
draw();

/* GSAP */
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".reveal").forEach(el=>{
gsap.to(el,{opacity:1,y:0,duration:1,
scrollTrigger:{trigger:el,start:"top 80%"}});
});

/* PARALLAX */
document.addEventListener("mousemove",e=>{
let x=e.clientX/innerWidth;
let y=e.clientY/innerHeight;
gsap.to(".l1",{x:x*40,y:y*40});
gsap.to(".l2",{x:x*20,y:y*20});
gsap.to(".l3",{x:x*10,y:y*10});
});

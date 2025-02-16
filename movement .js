AFRAME.registerComponent("move",{

init:function(){

el=this.el
el_pos= el.getAttribute("position")
window.addEventListener("keydown",(e)=>{

if(e.key ==="ArrowRight"){

el.setAttribute("rotation",{ y:90})

}
if(e.key ==="ArrowLeft"){

el.setAttribute("rotation",{ y:270})

}
if(e.key ==="ArrowUp"){

el.setAttribute("rotation",{ y:180})
el_pos.z -=1
}
if(e.key ==="ArrowDown"){

el.setAttribute("rotation",{ y:360})
el_pos.z+=1
}

})

},
tick:function(){

camera= document.getElementById("look");
pos = camera.getAttribute("position");
el.setAttribute("position",{x:pos.x - 0,y:pos.y -5,z:pos.z -5})

}

})

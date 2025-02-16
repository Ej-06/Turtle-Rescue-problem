
AFRAME.registerComponent("game",{

    init:function(){
    
    this.el.addEventListener("collide", function(e){
    
    e.detail.target.el.remove()
    console.log("collide")
    
    })
    
    }
    
    })
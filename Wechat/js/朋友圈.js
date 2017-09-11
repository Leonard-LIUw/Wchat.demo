var dianzan=document.getElementsByClassName("d")



dianzan[0].onclick=function(){
	console.log("aaaaa")
	var pinglunkuang=document.getElementById("pinlun")
	var ping=document.createElement("div")
    ping.className="pinkunkuang"
    pinglunkuang.appendChild(ping)
    
    
    var suru=document.createElement("input")
    ping.appendChild(suru)
}
var lightbox

		var tu=document.getElementsByClassName("tu");
	
		for (var i = 0; i < tu.length; i++) {
		

		tu[i].onclick=function(){
		
		var src=this.src
	
		createLightbox(src)
	
		lightbox.onclick=function(){
		document.body.removeChild(this)
		}
  	}
    
   }
function createLightbox(src){
	var h = screen.availHeight;
	var w = screen.availWidth;
	var src;
	this.src=src;
	lightbox=document.createElement("div");
	lightbox.style.width=w+"px";
	lightbox.style.height=h+"px";
	lightbox.className="light-box"
	createImg(src)
	document.body.appendChild(lightbox);
}
function createImg(src){
	var div=document.createElement("div")
	var img=document.createElement("img")
	div.className="datu"
	img.src=src;
	img.className="tup"
	lightbox.appendChild(div);
	div.appendChild(img)
}

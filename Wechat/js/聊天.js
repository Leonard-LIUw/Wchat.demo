dianji.onclick=function(){
	wo();
	ni();
	shuru.value=""
}

function wo(){	
	var duihua=document.getElementsByClassName("duihua")
	var shuru=document.getElementById("shuru")
	var wo=document.createElement("div");
	var a1=document.createElement("div");
	var b1=document.createElement("div");
	var tu=document.createElement("img");
	var huan=document.createElement("br")
	tu.src="img/189000936.jpg";
	b1.className="b1"
	a1.className="a1"
	wo.className="aa";
	
	if(shuru.value!=""){
	duihua[0].appendChild(huan);
	duihua[0].appendChild(wo);
	wo.appendChild(a1)
	wo.appendChild(b1)
	b1.appendChild(tu)
	a1.innerHTML=shuru.value+"&nbsp;&nbsp"
	
	
	}
	
}

function ni(){
	var duihua=document.getElementsByClassName("duihua")
	
	var ni=document.createElement("div");
	var a2=document.createElement("div");
	var b2=document.createElement("div");
	var tu2=document.createElement("img");
	var huan=document.createElement("br")
	
	tu2.src="img/f0b0d3c97de292f0868bfc1b077a35d4_u=2241993030,2056452414&fm=26&gp=0.jpg"
//	tu2.className=""
	a2.className="a2";
	b2.className="b2";
	b2.innerHTML="我很忙&nbsp;&nbsp"
	ni.className="bb"
	
	if(shuru.value!=""){
	duihua[0].appendChild(huan);
	duihua[0].appendChild(ni);
	ni.appendChild(a2)
	ni.appendChild(b2)
	a2.appendChild(tu2)
	}
}

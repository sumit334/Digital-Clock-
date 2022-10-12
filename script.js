//digital clock
const findTime = () => {
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	let am_pm="AM";
	//let d = time.getDate();
	if(h==0){
		h=12;
	}
	if(h>12){
		h=h-12;
		am_pm="PM";
	}
	h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
	let currTime=h + ":" + m + ":" + s+" "+am_pm;
	document.getElementById('clock').innerHTML=currTime;
}

setInterval(findTime, 1000);

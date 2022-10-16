//digital clock
const findClock = () => {
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
	
	const today=new Date();
    const CurrentDay=today.getDay();
    const options={
        weekday:"short",
        day:"numeric",
        month:"short",
		year:"numeric"
    
    };
    
    const day=today.toLocaleDateString("en-US",options)
	
	document.getElementById('clock').innerHTML=currTime+" "+day;
}


setInterval(findClock, 1000);

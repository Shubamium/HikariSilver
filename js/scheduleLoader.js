const scheduleEl = document.getElementById('schedule-img');


const apiKey = "64beb3e586d8c55c90ed91fa";
const url = `https://hikarisilver-1a45.restdb.io/rest/schedule/64bebad14c98ab78000004ab?apikey=${apiKey}`;

let schedLink = "assets/replaceable/schedules.webp";
fetch(url)
	.then((res)=>res.json())
	.then((data)=>{
		schedLink = data.link;
		scheduleEl.src = schedLink;
		console.log(schedLink);
	})


scheduleEl.setAttribute('src',schedLink)
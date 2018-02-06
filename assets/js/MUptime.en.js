/* 
By Mayomi Putri
miya@teknik.io
Under MIT License
Use for @mifansindonesia
Life at 05 November 2015 @ WIT
https://miyaku.github.io
*/
function show_date_time(){window.setTimeout("show_date_time()",1e3);var BirthDay=new Date("2015/11/05"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=Math.floor(e_hrsold),e_minsold=60*(e_hrsold-hrsold),minsold=Math.floor(60*(e_hrsold-hrsold)),seconds=Math.floor(60*(e_minsold-minsold));MUptime.innerHTML=daysold+"<sup>d</sup> "+hrsold+"<sup>h</sup> "+minsold+"<sup>m</sup> "+seconds+"<sup>s";}
show_date_time();

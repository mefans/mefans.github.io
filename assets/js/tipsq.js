/**
@ Scripts : TipsQ.js
@ Descriptions : Tips For Mifans
@ Auth : Miya - http://miy.is.my
**/
document.write("<div id='div_QMiya'></div>");	
	var QMiya = new Array();
QMiya[0] = "Jangan menertawakan impian orang lain <i>mimin</i>";
QMiya[1] = "Ajarkan walau satu ayat";
QMiya[2] = "Jangan merasa bangga dengan apa yang kamu bisa dan punyai, sesungguhnya di atas langit masih ada langit";
QMiya[3] = "Perkara yang paling sedikit di dunia ini ialah mendengar dan memahami apa yang anda dengar";

  var mf = QMiya.length;
    var whichQMiya=Math.round(Math.random()*(mf-1));
function showQMiya(){document.write(QMiya[whichQMiya]);}
showQMiya();

const start = new Date();

// 初期化
let day = 0;
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let datet = 0;


function disp(){
	
	now = new Date();
	
  //文字列を整数に変換する
	datet = parseInt((now.getTime() - start.getTime()) / 1000);
	day = parseInt(datet / 86400);
	hour = parseInt(datet / 3600);
	min = parseInt((datet / 60) % 60);
	sec = datet % 60;
	

  // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
	if(hour < 10) { hour = "0" + hour; }
	if(min < 10) { min = "0" + min; }
	if(sec < 10) { sec = "0" + sec; }
	
  // テキストフィールドにデータを渡す処理
	document.form1.field1.value = hour;
	document.form1.field2.value = min;
	document.form1.field3.value = sec;
	
	// 毎秒実行
	setTimeout("disp()", 1000); 
}



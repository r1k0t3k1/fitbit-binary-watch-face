// 時刻文字列の指定された桁を二進数に変換して返す
export function toBinary(time,digit){
  let tmp = parseInt(time.substr(digit-1,1))
  return zeroPadding(parseInt(tmp.toString(2)),4)
}

export function zeroPadding(num,length){
    return ( Array(length).join('0') + num ).slice( -length );
}

//曜日のテキストセット
//getDayにより0~6で曜日を取得できるためそれぞれを文字に対応
export function getDay(val) {
  switch(val){
    case 0:
      return "Sun";
    case 1: 
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
}
// 時刻文字列の指定された桁を二進数に変換して返す
export function toBinary(time,digit){
  let tmp = parseInt(time.substr(digit-1,1))
  return zeroPadding(parseInt(tmp.toString(2)),4)
}

export function zeroPadding(num,length){
    return ( Array(length).join('0') + num ).slice( -length );
}
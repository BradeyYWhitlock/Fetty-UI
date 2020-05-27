import Color from 'color';

export function lightenDarkenColor(hex = "#FFFFFF", amt: number) {
  let  color = Color(hex)
  if(amt){
    color = amt > 0 ? color.lighten(Math.abs(amt)) : color.darken(Math.abs(amt))
  }
  return color.hex();
}
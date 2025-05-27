export const Button = ({children, width, height, backgroundColor, color}) => {
  return(
    <button
    style={{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      color: color
    }}
    >{children}</button>
  );
}

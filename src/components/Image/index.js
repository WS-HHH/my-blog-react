export default function Image(props) {
  const { url = '', width, height } = props;

  return (
    <img src={url} alt="" width={width} height={height}></img>
  );
}

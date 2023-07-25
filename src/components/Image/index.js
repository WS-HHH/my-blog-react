export default function Image(props) {
  const { url = '', width, height } = props;
  return (
    <img src={url} width={width} height={height}></img>
  );
}

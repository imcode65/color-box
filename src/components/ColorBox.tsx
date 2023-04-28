import "./ColorBox.css";
export interface IColorBox {
  className?: string;
  color: string;
  text: string;
  onClick: () => void;
}

const ColorBox: React.FC<IColorBox> = (props) => {
  return (
    <div
      className={`colorBox ${props.className}`}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </div>
  );
};

export default ColorBox;

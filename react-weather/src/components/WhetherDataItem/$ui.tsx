import './styles.css';

export default function WetherDataItem(props: {
  value?: string;
  title?: string;
  unit?: string;
}) {
  return (
    <div className="data-item">
      {props.title
        ? `${props.title[0].toUpperCase()}${props.title.substring(1)}`
        : null}
      {props.value ? `: ${props.value}` : null} {props.unit ? props.unit : null}
    </div>
  );
}

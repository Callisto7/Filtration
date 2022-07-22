import './Item.css';

export default function Article(props) {
  return (
    <div className="Item">
      <h3><a href="#0">{props.title}</a></h3>
      <p className="Item-views">Прочтений: {props.views}</p>
    </div>
  );
}
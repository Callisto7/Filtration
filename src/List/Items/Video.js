import './Item.css';

export default function Video(props) {
  return (
    <div className="Item">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={props.title}
      />
      <p className="Item-views">Просмотров: {props.views}</p>
    </div>
  );
}
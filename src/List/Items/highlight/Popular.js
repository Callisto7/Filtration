import './Highlight.css';

export default function Popular(props) {
  return (
    <div className="Highlight Highlight-popular">
      <span className="Highlight-label">Popular!</span>
      {props.children}
    </div>
  )
};
import './Highlight.css';

export default function New(props) {
  return (
    <div className="Highlight Highlight-new">
      <span className="Highlight-label">New!</span>
      {props.children}
    </div>
  )
};
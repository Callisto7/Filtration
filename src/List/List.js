import Video from './Items/Video';
import Article from './Items/Article';
import withHighlight from '../hocs/withHighlight';

const VideoWithHighlight = withHighlight(Video);
const ArticleWithHighlight = withHighlight(Article);

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithHighlight key={item.id} {...item} />
        );
      case 'article':
        return (
          <ArticleWithHighlight key={item.id} {...item} />
        );
      default:
        return null;
    }
  });
}
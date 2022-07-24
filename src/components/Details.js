import React, {useEffect, useState} from 'react'
import '../styles/Details.css'
import DetailsImg from './DetailsImg';
import DetailsList from './DetailsList';


export default function Details(props) {
  const {id, name, get} = props;
  const initialState = {
    id: '',
    name: '',
    avatar: '',
    details: {},
  };

  const [content, setContent] = useState(initialState);

  useEffect(() => {
    setContent(initialState);

    get(`${id}.json`)
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  
  return (
    <div id={id} className='Details'>
      <DetailsImg src={content.avatar} alt={name} />
      <div className="Details-body">
        <h4 className="Details-title">{name}</h4>
        <DetailsList details={content.details} />
      </div>
    </div>
  )
}

import React from 'react'
import className from 'classnames'
import Loader from '../Loader';
import '../styles/List.css'

export default function List(props) {
    const {onItemClick, loading, children} = props;

    const listClassName = className('list', {
        'disabled' : loading,
    })

  return (
    <div className="list-content">
        {loading && <Loader />}

        <ul className={listClassName}>
            {children.map((child) => {
                return (
                    <li key={child.id} id={child.id} className="list_item">
                        <a
                            href="#0"
                            className='list-item-link'
                            onClick={loading ? undefined : onItemClick}
                            >
                                {child.name}
                        </a> 
                    </li>
                );
            })}
        </ul>
    </div>
  );
}
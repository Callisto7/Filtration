import React from 'react'

function IconSwitch({ icon, onSwitch }) {

    const style = {
        fontSize: '4vh'
    }

    return (
        <i className="material-icons">
            <a className='switch-view' href="#" style={style} onClick={() => onSwitch(icon)}>
                {icon}
            </a>
        </i>
    );
}


export default IconSwitch;
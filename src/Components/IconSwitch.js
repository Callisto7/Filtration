import React from 'react'

function IconSwitch(props) {
    const Icon = (props) => {
        let {name, size} = props;
        return (
            <i className="material-icons" style={{fontSize: size}}>{name}</i>
        );
    }

    let {icon, onSwitch} = props;
    return (
        <div className="switch-view" onClick={onSwitch}>
            <Icon size={42} name={icon}/>
        </div>
    );
}


export default IconSwitch;
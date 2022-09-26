import React from 'react';
import cl from './MyModal.module.css'

const myModal = ({ children, visible, setVisilbe }) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisilbe(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div >
    );
};

export default myModal;
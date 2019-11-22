import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

//styles
import './infoBox.scss';


const InfoBox = ({ info }) => {
    return (
        <div className={'card'}>
            <div className={'cardHeader'}>
                <h2>{info.header}</h2>
                <span className={classNames('infoBadge', info.stemp.type)}>
                    <p>{info.stemp.text}</p>
                </span>
            </div>
            <div className={'cardContent'}>
                <div className={'header'}>
                    <p>{info.content.amount}</p>
                </div>
                <div className={'footer'}>
                    <span className={'text'}>
                        {info.content.footer.text}
                    </span>
                    <span className={classNames('prec', info.stemp.type)}>
                        {info.content.footer.prec}
                        <span>
                            <FontAwesomeIcon icon={info.content.footer.icon} />
                        </span>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default InfoBox;
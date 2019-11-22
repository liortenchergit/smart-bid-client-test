import React from 'react';
//styles
import './table.scss';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Table = ({ name, headers, data }) => {
    return (
        <div className={'content'}>
            <ul className={'header'}>
                {headers.map((he, i) => {
                    return <li key={i}>{he.text}</li>
                })}
                {/* <li>Status</li>
                 <li>Date</li>
                 <li>User</li>
                 <li> Value</li> */}
            </ul>
            {data.map((d, i) => {
                return <ul key={i} className={'data'}>
                    <li>
                        {d.info1}
                    </li>
                    <li>
                        {name !== 'world' &&
                            <span className={'clock'}>
                                <FontAwesomeIcon icon={faClock} />
                            </span>}
                        {d.info2}
                    </li>
                    <li>
                        {d.info3}
                    </li>
                    <li className={classNames('value', {
                        'empty': name === 'world'
                    })}>
                        {d.info4}
                        {name !== 'world' &&
                            <span className={'arrow'}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </span>}

                    </li>
                </ul>
            })}


        </div>
    );

};

export default Table;
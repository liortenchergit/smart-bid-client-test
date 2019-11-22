import React from 'react';
import classNames from 'classnames';
import Table from '../table';
//
import './projectList.scss';
//


const ProjectList = () => {
    const headers = [
        { text: 'Status' },
        { text: 'Date' },
        { text: 'User' },
        { text: 'Value' }
    ];
    const datas = [
        {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        },
        {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        },
        {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        }
        , {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        }
        , {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        }
        , {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        }
        , {
            info1: 'Pending',
            info2: '11:20PM',
            info3: 'Monica',
            info4: '66%'
        }
    ];
    return (
        <div className={'list'}>
            <div className={'listHeader'}>
                <h2>User project list</h2>
            </div>
            <div className={'content'}>
                <Table headers={headers} data={datas} />
                {/* <ul className={'header'}>
                    <li>Status</li>
                    <li>Date</li>
                    <li>User</li>
                    <li> Value</li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul>
                <ul className={'data'}>
                    <li>
                        Pending
                    </li>
                    <li>
                        <span className={'clock'}>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        11:20PM
                    </li>
                    <li>
                        Monica
                    </li>
                    <li className={'value'}>
                        66%
                        <span className={'arrow'}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default ProjectList;
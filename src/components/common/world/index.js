import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTran } from '../../../redux/selectors';
//
import Table from '../table';
import Map from '../map';
import ReactTooltip from "react-tooltip";
//styles
import './world.scss';

const World = () => {
    const [content, setContent] = useState("");
    const datas = useSelector(state => getTran(state));
    const headers = [
        { text: 'No.' },
        { text: 'Transaction' },
        { text: 'Date' },
        { text: 'Amount' }
    ];
    // const datas = [
    //     {
    //         info1: '1',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     },
    //     {
    //         info1: '2',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     },
    //     {
    //         info1: '3',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     }
    //     , {
    //         info1: '4',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     }
    //     , {
    //         info1: '5',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     }
    //     , {
    //         info1: '6',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     }
    //     , {
    //         info1: '7',
    //         info2: 'Security doors',
    //         info3: '16 July 2014',
    //         info4: '483$'
    //     }
    // ];
    return (
        <div className={'world'}>
            <div className={'worldHeader'}>
                <h2>Transactions worldwide</h2>
            </div>
            <div className={'contentWrapper'}>

                <div className={'leftSide'}>
                    {datas && <Table name={'world'} headers={headers} data={datas} />}
                </div>
                <div className={'rightSide'}>
                    {/* <img src={process.env.PUBLIC_URL + '/assets/world.png'} alt="" /> */}
                    <Map setTooltipContent={setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
            </div>
        </div>
    );
};

export default World
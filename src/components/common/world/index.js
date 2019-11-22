import React from 'react';
//
import Table from '../table';
//styles
import './world.scss';

const World = () => {
    const headers = [
        { text: 'No.' },
        { text: 'Transaction' },
        { text: 'Date' },
        { text: 'Amount' }
    ];
    const datas = [
        {
            info1: '1',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        },
        {
            info1: '2',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        },
        {
            info1: '3',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        }
        , {
            info1: '4',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        }
        , {
            info1: '5',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        }
        , {
            info1: '6',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        }
        , {
            info1: '7',
            info2: 'Security doors',
            info3: '16 July 2014',
            info4: '483$'
        }
    ];
    return (
        <div className={'world'}>
            <div className={'worldHeader'}>
                <h2>Transactions worldwide</h2>
            </div>
            <div className={'contentWrapper'}>

                <div className={'leftSide'}>
                    <Table name={'world'} headers={headers} data={datas} />
                </div>
                <div className={'rightSide'}>
                    <img src={process.env.PUBLIC_URL + '/assets/world.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default World
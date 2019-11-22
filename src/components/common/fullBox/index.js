import React from 'react';
//styles
import './fullBox.scss';
//components
import ProgressBar from '../progressBar';

const FullBox = () => {
    return (
        <div className={'fullBox'}>
            <div className={'boxHeader'}>
                <h2>Orders</h2>
                {/* <span className={classNames('infoBadge', info.stemp.type)}>
                    <p>{info.stemp.text}</p>
                </span> */}
            </div>
            <div className={'content'}>
                <div className={'graph'}>
                    <img src={process.env.PUBLIC_URL + '/assets/bars.png'} alt="" />
                </div>
                <div className={'bars'}>
                    <div className={'bar'}>
                        <h2>2,346</h2>
                        <div className={'barContent'}>
                            <p>Total orders in period</p>
                            <p className={'prec'}>40%</p>
                        </div>
                        <ProgressBar total={10000} current={2346} />
                    </div>
                    <div className={'bar'}>
                        <h2>4,422</h2>
                        <div className={'barContent'}>
                            <p>Orders in last month</p>
                            <p className={'prec'}>40%</p>
                        </div>

                        <ProgressBar total={10000} current={4422} />
                    </div>
                    <div className={'bar'}>
                        <h2>9,180</h2>
                        <div className={'barContent'}>
                            <p>Monthly income from orders</p>
                            <p className={'prec'}>40%</p>
                        </div>
                        <ProgressBar total={10000} current={9180} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FullBox;
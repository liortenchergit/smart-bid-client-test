import React from 'react';
import PropTypes from 'prop-types';
//redux
import { useSelector } from 'react-redux';
//components
import InfoCard from '../common/infoBox';
import FullBox from '../common/fullBox';
import Messages from '../common/messages';
import ProjectList from '../common/projectList';
import TodoList from '../common/todoList';
import World from '../common/world';
//styles
import './main.scss';
//
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    const infos = [
        {
            header: 'Income',
            stemp: {
                type: 'regular',
                text: 'Monthly'
            },
            content: {
                amount: '886,200',
                footer: {
                    text: 'Total income',
                    prec: '98%',
                    icon: faArrowUp
                }
            }
        },
        {
            header: 'Orders',
            stemp: {
                type: 'accept',
                text: 'Annual'
            },
            content: {
                amount: '275,800',
                footer: {
                    text: 'New orders',
                    prec: '20%',
                    icon: faArrowUp
                }
            }
        },
        {
            header: 'Visits',
            stemp: {
                type: 'info',
                text: 'Today'
            },
            content: {
                amount: '106,120',
                footer: {
                    text: 'New visits',
                    prec: '44%',
                    icon: faArrowUp
                }
            }
        },
        {
            header: 'User activity',
            stemp: {
                type: 'warning',
                text: 'Low value'
            },
            content: {
                amount: '80,600',
                footer: {
                    text: 'In first month',
                    prec: '38%',
                    icon: faArrowDown
                }
            }
        }
    ]
    const data = useSelector(state => state.test);
    return (
        <div className={'dashboard'}>
            <div className={'cards'}>
                <InfoCard info={infos[0]} />
                <InfoCard info={infos[1]} />
                <InfoCard info={infos[2]} />
                <InfoCard info={infos[3]} />
            </div>
            <FullBox />
            <div className={'bottomBoxes'}>
                <div className={'left'}>
                    <Messages />
                </div>
                <div className={'right'}>
                    <div className={'projectList'}>
                        <ProjectList />
                    </div>
                    <div className={'todoList'}>
                        <TodoList />

                    </div>
                    <div className={'worldwide'}>
                        <World />
                    </div>
                </div>
            </div>
            {/* {data}
            sdlfjnds sldkmfs sloiweuf sidpjoisdjf */}
        </div>
    );
};

Main.propTypes = {
    title: PropTypes.string
};
Main.defaultProps = {

}

export default Main;
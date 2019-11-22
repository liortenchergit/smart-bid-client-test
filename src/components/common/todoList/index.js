import React from 'react';
//styles
import './todoList.scss';


const TodoList = () => {
    return (
        <div className={'todo'}>
            <div className={'todoHeader'}>
                <h2>User project list</h2>
            </div>
            <div className={'content'}>
                <ul>
                    <li className={'selected'}>
                        Buy a milk
                        </li>
                    <li>Buy a milk</li>
                    <li className={'selected'}>Buy a milk</li>
                    <li>Buy a milk</li>
                    <li>Buy a milk</li>
                    <li className={'selected'}>Buy a milk</li>
                    <li className={'selected'}>Buy a milk</li>
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
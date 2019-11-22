import React from 'react';
//styles
import './messages.scss';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Messages = () => {
    return (
        <div className={'messages'}>
            <div className={'messagesHeader'}>
                <h2>Messages</h2>
            </div>
            <ul>
                <li className={'main'}>
                    <div className={'header'}>

                        <p>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            New Messages</p>
                    </div>
                    <p className={'details'}>You have 22 messages and 16 waiting in draft folder.</p>
                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span className={'new'}>1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span >1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span >1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span >1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span >1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span>1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
                <li className={'regular'}>
                    <div className={'header'}>
                        <h2>Monica Smith</h2>
                        <span>1 min</span>
                    </div>
                    <div className={'content'}>
                        <p> sldkfm sldkfm slkdmf lkmsdf oiwrfje oiwmef</p>
                    </div>
                    <div className={'footer'}>
                        <p>Today 5:60 PM - 12.06.2014</p>
                    </div>

                </li>
            </ul>
        </div>
    );
};

export default Messages
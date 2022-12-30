import React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import {MemberListItem} from 'components/members';
import MemberThumb from 'public/images/placeholders/petra_detersova.png';


const Members = () => (
    <>
        <Head>
            <title>Narativ | Členové Narativu</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container mt-5">
                <h1>Členové Narativu</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                    <div className="col">
                        <MemberListItem id="1" title="Petra Detersová" image={MemberThumb}/>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Members;

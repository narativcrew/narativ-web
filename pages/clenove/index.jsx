import React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';
import MemberThumb1 from 'public/images/placeholders/petra_detersova.png';
import MemberThumb2 from 'public/images/placeholders/pavel_nepustil.jpeg';
import MemberThumb3 from 'public/images/placeholders/tatiana_dumbrava.jpeg';
import MemberThumb4 from 'public/images/placeholders/jakub_cerny.jpeg';
import MemberThumb5 from 'public/images/placeholders/lucia_ukropova.jpeg';
import MemberThumb6 from 'public/images/placeholders/barbora_petrankova.jpeg';


const Members = () => (
    <>
        <Head>
            <title>Narativ | Členové Narativu</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container my-5 text-center">
                <h1>Členové Narativu</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Petra Detersová"
                            desc={
                                <p>
                                    Členkou Narativu som sa stala s kamerou v ruke a doteraz v ňom plním hlavne túto
                                    rolu. Kdesi na začiatku boli diskusné Meganarativy
                                </p>
                            }
                            image={MemberThumb1}
                        />
                    </div>
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Tatiana Dumbrava"
                            desc={
                                <p>
                                    Pracuji jako lektorka, koučka, a školní psycholožka. Ve své práci využívám
                                    dialogické přístupy, koučink zaměřený na řešení a aktuální vědecká data.
                                </p>
                            }
                            image={MemberThumb3}
                        />
                    </div>
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Pavel Nepustil"
                            desc={
                                <p>
                                    Psycholog, konzultant a supervizor se specifickým zájmem o oblast užívání drog,
                                    závislostí, duševního zdraví a zotavení.
                                </p>
                            }
                            image={MemberThumb2}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Mgr. Jakub Černý"
                            desc={
                                <p>
                                    Jakub Cerny is a psychologist, a social worker, a researcher and an activist. He is
                                    one of the founders of the Narativ fellowship, a leading platform for collaborative
                                    and dialogical practices in the Czech Republic.
                                </p>
                            }
                            image={MemberThumb4}
                        />
                    </div>
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Lucia Ukropová"
                            desc={
                                <p>
                                    Psycholožka a psychoterapeutka působící v multidisciplinárním terénním týmu v
                                    oblasti duševního zdraví.
                                </p>
                            }
                            image={MemberThumb5}
                        />
                    </div>
                    <div className="col">
                        <MemberListItem
                            id="1"
                            title="Mgr. Barbora Petránková"
                            desc={
                                <p>
                                    S Narativem jsem se setkala v roce 2010, v průběhu studia psychologie na FSS MU.
                                    Jeden z mých spolužáků, Jakub Černý, mě pozval na první „offline setkání“
                                    vznikajícího společenství. Tak jsem postupně poznala i Katku, Pavla a Jitku.
                                </p>
                            }
                            image={MemberThumb6}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Members;

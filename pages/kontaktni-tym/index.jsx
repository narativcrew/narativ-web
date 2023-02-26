import React from 'react';
import { createClient } from '../../prismicio';
import * as prismic from "@prismicio/client"
import Head from 'next/head';
import cx from 'classnames';
import FeaturedBlock from 'components/FeaturedBlock';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';

const ContactTeam = ({ members }) => (
    <>
        <Head>
            <title>Narativ | Kontaktní tým</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5 py-5 text-center">
                    <h1>O nás</h1>
                    <p>
                        Narativ je vztahová či sociální platforma se záměrem šírit postmoderní praxi v České republice a
                        na Slovensku.
                    </p>
                </div>
            </div>
        </div>

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container my-5 text-center">
                <h1>Kontaktní tým</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {members.length > 0 && (
                        <>
                            {members.map((member) => (
                                <MemberListItem
                                    key={member.uid}
                                    id={member.uid}
                                    name={member.data.name}
                                    desc={member.data.description}
                                    image={member.data.profile_photo.url}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
);

export default ContactTeam;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const members = await client.getAllByType('member', {
        predicates : [
            prismic.predicate.at( "document.tags", ["kontaktni_tym"])
        ]
    });
    console.log(members);
    return {
        props: { members },
    };
}

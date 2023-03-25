import React from 'react';
import PropTypes from 'prop-types';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import cx from 'classnames';
// import FeaturedBlock from 'components/FeaturedBlock';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '../../prismicio';

const ContactTeam = ({ topTitle, members }) => (
    <>
        <Head>
            <title>Narativ | Komunitní tým</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5 py-5 text-center">
                    <h1>{topTitle.data.title}</h1>
                    {topTitle?.data.description && <PrismicRichText field={topTitle.data.description} />}
                </div>
            </div>
        </div>

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container my-5 text-center">
                <h1>Komunitní tým</h1>
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

ContactTeam.propTypes = {
    topTitle: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                name: PropTypes.arrayOf(PropTypes.object).isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                profile_photo: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default ContactTeam;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const topTitle = await client.getSingle('community_team_top_title');
    const members = await client.getAllByType('member', {
        predicates: [prismic.predicate.at('document.tags', ['komunitni_tym'])],
    });
    return {
        props: { topTitle, members },
    };
}

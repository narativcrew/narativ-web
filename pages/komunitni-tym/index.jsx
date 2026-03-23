import React from 'react';
import PropTypes from 'prop-types';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { BlockButton } from 'components/Buttons';

import { createClient } from '../../prismicio';
import HeaderBanner from '../../components/HeaderBanner';

const CommunityTeam = ({ topTitle, bottomText, headerImage, members }) => (
    <>
        <Head>
            <title>Narativ | Komunitní tým</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>

        <HeaderBanner title={topTitle.data.title} image={headerImage.data.image.url} />

        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4 mb-2 py-4">
                    {topTitle?.data.description && <PrismicRichText field={topTitle.data.description} />}
                    <div className="mt-5">
                        <Link href="#more-info">
                            <BlockButton>Jak funguje spolupráce s komunitním týmem</BlockButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container mb-5">
                <h1>Komunitní tým</h1>
            </div>
            <div className="container">
                <div className="row">
                    {members.length > 0 && (
                        <>
                            {members.map((member) => (
                                <MemberListItem
                                    key={member.uid}
                                    id={member.uid}
                                    name={member.data.name}
                                    desc={member.data.description}
                                    image={member.data.profile_photo.url}
                                    phoneNumber={member.data.phone_number}
                                    email={member.data.email}
                                    webpage={member.data.webpage}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>

        <div id="more-info" className={cx(styles.scrollMargin, 'container')}>
            <div className="row justify-content-center">
                <div className="col-md-12 py-5 text-center">
                    <h1 className="mb-5">{bottomText.data.title}</h1>
                    {bottomText?.data.description && <PrismicRichText field={bottomText.data.description} />}
                </div>
            </div>
        </div>
    </>
);

CommunityTeam.propTypes = {
    topTitle: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    bottomText: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                profile_photo: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default CommunityTeam;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const topTitle = await client.getSingle('community_team_top_title');
    const bottomText = await client.getSingle('community_team_bottom_text');

    const members = await client.getAllByType('member', {
        predicates: [prismic.predicate.at('document.tags', ['komunitni_tym'])],
        orderings: [{ field: 'my.member.order', direction: 'asc' }],
    });
    const headerImage = await client.getSingle('community_team_header_image');

    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');

    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };

    return {
        props: { topTitle, bottomText, headerImage, members, footer },
    };
}

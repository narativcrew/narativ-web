import React from 'react';
import PropTypes from 'prop-types';
import * as prismic from '@prismicio/client';
import Head from 'next/head';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';
import FeaturedImage from 'components/FeaturedImage';

import { createClient } from '../../prismicio';

const Members = ({ members, headerImage }) => (
    <>
        <Head>
            <title>Narativ | Členové Narativu</title>
            <meta property="og:title" content="Narativ | Členové Narativu" key="title" />
        </Head>

        <FeaturedImage image={headerImage.data.image.url} />

        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container my-5 text-center">
                <h1>Členové Narativu</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {members.length > 0 && (
                        <>
                            {members.map((member) => (
                                <MemberListItem
                                    id={member.uid}
                                    name={member.data.name}
                                    desc={member.data.description}
                                    image={member.data.profile_photo.url}
                                    phoneNumber={member.data.phoneNumber}
                                    email={member.data.email}
                                    webpage={member.data.we}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
);

Members.propTypes = {
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
        }).isRequired
    ).isRequired,
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default Members;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const members = await client.getAllByType('member', {
        predicates: [prismic.predicate.at('document.tags', ['narativ_tym'])],
        orderings: [{ field: 'document.first_publication_date', direction: 'asc' }],
    });
    const headerImage = await client.getSingle('members_header_image');

    const topTitle = await client.getSingle('members_top_title');

    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');

    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };

    return {
        props: { topTitle, members, headerImage, footer },
    };
}

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import cx from 'classnames';
import FeaturedBlock from 'components/FeaturedBlock';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';

import { createClient } from '../../prismicio';

const Members = ({ members, banner }) => (
    <>
        <Head>
            <title>Narativ | Členové Narativu</title>
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

        <FeaturedBlock text={banner.data.description} image={banner.data.image.url} background="#FF794D" />

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

Members.propTypes = {
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
        }).isRequired
    ).isRequired,
    banner: PropTypes.shape({
        data: PropTypes.shape({
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default Members;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const members = await client.getAllByType('member');
    const banner = await client.getSingle('members_top_banner');
    return {
        props: { members, banner },
    };
}

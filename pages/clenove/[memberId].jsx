import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import FeaturedBlock from 'components/FeaturedBlock';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '../../prismicio';

const MemberDetail = ({ member }) => (
    <>
        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container mt-5 text-center">
                <h1>{member.data.name}</h1>
            </div>
        </div>
        <FeaturedBlock text={member.data.motto} title={member.data.name} image={member.data.profile_photo.url} />
        <div className={cx(styles.memberDetailContactsBox, 'text-center py-5')}>
            <h1>Kontakty</h1>
            <span>
                <i className="bi bi-phone" />
                {member.data.phone_number}
            </span>
            <span>
                <i className="bi bi-envelope" />
                {member.data.email}
            </span>
            <span>
                <i className="bi bi-globe" />
                {member.data.webpage}
            </span>
        </div>
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <PrismicRichText field={member.data.description} />
                    </div>
                </div>
            </div>
        </div>
    </>
);

MemberDetail.propTypes = {
    member: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        data: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            motto: PropTypes.string.isRequired,
            profile_photo: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
            phone_number: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            webpage: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default MemberDetail;

// This doesn't seem to be called even though it's done the same way as documented
// https://nextjs.org/docs/basic-features/pages
export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    // console.log(`memberId: ${params.memberId}`);
    const member = await client.getByUID('member', params.memberId);
    // console.log(member);
    return {
        props: {
            member,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const members = await client.getAllByType('member');

    const paths = members.map((member) => ({
        params: { memberId: member.uid },
    }));

    // console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

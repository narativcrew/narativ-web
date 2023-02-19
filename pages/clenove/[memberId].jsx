import React from 'react';
import cx from 'classnames';
import styles from 'components/members/members.module.css';
import FeaturedBlock from 'components/FeaturedBlock';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '../../prismicio';
import * as prismicH from '@prismicio/helpers';

const MemberDetail = ({ member }) => (
    <>
        <div className={cx(styles.membersBgBox, 'py-5')}>
            <div className="container mt-5 text-center">
                <h1><PrismicRichText field={member.data.name}/></h1>
            </div>
        </div>
        <FeaturedBlock
            text="Členkou Narativu som sa stala s kamerou v ruke a doteraz v ňom plním hlavne túto rolu."
            title="Petra Detersová"
            image={member.data.profile_photo.url}
        />
        <div className={cx(styles.memberDetailContactsBox, 'text-center py-5')}>
            <h1>Kontakty</h1>
            <span>
                <i className="bi bi-phone" />
                <PrismicRichText field={member.data.phone_number} />
            </span>
            <span>
                <i className="bi bi-envelope" />
                <PrismicRichText field={member.data.email}/>
            </span>
            <span>
                <i className="bi bi-globe" />
                <PrismicRichText field={member.data.webpage}/>
            </span>
        </div>
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <PrismicRichText field={member.data.description}/>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default MemberDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });

    const member = await client.getByUID('member', params.uid);

    return {
        props: {
            member,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const members = await client.getAllByType('member');

    return {
        paths: members.map((member) => prismicH.asLink(member)),
        fallback: false,
    };
}
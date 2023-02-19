import React from 'react';
import { createClient } from "../../prismicio";
import Head from 'next/head';
import cx from 'classnames';
import FeaturedBlock from 'components/FeaturedBlock';
import styles from 'components/members/members.module.css';
import { MemberListItem } from 'components/members';
import MemberThumb1 from 'public/images/placeholders/petra.png';
import MemberThumb2 from 'public/images/placeholders/pavel_nepustil.jpeg';
import MemberThumb3 from 'public/images/placeholders/tatiana_dumbrava.jpeg';
import MemberThumb4 from 'public/images/placeholders/jakub_cerny.jpeg';
import MemberThumb5 from 'public/images/placeholders/lucia_ukropova.jpeg';
import MemberThumb6 from 'public/images/placeholders/barbora_petrankova.jpeg';
import AboutFeaturedImage from 'public/images/placeholders/about-featured.jpg';

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })
  
    const members = await client.getAllByType('member')
  
    return {
      props: { members }, 
    }
  }

const Members = ({members}) => (
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

        <FeaturedBlock
            text="„To, co je příliš obvyklé, nezpůsobí změnu. Co je příliš neobvyklé, také nezpůsobí změnu. Změnu způsobí jen to, co je přiměřeně neobvyklé.“"
            title="Pavel Nepustil"
            subtitle="St. Celina, Delaware"
            image={AboutFeaturedImage}
            background="#FF794D"
        />

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
                            />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
);

export default Members;

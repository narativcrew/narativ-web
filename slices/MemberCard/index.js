import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { CardButton } from 'components/Buttons';

/**
 * @typedef {import("@prismicio/client").Content.MemberDetailSlice} MemberDetailSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MemberDetailSlice>} MemberDetailProps
 * @param { MemberDetailProps }
 */
const MemberDetail = ({ slice }) => (
    <div className="col-lg-4 mb-4">
        <div className="memberCard">
            <div className="memberCardImg" style={{ backgroundImage: `url(${slice.primary.profile_picture.url})` }} />
            <div className="text-start memberCardContent">
                <h5 className="memberCardTitle">
                    <PrismicRichText field={slice.primary.member_name} />
                </h5>
                <div className="memberCardText">
<PrismicRichText field={slice.primary.short_description} />
                </div>
                <div className="memberCardButtonWrapper">
                    <Link href={`/clenove/${slice.uid}`}>
                        <CardButton>Vice</CardButton>
                    </Link>
                </div>
            </div>
        </div>
        <style jsx>{`
            .membersBgBox {
                background: #f9fafb;
            }

            .memberCard {
                text-align: center;
                border: 1px solid #e1ecf0;
                border-radius: 10px;
                background-color: #ffffff;
                /* margin-bottom: 3rem; */
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .memberCardButtonWrapper {
                margin-top: auto;
            }

            .memberCardImg {
                width: 100%;
                min-height: 300px;
                background: center no-repeat;
                background-size: cover;
            }

            .memberCardContent {
                padding: 2rem;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .memberCardText {
                line-height: 30px;
                opacity: 0.8;
            }
        `}</style>
    </div>
);

export default MemberDetail;

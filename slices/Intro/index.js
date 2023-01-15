import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.IntroSlice} IntroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroSlice>} IntroProps
 * @param { IntroProps }
 */
const Intro = ({ slice }) => (
    <div className="content">
        <h2>
            {slice.primary.title ? (
                <PrismicRichText field={slice.primary.title} />
            ) : (
                <span>Template slice, update me!</span>
            )}
        </h2>
        {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
        ) : (
            <p>start by editing this slice from inside Slice Machine!</p>
        )}
        <style jsx>{`
            .title {
                color: #8592e0;
            }
        `}</style>
    </div>
);

export default Intro;

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import imagesLoaded from 'imagesloaded';
import cx from 'classnames';
import Image from 'next/image';
import styles from 'components/photogallery/photogallery.module.scss';
import Link from 'next/link';

import Fancybox from '../Fancybox';

const PhotoGallery = ({ items }) => {
    const gridRef = useRef(null);
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        const loadIsotope = async () => {
            const IsotopeModule = await import('isotope-layout');
            // eslint-disable-next-line no-unused-vars
            const Packery = await import('isotope-packery');
            const IsotopeConstructor = IsotopeModule.default || IsotopeModule;

            if (gridRef.current && !isotopeInstance) {
                const instance = new IsotopeConstructor(gridRef.current, {
                    itemSelector: '.grid-item',
                    layoutMode: 'packery',
                    packery: {
                        // gutter: 15, // replaced by gutter in .row (g-4)
                        resize: true,
                    },
                });
                setIsotopeInstance(instance);

                // Re-layout Isotope after each image has loaded
                imagesLoaded(gridRef.current).on('progress', () => {
                    instance.layout();
                });
            }
        };

        loadIsotope();

        return () => {
            if (isotopeInstance) {
                isotopeInstance.destroy();
                setIsotopeInstance(null);
            }
        };
    }, [isotopeInstance]);

    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div ref={gridRef} className="row g-4">
                {items.map(
                    (i) =>
                        i.image &&
                        i.image.dimensions && (
                            // eslint-disable react/no-array-index-key
                            <div key={i.id} className="col-lg-4 col-md-6 col-sm-6 grid-item">
                                <div className={styles.itemCard}>
                                    <Link
                                        key={`link-${i.id}`}
                                        data-fancybox="gallery"
                                        href={i.image.url}
                                        className={cx(styles.dBlock)}
                                    >
                                        <Image
                                            src={i.image.url}
                                            alt={i.image.alt}
                                            width={i.image.dimensions.width}
                                            height={i.image.dimensions.height}
                                            className={cx('w-100', styles.itemRounded)}
                                        />
                                    </Link>
                                    {i.image.alt && (
                                        <div
                                            className={cx(
                                                styles.textStart,
                                                styles.textBlock,
                                                styles.grBgOpacity,
                                                styles.dBlock
                                            )}
                                        >
                                            <p>{i.image.alt}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                )}
            </div>
        </Fancybox>
    );
};

PhotoGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.shape({
                id: PropTypes.string,
                url: PropTypes.string.isRequired,
                alt: PropTypes.string,
            }).isRequired,
        })
    ).isRequired,
};

export default PhotoGallery;

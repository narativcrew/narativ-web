import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from 'next/image'

const MemberListItem = ({ id, title, image }) => (
    <Link href={`/clenove/${id}`}>
        <Image
            className="rounded w-100"
            src={image}
            alt={title}
        />
        <div className="w-100 text-center">
            <p className="p-2 m-0">{title}</p>
        </div>
    </Link>
);

MemberListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default MemberListItem;

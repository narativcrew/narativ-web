import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox({ children, delegate = '[data-fancybox]', options = {} }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const { current: container } = containerRef;

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{children}</div>;
}

Fancybox.propTypes = {
    children: PropTypes.any,
    delegate: PropTypes.string,
    options: PropTypes.object,
};

Fancybox.defaultProps = {
    children: null,
    delegate: '',
    options: {},
};

export default Fancybox;

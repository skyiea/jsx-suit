import React, { Component } from 'react';

import CSSModules from '../../utils/css-modules';

import styles from './PageNotFound.scss';

@CSSModules(styles)
class PageNotFound extends Component {
    render() {
        return (
            <section styleName="page-not-found">
                Page Not Found
            </section>
        );
    }
}

export default PageNotFound;
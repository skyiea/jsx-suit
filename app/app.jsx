import React    from 'react';
import $        from 'jquery';
import App      from './body/Body';

import './app.less';

$(() => {
    React.render(<App />, document.getElementById('app-container'))
});
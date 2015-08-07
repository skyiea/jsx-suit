import React    from 'react';
import $        from 'jquery';
import Body     from './body/Body';

$(() => {
    React.render(<Body />, document.getElementById('app-container'));
});
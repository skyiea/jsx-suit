import { connect } from 'react-redux';

import mapActionCreators from '../../utils/redux-helpers/mapActionCreators';

import PageNotFound from './PageNotFound';

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = mapActionCreators({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageNotFound);
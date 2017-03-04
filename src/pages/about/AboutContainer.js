import { connect } from 'react-redux';

import mapActionCreators from '../../utils/redux-helpers/mapActionCreators';

import About from './About';

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = mapActionCreators({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
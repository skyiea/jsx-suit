import { connect } from 'react-redux';

import mapActionCreators from '../../utils/redux-helpers/mapActionCreators';

import Home from './Home';

const mapStateToProps = ({

}) => ({

});

const mapDispatchToProps = mapActionCreators({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
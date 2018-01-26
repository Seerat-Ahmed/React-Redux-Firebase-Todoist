import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return(
            <div className="section">
                <h3 className="heading-section">{ this.props.user.name }</h3>
                <br />
                <h3 className="heading-section">{ this.props.user.email }</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
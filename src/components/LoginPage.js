import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginAnon } from '../actions/auth' 

export const LoginPage = ({ startLogin, startLoginAnon }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">setCodeTime</h1>
            <p className="box-layout__title">Manage your study and work time.</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <button className="button button--guest" onClick={startLoginAnon}>Login as Guest</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginAnon: () => dispatch(startLoginAnon())
});

export default connect(undefined, mapDispatchToProps)(LoginPage)
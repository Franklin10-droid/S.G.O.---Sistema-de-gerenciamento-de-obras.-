import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
 

const SignedinLink = (props) => {
    if(props.profile.cliente == 'sim'){
        return (
            <ul className="right">
                <li><NavLink to='/feedback'>Deixe seu feedBack</NavLink></li>
                <li><a onClick={props.signOut}>Sair</a></li>
                <li><NavLink to='/' className='bnt bnt-floating blue lighten-1'>
                {props.profile.initials}
                </NavLink></li>
            </ul>
        )  
    }else  
    return (
        <ul className="right">
            <li><NavLink to='/createcliente'>Novo Cliente</NavLink></li>
            <li><NavLink to='/createproject'>Novo Projeto</NavLink></li>
            <li><NavLink to='/creatematerials'>Novo Material</NavLink></li>
            <li><a onClick={props.signOut}>Sair</a></li>
            <li><NavLink to='/' className='bnt bnt-floating blue lighten-1'>
            {props.profile.initials}
            </NavLink></li>
        </ul>
    ) 
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedinLink)
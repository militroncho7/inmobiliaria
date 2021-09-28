import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 1rem;

    &:last-of-type {
        margin: 0;
    }
    
    &.pagina-actual {
        border-bottom: 2px solid #16CAFF;
    }
`;

const Navegacion = () => {
    return (
        <Nav>
            <NavLink to={'/'} activeClassName="pagina-actual">Inicio</NavLink>
            <NavLink to={'/nosotros'} activeClassName="pagina-actual">Nosotros</NavLink>
            <NavLink to={'/propiedades'} activeClassName="pagina-actual">Propiedades</NavLink>
        </Nav>
    );
}
 
export default Navegacion;
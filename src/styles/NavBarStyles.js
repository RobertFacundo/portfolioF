import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 1rem 0rem;
  padding-bottom: 0;
  background-color: #000000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Comfortaa', cursive; 

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;  

  @media (max-width: 768px) {
        /* CLAVE 1: En móvil, centramos el contenedor de la lista */
        justify-content: center; 
        width: 100%;
        margin-top: 10px;
    }
`

export const NavList = styled.ul`
  display: flex;
  gap: 1rem; 
  margin-left: 23rem;
  align-items: center;

   @media (max-width: 768px){
        /* CLAVE 2: En móvil, centramos los elementos dentro de la lista */
        justify-content: center; 
        gap: 0;
        margin-left: 0;
        flex-wrap: wrap;
        width: 100%; /* Aseguramos que la lista tome todo el ancho disponible */
    }
`;

export const NavItem = styled.li`
  a {
    position: relative;
    display: inline-block;
    padding: 8px 10px;
    text-decoration: none;
    color: #ffffff;
    font-family: 'VT323', monospace;
    font-size: 1.6rem; /* Base font size */
    letter-spacing: 4px;
    overflow: hidden;
    border: none;

    line-height: 28px;

    transform: scale(1);
    transition: color 0.3s ease, transform 0.5s ease; 
    text-transform: uppercase;

    &:hover {
      color: #00FF41;
      transform: scale(1.08);
    }

    &.active {
      transform: scale(1.08);
      color: #00FF41;
    }

    @media (max-width: 768px){
      font-size: 1rem; 
      padding: 8px 10px; /* Reducimos el padding para que quepan */
      letter-spacing: 3px;
    }
  }
`;
import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  color: #5b5963;
  padding: 6px 0;
  color: #ffffff;
  display: flex;
  box-shadow: -6px 10px 40px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  cursor: default;
  font-size: 17px;
  letter-spacing: 2px;
  color: #5b5963;

  @media (max-width: 767px) {
    position: fixed;
    left: 1rem;
    color: #000000;
    z-index: 1;
  }
`;

export const NavLinks = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    top: 40px;
    right: -100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000000;
    transition: all 0.8s ease-out;

    &.show-nav {
      right: 0;
      .burger-bar {
        background: transparent;
      }
      .burger-bar::before {
        transform: rotate(-45deg);
      }
      .burger-bar::after {
        transform: rotate(45deg);
      }
    }
  }
`;

export const NavLink = styled.a`
  padding: 12px 10px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  color: #5b5963;
  transition: all 0.3s;

  &.active {
    background: #000000;
    color: #ffffff;
  }

  &:hover {
    background: #000000;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
    text-align: center;
    color: white;

    &.active {
      background: #ffffff;
      color: #000000;
    }

    &:hover {
      background: #ffffff;
      color: #333;
    }
  }
`;

export const Burger = styled.button`
  display: none;
  width: 40px;
  height: 30px;
  border: none;
  background: transparent;
  color: inherit;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 0.4rem;
    right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const BurgerBar = styled.span`
  position: relative;
  display: block;
  width: 35px;
  height: 3px;
  border-radius: 3px;
  background: #333;
  transition: all 0.1s ease-in-out;

  &::before,
  &::after {
    position: relative;
    display: block;
    width: 35px;
    height: 3px;
    border-radius: 3px;
    background: #333;
    transition: all 0.3s ease-in-out;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }
`;

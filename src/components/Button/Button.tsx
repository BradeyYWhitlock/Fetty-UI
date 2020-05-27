import * as React from "react";
import styled, { css } from 'styled-components'
import { lightenDarkenColor } from '../../Utilities/index';

const ripple = (color?: string) => css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: ${props => `radial-gradient(circle, ${color && props.theme[color] || props.theme.white } 10%, transparent 10.01%)`};
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  :active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  `

const StyledButton = styled.button<ButtonProps>`
  width:            ${props => props.width || "100px"};
  height:           ${props => props.height || "36px"};
  border-radius:    2px;
  border:           none;
  text-transform:   uppercase;
  :focus {
    outline: 0
  }
  :hover {
    cursor:         pointer;
  }
  ${props => ripple(props.color || '')}
  ${
  props => getVariantStyles((props.variant || ''), (props.color || ''), (props.disabled || false))
  }
  `

interface ButtonProps {
  height?: string
  color?: string
  width?: string
  variant?: string
  disabled?: boolean
  onClick?: any
}

function getVariantStyles(variant: string, color: string, disabled: boolean) {
  const outlined = css`
  background-color: ${props => props.theme.white};
  border:           ${props => disabled ? props.theme.gray3 : props => color && props.theme[color] || props.theme.blue} 2px solid;
  color:            ${props => disabled ? props.theme.gray3 : color && props.theme[color] || props.theme.blue};
  `
  const solid = css`
    box-shadow:       0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: ${props => disabled ? props.theme.gray3 : (color && props.theme[color]) || props.theme.blue};
    color:            ${props => props.theme.white};
    ${ripple()}
    :hover {
    background-color: ${props => disabled ? props.theme.gray3 : lightenDarkenColor((color && props.theme[color]) || props.theme.blue, -.25)};
  }`

  const text = css`
    color:            ${props => disabled ? props.theme.gray3 : color && props.theme[color] || props.theme.blue};
    background:       transparent;
  `

  switch (variant) {
    case ('outlined'):
      return outlined;
    case ('text'):
      return text;
    default:
      return solid;
  }
}

export const Button: React.SFC<ButtonProps> = (props) => {
  return (
    <StyledButton disabled={props.disabled} {...props}/>
  );
};
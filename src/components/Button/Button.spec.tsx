import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {Button} from './Button'
import { ThemeProvider } from 'styled-components';
import theme from '../../Theme/Theme'

describe('Button', ()=>{
  it('should have a default color', ()=>{
    const button = renderer.create(
    <ThemeProvider theme={theme}>
      <Button/>
    </ThemeProvider>).toJSON();
    expect(button).toHaveStyleRule('background-color', theme.blue)
  })
  it('should be colored blue', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button color="blue"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.blue)
  })
  it('should be colored red', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button color="red"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.red)
  })

  it('should be colored green', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button color="green"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.green)
  })

  it('should be colored yellow', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button color="yellow"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.yellow)
  })

  it('should be solid button', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button variant="solid"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.blue)
  })

  it('should be an outlined button', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="yellow"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('background-color', theme.white)
      expect(button).toHaveStyleRule('border', `${theme.yellow} 2px solid`)
  })

  it('should be a text button', ()=>{
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button variant="text" color="yellow"/>
      </ThemeProvider>).toJSON();
      expect(button).toHaveStyleRule('color', theme.yellow)
  })
})
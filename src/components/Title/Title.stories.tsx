import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Title } from './Title'

export default {
  title: 'Text/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
)

export const Main = Template.bind({})
Main.args = {
  size: '6',
  type: 'p',
  children: 'Title',
}

export const TitleSize2 = Template.bind({})
TitleSize2.args = {
  size: '2',
  type: 'div',
  children: 'Title with size 2',
  theme: 'black',
}

export const TitleTypeH1 = Template.bind({})
TitleTypeH1.args = {
  size: '1',
  type: 'h1',
  children: 'Title with type h1',
}

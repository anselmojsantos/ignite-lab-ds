import { Meta, StoryObj } from '@storybook/react'
import {within, userEvent,waitFor} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Signin } from './Signin';

export default {
  title: 'Pages/Sign In',
  component: Signin,
  args: {
  },
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({canvasElement} ) => {
      const canvas = within(canvasElement)

      userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'anselmo3.santos@gamil.com');
      userEvent.type(canvas.getByPlaceholderText('******'), '12346@RocketSeat');

      userEvent.click(canvas.getByRole('button'));

      await waitFor(()=>{
        return expect(canvas.getAllByText('Login realizado com sucesso!')).toBeInTheDocument();
      })
  }
}

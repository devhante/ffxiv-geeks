import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';
import Header from 'components/Header';

test('render header', () => {
  const { getByText } = render(<Header />);
  const titleElement = getByText(/FFXIV Geeks/i);
  const shareHudsButtonElement = getByText(/Share HUDs/i);
  const skillQuizButtonElement = getByText(/Skill Quiz/i);
  expect(titleElement).toBeInTheDocument();
  expect(shareHudsButtonElement).toBeInTheDocument();
  expect(skillQuizButtonElement).toBeInTheDocument();
});

test('click header', () => {
  const { getByText } = render(<Header />);

  const titleElement = getByText(/FFXIV Geeks/i);
  const shareHubsButtonElement = getByText(/Share HUDs/i);
  const skillQuizButtonElement = getByText(/Skill Quiz/i);

  fireEvent.click(shareHubsButtonElement);
  expect(shareHubsButtonElement).toHaveStyle({ color: '00ADB5' });
  expect(skillQuizButtonElement).toHaveStyle({ color: 'EEEEEE' });

  fireEvent.click(skillQuizButtonElement);
  expect(shareHubsButtonElement).toHaveStyle({ color: 'EEEEEE' });
  expect(skillQuizButtonElement).toHaveStyle({ color: '00ADB5' });

  fireEvent.click(titleElement);
  expect(shareHubsButtonElement).toHaveStyle({ color: 'EEEEEE' });
  expect(skillQuizButtonElement).toHaveStyle({ color: 'EEEEEE' });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevOps project text', () => {
  render(<App />);
  const titleElement = screen.getByText(/this is my final DevOps project/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders version text', () => {
  render(<App />);
  const versionElement = screen.getByText(/Application version/i);
  expect(versionElement).toBeInTheDocument();
});

test('renders the Jenkins logo container', () => {
  render(<App />);
  // ค้นหาจาก test ID แทนการใช้ role
  const { container } = render(<App />);
  const logoContainer = container.querySelector('.logo-container');
  expect(logoContainer).toBeInTheDocument();
});
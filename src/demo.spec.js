import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './lib/components/ui/Button.svelte';
import Card from './lib/components/ui/Card.svelte';

describe('Button Component', () => {
	it('renders with default props', () => {
		render(Button, { children: () => 'Click me' });
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Click me');
	});

	it('applies variant classes correctly', () => {
		render(Button, { variant: 'danger', children: () => 'Delete' });
		const button = screen.getByRole('button');
		expect(button).toHaveClass('bg-red-600');
	});

	it('shows loading state', () => {
		render(Button, { loading: true, children: () => 'Loading' });
		const button = screen.getByRole('button');
		const spinner = button.querySelector('svg');
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveClass('animate-spin');
	});
});

describe('Card Component', () => {
	it('renders with title and content', () => {
		render(Card, { 
			title: 'Test Card',
			children: () => 'Card content'
		});
		
		expect(screen.getByText('Test Card')).toBeInTheDocument();
		expect(screen.getByText('Card content')).toBeInTheDocument();
	});

	it('renders without title', () => {
		render(Card, { 
			children: () => 'Just content'
		});
		
		expect(screen.getByText('Just content')).toBeInTheDocument();
	});
});
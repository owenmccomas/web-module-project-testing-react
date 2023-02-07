import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

test('renders without errors', () => { 
    render(<Show />)
});

test('renders Loading component when prop show is null', () => { 
    render(<Show show={null}/>)
    const loading = screen.getByText(/Fetching data.../i)
    expect(loading).toBeInTheDocument()
});

test('renders same number of options as seasons are passed in', () => { 
    render(<Show />)
    expect(screen.getAllByRole('option').length).toBe(4)
});

test('handleSelect is called when an season is selected', () => { 
    render(<Show />)
    
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    render(<Show />)
});

const mockData = {
    name: 'egg',
    summary: 'egg summary',
    seasons: [{name: 'egg season 1',
               id: '1234',
               episodes: null
            }, 
              {name: 'egg season 2',
              id: '1235',
              episodes: null
            }, 
              {name: 'egg season 3',
              id: '1235',
              episodes: null
            }]
}
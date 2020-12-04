import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';
import fakeMovieData from '../data/fakeMovieData';

describe('MovieCard', () => {
  it('should render correctly', () => {

    const fakeMovie = fakeMovieData.movies[0]

    render(
      <BrowserRouter>
      <MovieCard
      key={fakeMovie.id}
      data={fakeMovie}
      getMovieDetails={jest.fn()}
      />
      </BrowserRouter>)

      expect(screen.getByText('Money Plane 67%')).toBeInTheDocument();
      expect(screen.getByText('Release Date 2020-09-29')).toBeInTheDocument();
      expect(screen.getByAltText('')).toBeInTheDocument();
  })

  it('should call get movie details with the correct params', () => {
    const mockGetMovieDetails = jest.fn()
    const fakeMovie = fakeMovieData.movies[0]

    render(
      <BrowserRouter>
      <MovieCard 
      key={fakeMovie.id}
      data={fakeMovie}
      getMovieDetails={mockGetMovieDetails}
      /></BrowserRouter>)

      userEvent.click(screen.getByAltText(''))
      expect(mockGetMovieDetails).toHaveBeenCalledWith(fakeMovie.id)

    
  })


})
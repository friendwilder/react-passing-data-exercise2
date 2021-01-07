import React, { Component } from 'react';
import LikedBy from './LikedBy'


class ListMovies extends Component {
  render() {
      //console.log(this.props)  
    const { movies, profiles, users } = this.props;
    return(

      <ol className='movies-list'>
      {Object.keys(movies).map(id => 
      	<li key={id.id} className='movie-list-item'>
			<div className = 'movie-info'>
				<p>{movies[id].name}</p>
				<LikedBy 
				movieID={movies[id].id} 
				profiles={profiles}
				users={users}
				/>
			</div>
		</li>
		)}
      </ol>
    )
  }
  
}

export default ListMovies;
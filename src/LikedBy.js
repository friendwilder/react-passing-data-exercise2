import React, { Component } from 'react'


class LikedBy extends Component{
	render () {
      	const { movieID, profiles, users } = this.props;
    	//console.log(this.props)
      	return (
          	<div>
        	<p>Liked By:</p>
			<ul>
				{profiles.filter(profile => profile.favoriteMovieID == movieID).map( (profile) => (
					<li key = {profile.id} className = 'profile'>
						<p>{users[profile.userID].name}</p>
					</li>
				))}
			</ul>
			</div>
        )
    
    }

}

export default LikedBy;
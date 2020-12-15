import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
          <StoryReel />
          <MessageSender />
          <Post 
            profilePic='https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/84391797_2469789703132919_2947342069028356096_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEdIHi5C0XwpxufMXHPOW-Q6f1ErnzHXa_p_USufMddrx0UcqHUaMFXLVG6wF91kQthOsPoK98-JG55NCt19h0s&_nc_ohc=jSPl0a-f3EUAX9e6rt4&_nc_oc=AQn_6PFka01i5iQoqsTeR0RLltqM4hTIMiJ7JK_sIPToWeJfV7aS2kuLr2MeQ8Gr7aQ&_nc_ht=scontent.flos3-2.fna&oh=6e35d1dd8a6b8bcc34024b8ab9818dd5&oe=5FFEC6FE'
            message='it works'
            timestamp='timestamp'
            username='sylvester menawar'
            image='https://www.jcsocialmedia.com/wp-content/uploads/social-media-consultancy-stock-image.jpg'

          />
          <Post />
          <Post />
        </div>
    )
}

export default Feed;

import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts([]);
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='w-full py-13'>
      <Container>
        <div className='flex flex-wrap gap-4 justify-center'>
          {posts.map((post) => (
            <div
              key={post.$id}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'
            >
              <PostCard
                {...post}
                className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 min-h-[300px] flex flex-col justify-between'
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;

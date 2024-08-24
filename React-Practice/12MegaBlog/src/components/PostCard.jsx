import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className='block'>
      <div className='w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'>
        <div className='relative w-full h-48'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>
        <div className='p-4'>
          <h2 className='text-lg font-semibold text-gray-800 truncate'>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Button, Container } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate('/');
      });
    } else navigate('/');
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate('/');
      }
    });
  };

  return post ? (
    <div className='py-8'>
      <Container>
        <div className='relative w-full bg-white rounded-lg shadow-md border border-gray-200'>
          <div className='relative'>
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className='w-full h-100% object-cover rounded-t-lg'
            />

            {isAuthor && (
              <div className='absolute right-4 top-4 flex space-x-2'>
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor='bg-green-500'
                    className='text-white text-center transition-colors duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
                  >
                    <i className='fas fa-edit mr-2'></i>
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor='bg-red-500'
                  onClick={deletePost}
                  className='text-white transition-colors duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'
                >
                  <i className='fas fa-trash-alt mr-2'></i>
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className='p-4'>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              {post.title}
            </h1>
            <div className='prose lg:prose-xl'>{parse(post.content)}</div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

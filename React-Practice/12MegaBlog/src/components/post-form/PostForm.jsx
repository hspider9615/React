import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, RTE, Select } from '..';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/Signup.css';
export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || '',
        slug: post?.$id || '',
        content: post?.content || '',
        status: post?.status || 'active',
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      let fileId = null;

      if (data.image.length > 0) {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          fileId = file.$id;
        }
      }

      if (post) {
        if (fileId && post.featuredImage) {
          await appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: fileId || post.featuredImage,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          featuredImage: fileId,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-');

    return '';
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col md:flex-row p-6 md:p-8 mx-auto max-w-4xl bg-white shadow-lg rounded-lg'
    >
      <div className='md:w-2/3 px-4 md:px-6 mb-6 md:mb-0'>
        <label className='block text-gray-800 text-sm font-semibold mb-3'>
          Title:
          <Input
            placeholder='Title'
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-300'
            {...register('title', { required: true })}
          />
        </label>
        <label className='block text-gray-800 text-sm font-semibold mb-3'>
          Slug:
          <Input
            placeholder='Slug'
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-300'
            {...register('slug', { required: true })}
            onInput={(e) => {
              setValue('slug', slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
        </label>
        <label className='block text-gray-800 text-sm font-semibold mb-3'>
          Content:
          <RTE
            name='content'
            control={control}
            defaultValue={getValues('content')}
            className='w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-300'
          />
        </label>
      </div>
      <div className='md:w-1/3 px-4 md:px-6'>
        <label className='block text-gray-800 text-sm font-semibold mb-3'>
          Featured Image:
          <Input
            type='file'
            className='w-full mt-1 border border-gray-300 rounded-lg p-2 bg-gray-50'
            accept='image/png, image/jpg, image/jpeg, image/gif'
            {...register('image', { required: !post })}
          />
        </label>
        {post && (
          <div className='w-full mt-4'>
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className='w-full h-auto rounded-lg border border-gray-200'
            />
          </div>
        )}
        <label className='block text-gray-800 text-sm font-semibold mb-3'>
          Status:
          <Select
            options={['active', 'inactive']}
            className='w-full mt-1 border border-gray-300 rounded-lg bg-gray-50'
            {...register('status', { required: true })}
          />
        </label>
        <Button
          type='submit'
          className={`w-full mt-6 py-2 rounded-lg text-white ${
            post ? 'bg-green-600' : 'bg-blue-600'
          } hover:${
            post ? 'bg-green-700' : 'bg-blue-700'
          } transition-colors duration-200`}
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

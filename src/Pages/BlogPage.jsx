import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  // Example blog post data
  {
    id: 1,
    title: 'Understanding Mental Stress in Students',
    description: 'An in-depth look at the causes and effects of mental stress among students.',
    author: 'John Doe',
    date: 'August 5, 2024',
    tags: ['Mental Health', 'Students'],
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Effective Stress Management Techniques',
    description: 'Learn about various techniques to manage and reduce stress effectively.',
    author: 'Jane Smith',
    date: 'July 25, 2024',
    tags: ['Stress Management', 'Wellness'],
    readTime: '7 min read',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
        <div className="max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <div className="text-gray-500 text-sm mb-2">
                By {post.author} on {post.date} · {post.readTime}
              </div>
              <div className="text-sm text-blue-500 mb-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="mr-2">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

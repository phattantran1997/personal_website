import React, { useState, useEffect } from 'react';
import './Blogs.scss';
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blogs = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const notionBlocksUrl = 'http://localhost:5146/api/Blog/notion';

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(notionBlocksUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('The api server is not working. Please check server again. Error: ' + error.message);
        setLoading(false);
      }
    };
    fetchPages();
  }, []);

  return (
    <div className="container pt-20">
      <h2 className="title_header text-3xl font-bold mb-4">My Notion Blogs</h2>
      {loading && <p className="loading">Loading...</p>}
      {!loading && (
        <ul className="Blogs-list">
          {pages.map((page, index) => (
            <li key={page.requestId} className="Blogs-item">
              <div className="Blogs-content">
                <div className="Blogs-title">
                  <a href={page.publicUrl}>
                    <h3>{index + 1}. {page.properties?.title?.title?.[0]?.plainText || 'Untitled'}</h3>
                  </a>
                </div>
                {page.cover?.external?.url && (
                  <div className="Blogs-cover">
                    <a href={page.url} target="_blank" rel="noopener noreferrer">
                      <img src={page.cover.external.url} alt="Cover" />
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
};

export default Blogs;
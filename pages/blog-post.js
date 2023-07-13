/* eslint-disable @next/next/no-img-element */
import Layouts from "../src/layouts/Layouts";
import { useRouter } from "next/router";
import { blogData } from "./../src/components/data/blogData.js";
import { useState } from "react";

const BlogPost = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const router = useRouter();
  let { id } = router.query;
  const parsedId = parseInt(id, 10);
  let singleBlog = blogData.find((blog) => blog.id === parsedId);
  console.log(singleBlog);

  // submit comment
  const submitComment = (e) => {
    e.preventDefault();
    // New comment details
    const newComment = { name: name, message: message };
    // Add the new comment to the comment array of the single blog
    singleBlog.comment.push(newComment);
    setInfo("Comment added successfully");
  };

  return (
    <Layouts extraPage bodyCls={"dark blog"}>
      <div className="wrapper">
        <div className="container-fluid page-title post-title">
          <div className="content-banner">
            <h2 className="text-center">
              <span>{singleBlog.title}</span>
            </h2>
            <div className="meta">
              <span>
                <i className="fa fa-user" /> <a href="#">admin</a>
              </span>
              <span className="date">
                <i className="fa fa-calendar" />{" "}
                {singleBlog.date.date +
                  "-" +
                  singleBlog.date.month +
                  "-" +
                  singleBlog.date.year}
              </span>
              <span>
                <i className="fa fa-commenting" /> <a href="#">18</a>
              </span>
              <span>
                <i className="fa fa-tags" /> {singleBlog?.tag}
              </span>
              <span className="permalink">
                <i className="fa fa-link" /> <a href="#">permalink</a>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="content">
              {/* Article Starts */}
              <article>
                {/* Excerpt Starts */}
                <div className="blog-excerpt">
                  {singleBlog?.des?.map((des, i) => (
                    <p key={i}>{des}</p>
                  ))}

                  {/* Meta Starts */}
                  <div className="meta meta-post-content">
                    <span>
                      <i className="fa fa-user" /> <a href="#">admin</a>
                    </span>
                    <span className="date">
                      <i className="fa fa-calendar" />
                      {singleBlog?.date.date +
                        "-" +
                        singleBlog?.date.month +
                        "-" +
                        singleBlog?.date.year}
                    </span>
                    <span>
                      <i className="fa fa-commenting" />{" "}
                      <a href="blog-post.html">18</a>
                    </span>
                    <span>
                      <i className="fa fa-tags" /> {singleBlog?.tag}
                    </span>
                    <span className="permalink">
                      <i className="fa fa-link" /> <a href="#">permalink</a>
                    </span>
                  </div>
                  {/* Meta Ends */}
                </div>
                {/* Excerpt Ends */}
                {/* Comments Starts */}
                <div className="comments">
                  <h3 className="comments-heading uppercase">
                    {singleBlog?.comment?.length} Comments
                  </h3>
                  <ul className="comments-list">
                    <li>
                      {/* Comment Starts */}
                      {singleBlog?.comment?.map((data, i) => (
                        <div className="comment" key={i}>
                          <img
                            className="comment-avatar pull-left"
                            alt=""
                            src="img/avatar.png"
                          />

                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                {data.name}
                              </span>
                            </div>
                            <div className="comment-content">
                              <p>{data.message}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </li>
                  </ul>
                  <h3 className="comments-heading uppercase add-comment">
                    Add a comment
                  </h3>
                  {/* Comments Form Starts */}

                  {info && (
                    <span className="text-info text-center p-5 m-5">
                      {info}
                    </span>
                  )}
                  <div className="comments-form">
                    <form role="form">
                      {/* Name Field Starts */}
                      <div className="form-group col-12">
                        <i className="fa fa-user prefix" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="YOUR NAME"
                          required=""
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      {/* Name Field Ends */}

                      {/* Comment Textarea Starts */}
                      <div className="form-group col-xl-12">
                        <i className="fa fa-comments prefix" />
                        <textarea
                          id="comment"
                          name="comment"
                          className="form-control"
                          placeholder="YOUR COMMENT"
                          required=""
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      {/* Comment Textarea Ends */}
                      {/* Submit Form Button Starts */}
                      <div className="col s12 m12 l6 xl6 submit-form">
                        <button
                          className="btn button-animated"
                          type="submit"
                          name="send"
                          onClick={submitComment}
                        >
                          <span>
                            <i className="fa fa-comment" /> Add comment
                          </span>
                        </button>
                      </div>
                      {/* Submit Form Button Ends */}
                    </form>
                  </div>
                  {/* Comments Form Ends */}
                </div>
              </article>
              {/* Article Ends */}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default BlogPost;

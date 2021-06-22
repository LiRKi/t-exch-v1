import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NavBarAp from './NavBarAp';

class Publication extends Component {
  
    render() {
      
        return (
            <div>
              <NavBarAp />
              {/* <link href="assets/css/style1.css" rel="stylesheet" /> */} 
                    <div class="popup-wrapper1">
      <div class="popup post-sharing">
        <span class="popup-closed"><i class="far fa-window-close"></i></span>
        <div class="popup-meta">
          <div class="popup-head">
            <h4>Add Post</h4>
          </div>
          <div class="popup-body">
            <div class="add-post-section lead emoji-picker-container">
              <div class="add-textarea-dt">
                <textarea
                  class="add-post-textarea"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <div class="add-post-items">
                <div class="add-left-items">
                  <ul>
                    <li>
                      <div class="upload-icon">
                        <input type="file" id="file1" />
                        <label for="file1" title="Image"
                          ><i class="fas fa-camera"></i
                          ><span class="icon-text">Image</span></label>
                        
                      </div>
                    </li>
                    <li>
                      <div class="upload-icon">
                        <input type="file" id="file2" />
                        <label for="file2" title="Video"
                          ><i class="fas fa-video"></i
                          ><span class="icon-text">Video</span></label>
                        
                      </div>
                    </li>
                    <li>
                      <div class="upload-icon">
                        <input type="file" id="file3" />
                        <label for="file3" title="File"
                          ><i class="fas fa-file"></i
                          ><span class="icon-text">File</span></label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="add-right-items">
                  <ul>
                    <li>
                      <span class="tag-hash" title="Hashtag"
                        ><i class="fas fa-hashtag"></i></span>
                    </li>
                    <li>
                      <span class="tag-hash" title="Tag"
                        ><i class="fas fa-at"></i></span>
                    </li>
                    <li>
                      <div class="emoji-panel">
                        <button class="emoji-combo" title="Emo">
                          <i class="fas fa-smile"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="postbox">
            <div class="share-submit-btns">
              <button class="main-btn cancel">Cancel</button>
              <button class="main-btn color btn-hover">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-wrapper3">
      <div class="popup add-course--popup">
        <span class="popup-closed"><i class="far fa-window-close"></i></span>
        <div class="popup-meta">
          <div class="popup-head">
            <h4>Add Course</h4>
          </div>
          <div class="popup-body">
            <div class="add-course-block">
              <div class="row">
                <div class="col-md-6">
                  <div class="course-popup-item">
                    <h4>Become an Instructor</h4>
                    <p>
                      Top instructors from around the world teach millions of
                      students on Micko. We provide the tools and skills to
                      teach what you love.
                    </p>
                    <button
                      class="main-btn color btn-hover"
                      onclick="location.href='#';"
                    >
                      Become an Instructor
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="course-popup-item">
                    <h4>Add New Course</h4>
                    <p>
                      Create single course based on what student need to
                      learning. An easy step-by-step process will help you get
                      started.
                    </p>
                    <button
                      class="main-btn color btn-hover"
                      onclick="location.href='add_course.html';"
                    >
                      Add New Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup-wrapper2">
      <div class="popup post-sharing">
        <span class="popup-closed"><i class="far fa-window-close"></i></span>
        <div class="popup-meta">
          <div class="popup-head">
            <h4>Share Post</h4>
          </div>
          <div class="popup-body">
            <div class="post-share-category share145l">
              <label
                ><input
                  type="radio"
                  name="colorRadio"
                  value="feed"
                  checked
                /><span>Share in your feed</span></label>
              <label
                ><input type="radio" name="colorRadio" value="page" /><span>Share in a page</span></label>
              <label
                ><input type="radio" name="colorRadio" value="group" /><span>Share in a group</span></label >
              <label
                ><input type="radio" name="colorRadio" value="message" /><span>Share in message</span></label>
              <div class="feed share-box"></div>
              <div class="page share-box">
                <input
                  class="form_input"
                  type="text"
                  placeholder="Please type the page name"
                />
              </div>
              <div class="group share-box">
                <input
                  class="form_input"
                  type="text"
                  placeholder="Please type the group name"
                />
              </div>
              <div class="message share-box">
                <input
                  class="form_input"
                  type="text"
                  placeholder="Please type the people name"
                />
              </div>
              <div class="comment-box">
                <textarea placeholder="Write something here.."></textarea>
              </div>
            </div>
            <div class="export-share">
              <h6>Export</h6>
              <ul class="social-share">
                <li>
                  <a href="#" class="fb" title="Facebook"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="tw" title="Twitter"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="ln" title="LinkedIn"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="pin" title="Pinterest"
                    ><i class="fab fa-pinterest-p"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="wp" title="Whatsapp"
                    ><i class="fab fa-whatsapp"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="tl" title="Telegram"
                    ><i class="fab fa-telegram-plane"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="in" title="Instagram"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="cpy" title="Copy Link"
                    ><i class="fas fa-link"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="postbox">
            <div class="share-submit-btns">
              <button class="main-btn cancel" data-ripple="">Cancel</button>
              <button class="main-btn color btn-hover" data-ripple="">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <main
            class="
              col col-xl-6
              order-xl-2
              col-lg-12
              order-lg-1
              col-md-12 col-sm-12 col-12
            "
          >
            <div class="full-width mb-30">
              <div class="home-upload-links">
                <a href="#" class="home-upload-cate add_post col-md-6"
                  ><i class="fas fa-edit"></i>Add Post</a
                >
                <a href="post_a_job.html" class="home-upload-cate col-md-5"
                  ><i class="fas fa-briefcase"></i>Post a Job</a
                >
              </div>
            </div>

            <div class="full-width mb-30">
              <div class="recent-items">
                <div class="posts-list">
                  <div class="feed-shared-author-dt">
                    <div class="author-left">
                      <a href="#"
                        ><img
                          class="ft-plus-square job-bg-circle bg-cyan mr-0"
                          src="assets/img/left-imgs/img-3.jpg"
                          alt=""
                      /></a>
                    </div>
                    <div class="author-dts">
                      <a href="#" class="job-heading">John Doe</a>
                      <p class="notification-text font-small-4">
                        <span class="time-dt">2 hour ago</span>
                        <span class="job-loca"
                          ><i class="fas fa-location-arrow"></i
                          ><ins class="state-name">Ludhiana,</ins>India</span
                        >
                      </p>
                    </div>
                    <div
                      class="
                        ellipsis-options
                        post-ellipsis-options
                        dropdown dropdown-account
                      "
                    >
                      <a
                        href="#"
                        class="option-eps"
                        role="button"
                        data-bs-toggle="dropdown"
                        ><i class="fas fa-ellipsis-h"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-ellipsis dropdown-menu-end
                        "
                      >
                        <li class="media-list">
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-eye-slash icon-mr1"></i>Hide this
                            post</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="far fa-bookmark icon-mr1"></i>Save</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-link icon-mr1"></i>Copy Link</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-times-circle icon-mr1"></i
                            >Unfollow John</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-flag icon-mr1"></i>Report this
                            post</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="post-meta">
                  <div class="feed-shared-dt-1">
                    <p class="mb-0">
                      Lorem / dolor sit amet, consectetur adipiscing elit.
                      Integer vel urna pellentesque, sodales diam a, dictum
                      orci. Nulla vehicula augue quis velit sollicitudin cursus.
                      Nunc molestie scelerisque dictum.
                    </p>
                  </div>
                  <div class="feed-shared-result">
                    <ul class="social-counts">
                      <li class="social-counts-items">
                        <button class="social-dts-social-counts__count-value">
                          Like<span class="social-counts-reactions-count"
                            >150</span
                          >
                        </button>
                      </li>
                      <li class="social-counts-items">
                        <button
                          class="
                            social-dts-social-counts__count-value
                            all_comments
                          "
                        >
                          Comments<span class="social-counts-reactions-count"
                            >2</span
                          >
                        </button>
                      </li>
                      <li class="social-counts-items">
                        <button class="social-dts-social-counts__count-value">
                          Share<span class="social-counts-reactions-count"
                            >3</span
                          >
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="feed-shared-social-actions">
                    <div class="reactions-button-left">
                      <button class="react-button__trigger action-btn">
                        <i class="fas fa-thumbs-up icon-mr"></i>Like
                      </button>
                      <button
                        class="react-button__comment action-btn leave_a_comment"
                      >
                        <i class="fas fa-comment-alt icon-mr"></i>Comment
                      </button>
                    </div>
                    <div class="reactions-button-right">
                      <button class="react-button__share action-btn">
                        <i class="fas fa-share-alt icon-mr"></i>Share
                      </button>
                    </div>
                  </div>
                </div>
                <div class="comment_wrapper main-comment-section">
                  <ul class="we-comment-dt">
                    <li>
                      <div class="comet-avatar">
                        <img src="assets/img/left-imgs/img-5.jpg" alt="" />
                      </div>
                      <div class="we-comment">
                        <a href="#" title="" class="user-name">Rock William</a>
                        <p>This is a beautiful photo.</p>
                        <div class="inline-itms">
                          <span>1 hour ago</span>
                          <a class="we-reply" href="#" title="Reply"
                            ><i class="fa fa-reply"></i
                          ></a>
                          <a href="#" title=""
                            ><i class="fas fa-thumbs-up"></i
                            ><span class="social-counts-reactions-count"
                              >20</span
                            ></a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="comet-avatar">
                        <img src="assets/img/left-imgs/img-10.jpg" alt="" />
                      </div>
                      <div class="we-comment">
                        <a href="#" title="" class="user-name"
                          >Amritpal Singh</a
                        >
                        <p>Awesome, Congratulations</p>
                        <div class="inline-itms">
                          <span>1 hour ago</span>
                          <a class="we-reply" href="#" title="Reply"
                            ><i class="fa fa-reply"></i
                          ></a>
                          <a href="#" title=""
                            ><i class="fas fa-thumbs-up"></i
                            ><span class="social-counts-reactions-count"
                              >20</span
                            ></a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="viewcmnts">
                        <span class="pointer">View more comments</span>
                      </div>
                    </li>
                    <li>
                      <div class="post-commet-textarea">
                        <div class="post-base-1 post_comment_combo">
                          <img src="assets/img/left-imgs/img-3.jpg" alt="" />
                          <div class="post-base-1">
                            <textarea
                              class="auto-resize comment-textarea textarea"
                              placeholder="Write a comment"
                              autocomplete="off"
                            ></textarea>
                            <div class="post-base-1 comment_option_footer">
                              <div class="img-add">
                                <input type="file" id="file4" />
                                <label for="file4"
                                  ><i class="fas fa-image"></i
                                ></label>
                              </div>
                              <div class="emoji-panel">
                                <button class="emoji-combo">
                                  <i class="fas fa-smile"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="full-width mb-30">
              <div class="recent-items">
                <div class="posts-list">
                  <div class="feed-shared-author-dt">
                    <div class="author-left">
                      <a href="#"
                        ><img
                          class="ft-plus-square job-bg-circle bg-cyan mr-0"
                          src="assets/img/left-imgs/img-2.jpg"
                          alt=""
                      /></a>
                    </div>
                    <div class="author-dts">
                      <a href="#" class="job-heading">Jassica William</a>
                      <p class="notification-text font-small-4">
                        <span class="time-dt">2 hour ago</span>
                        <span class="job-loca"
                          ><i class="fas fa-location-arrow"></i
                          ><ins class="state-name">Ludhiana,</ins>India</span
                        >
                      </p>
                    </div>
                    <div
                      class="
                        ellipsis-options
                        post-ellipsis-options
                        dropdown dropdown-account
                      "
                    >
                      <a
                        href="#"
                        class="option-eps"
                        role="button"
                        data-bs-toggle="dropdown"
                        ><i class="fas fa-ellipsis-h"></i
                      ></a>
                      <ul
                        class="
                          dropdown-menu dropdown-ellipsis dropdown-menu-end
                        "
                      >
                        <li class="media-list">
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-eye-slash icon-mr1"></i>Hide this
                            post</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="far fa-bookmark icon-mr1"></i>Save</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-link icon-mr1"></i>Copy Link</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-times-circle icon-mr1"></i
                            >Unfollow Jassica</a
                          >
                          <a href="#" class="item channel_item"
                            ><i class="fas fa-flag icon-mr1"></i>Report this
                            post</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="post-meta">
                  <div class="feed-shared-dt-1">
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer vel urna pellentesque, sodales diam a, dictum
                      orci. Nulla vehicula augue quis velit.
                    </p>
                    <div class="post-img">
                      <img src="assets/img/post-1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="feed-shared-result">
                    <ul class="social-counts">
                      <li class="social-counts-items">
                        <button class="social-dts-social-counts__count-value">
                          Like<span class="social-counts-reactions-count"
                            >240</span
                          >
                        </button>
                      </li>
                      <li class="social-counts-items">
                        <button
                          class="
                            social-dts-social-counts__count-value
                            all_comments
                          "
                        >
                          Comments<span class="social-counts-reactions-count"
                            >10</span
                          >
                        </button>
                      </li>
                      <li class="social-counts-items">
                        <button class="social-dts-social-counts__count-value">
                          Share<span class="social-counts-reactions-count"
                            >6</span
                          >
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="feed-shared-social-actions">
                    <div class="reactions-button-left">
                      <button class="react-button__trigger action-btn">
                        <i class="fas fa-thumbs-up icon-mr"></i>Like
                      </button>
                      <button
                        class="react-button__comment action-btn leave_a_comment"
                      >
                        <i class="fas fa-comment-alt icon-mr"></i>Comment
                      </button>
                    </div>
                    <div class="reactions-button-right">
                      <button class="react-button__share action-btn">
                        <i class="fas fa-share-alt icon-mr"></i>Share
                      </button>
                    </div>
                  </div>
                </div>
                <div class="comment_wrapper main-comment-section">
                  <ul class="we-comment-dt">
                    <li>
                      <div class="comet-avatar">
                        <img src="assets/img/left-imgs/img-5.jpg" alt="" />
                      </div>
                      <div class="we-comment">
                        <a href="#" title="" class="user-name">Rock William</a>
                        <p>This is a beautiful photo.</p>
                        <div class="inline-itms">
                          <span>1 hour ago</span>
                          <a class="we-reply" href="#" title="Reply"
                            ><i class="fa fa-reply"></i
                          ></a>
                          <a href="#" title=""
                            ><i class="fas fa-thumbs-up"></i
                            ><span class="social-counts-reactions-count"
                              >20</span
                            ></a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="comet-avatar">
                        <img src="assets/img/left-imgs/img-10.jpg" alt="" />
                      </div>
                      <div class="we-comment">
                        <a href="#" title="" class="user-name"
                          >Amritpal Singh</a
                        >
                        <p>Awesome, Congratulations</p>
                        <div class="inline-itms">
                          <span>1 hour ago</span>
                          <a class="we-reply" href="#" title="Reply"
                            ><i class="fa fa-reply"></i
                          ></a>
                          <a href="#" title=""
                            ><i class="fas fa-thumbs-up"></i
                            ><span class="social-counts-reactions-count"
                              >20</span
                            ></a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="comet-avatar">
                        <img src="assets/img/left-imgs/img-6.jpg" alt="" />
                      </div>
                      <div class="we-comment">
                        <a href="#" title="" class="user-name">Zoena Singh</a>
                        <p>
                          <a href="#" class="tag-user">@jassicawilliam</a>hi how
                          are you?
                        </p>
                        <div class="inline-itms">
                          <span>1 hour ago</span>
                          <a class="we-reply" href="#" title="Reply"
                            ><i class="fa fa-reply"></i
                          ></a>
                          <a href="#" title=""
                            ><i class="fas fa-thumbs-up"></i
                            ><span class="social-counts-reactions-count"
                              >20</span
                            ></a
                          >
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="viewcmnts">
                        <span class="pointer">View more comments</span>
                      </div>
                    </li>
                    <li>
                      <div class="post-commet-textarea">
                        <div class="post-base-1 post_comment_combo">
                          <img src="assets/img/left-imgs/img-2.jpg" alt="" />
                          <div class="post-base-1">
                            <textarea
                              class="auto-resize comment-textarea textarea"
                              placeholder="Write a comment"
                              autocomplete="off"
                            ></textarea>
                            <div class="post-base-1 comment_option_footer">
                              <div class="img-add">
                                <input type="file" id="file5" />
                                <label for="file5"
                                  ><i class="fas fa-image"></i
                                ></label>
                              </div>
                              <div class="emoji-panel">
                                <button class="emoji-combo">
                                  <i class="fas fa-smile"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="loading-btn">
              <button class="process-btn btn-hover" type="button">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          </main>
          <aside
            class="
              col col-xl-3
              order-xl-1
              col-lg-6
              order-lg-2
              col-md-6 col-sm-12 col-12
            "
          >
            <div class="full-width rrmt-30 lgmt-30">
              <div class="user-profile">
                <div class="username-dt dpbg-1">
                  <div class="usr-pic">
                    <img src="assets/img/left-imgs/img-5.jpg" alt="" />
                  </div>
                </div>
                <div class="username-main-dt">
                  <h4>Joginder Singh</h4>
                  <span>Frontend Developer</span>
                </div>
                <div class="user-info__badges">
                  <ul class="badges">
                    <li>
                      <span
                        class="
                          community-badges__badge-wrapper--s
                          community-badges__badge-wrapper--responsive-xs
                        "
                      >
                        <img
                          src="assets/img/badges/master.svg"
                          alt="Earned more than $64k"
                          class="community-badges__badge--s"
                          title="Earned more than $64k"
                        />
                      </span>
                    </li>
                    <li>
                      <span
                        class="
                          community-badges__badge-wrapper--s
                          community-badges__badge-wrapper--responsive-xs
                        "
                      >
                        <img
                          src="assets/img/badges/trending.svg"
                          alt="Trending"
                          class="community-badges__badge--s"
                          title="Trending"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="user-info__sections">
                  <ul class="info__sections">
                    <li>
                      <div class="all-info__sections">
                        <span class="all-info__left">Profile Views</span>
                        <span class="all-info__right">92</span>
                      </div>
                    </li>
                    <li>
                      <div class="all-info__sections">
                        <span class="all-info__left">Followers</span>
                        <span class="all-info__right">50</span>
                      </div>
                    </li>
                    <li>
                      <div class="all-info__sections">
                        <span class="all-info__left">Following</span>
                        <span class="all-info__right">120</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="profile-link">
                  <a href="my_profile_timeline.html">Profile View</a>
                </div>
              </div>
            </div>
          </aside>
          <aside
            class="
              col col-xl-3
              order-xl-3
              col-lg-6
              order-lg-3
              col-md-6 col-sm-12 col-12
            "
          >
            <div class="full-width mb-30 rrmt-30 lgmt-30">
              <div class="user-profile">
                <div class="explore-heading">
                  <h4>Top</h4>
                </div>
                <div class="user-info__sections">
                  <ul class="info__sections p-0">
                    <li class="broswe-member-container ember-view">
                      <a href="#" class="browse-profile">
                        <img
                          class="broswse-member-image"
                          src="assets/img/jobs-imgs/img-5.jpg"
                          alt=""
                        />
                        <div class="browse-member-detail">
                          <h4 class="browse-member-name">Graphicriver</h4>
                          <span class="browse-member-headline"
                            >45K Followers</span
                          >
                        </div>
                      </a>
                      <div class="browse-member-btn">
                        <button
                          class="all-info__right add-btn request-btn"
                          title="Add Group"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="profile-link">
                  <a href="suggested_pages.html">View All</a>
                </div>
              </div>
            </div>

            <div class="full-width mb-30 dstp-bnr-dt">
              <div class="banner-item">
                <div class="banner-img">
                  <img src="assets/img/banners/banner-1.jpg" alt="" />
                  <div class="banner-overlay">
                    <span>Learning Plateform</span>
                    <h4>Keep learning in the moments that matter.</h4>
                    <button
                      class="main-btn color btn-hover"
                      onclick="window.location.href='all_learning.html'"
                    >
                      See Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="full-width mb-30 res-bnr-dt">
              <div class="responsive-banner">
                <span>Learning Plateform</span>
                <h4>Keep learning in the moments that matter.</h4>
                <button
                  class="main-btn color btn-hover"
                  onclick="window.location.href='all_learning.html'"
                >
                  See Courses
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-bottom-items">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="footer-bottom-links">
                <div class="footer-logo" id="logo-footer">
                  <a href="index.html"><img src="assets/img/logo.png" alt="" /></a>
                  <img class="logo-inverse" src="assets/img/dark-logo.png" alt="" />
                </div>
                <ul class="ul-ft-links">
                  <li><a href="terms_of_use.html">Terms of Use</a></li>
                  <li><a href="privacy_policy.html">Privacy Policy</a></li>
                  <li>
                    <a href="request_refund_policy.html">Request Refund</a>
                  </li>
                  <li><a href="about_us.html">About</a></li>
                  <li><a href="contact_us.html">Contact Us</a></li>
                </ul>
                <div class="micko-copyright">
                  <p>
                    <i class="fas fa-copyright"></i>Copyright 2021 Micko by
                    <a href="#">Gambolthemes</a>. All Right Reserved.
                  </p>
                </div>
                <ul class="social-ft-links">
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
            </div>
        );
    }
}

export default Publication;
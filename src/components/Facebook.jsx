import "./style.css"
function Facebook() {
    return(
        <>
        <nav>
            <div className="nav-left">
                <img src="./images/facebook.jpg" alt="Logo" />
                <span className="material-symbols-light--search"></span>
    
            </div>

            <div className="nav-middle">
                <a href="#" className="active">
                    <i className="fa fa-home"></i>
                </a>
                <a href="#">
                    <span className="ph--video-fill"></span>
                </a>

                <a href="#">
                    <span className="mdi--marketplace-outline"></span>
                </a>

                <a href="#">
                    <span className="ic--baseline-groups-2"></span>
                </a>

                <a href="#">
                    <span className="streamline--cloud-gaming-1-solid"></span>
                </a>
            </div>

            <div className="nav-right">
                <span className="icon-park--application-menu"></span>
                <a href="#">
                    <span className="ri--messenger-fill"></span>
                </a>

                <a href="#">
                    <i className="fa fa-bell"></i>
                </a>

                <a href="#">
                    <i className="profile"></i>
                </a>
            </div>
        </nav>


        <div className="container">
            <div className="left-panel">
                <ul>
                    <li>
                        <span className="profile"></span>
                        <p>Jayson Baltasar</p>
                    </li>
                    <li>
                        <i className="fa fa-user-friends"></i>
                        <p>Friends</p>
                    </li>
                    <li>
                        <i className="fa fa-play-circle"></i>
                        <p>Videos</p>
                    </li>
                    <li>
                        <i className="fa fa-flag"></i>
                        <p>Pages</p>
                    </li>
                    <li>
                        <i className="fa fa-users"></i>
                        <p>Groups</p>
                    </li>
                    <li>
                        <i className="fa fa-bookmark"></i>
                        <p>Bookmark</p>
                    </li>
                    <li>
                        <i className="fab fa-facebook-messenger"></i>
                        <p>Inbox</p>
                    </li>
                    <li>
                        <i className="fas fa-calendar-week"></i>
                        <p>Events</p>
                    </li>
                    <li>
                        <i className="fa fa-bullhorn"></i>
                        <p>Ads</p>
                    </li>
                    <li>
                        <i className="fas fa-hands-helping"></i>
                        <p>Offers</p>
                    </li>
                    <li>
                        <i className="fas fa-briefcase"></i>
                        <p>Jobs</p>
                    </li>
                    <li>
                        <i className="fa fa-star"></i>
                        <p>Favourites</p>
                    </li>
                </ul>

                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Advance</a>
                    <a href="#">More</a>
                </div>
            </div>


            <div className="middle-panel">

                <div className="story-section">

                    <div className="story create">
                        <div className="dp-image">
                            <img src="./images/Jayson.png" />
                        </div>
                        <span className="dp-container">
                            <i className="fa fa-plus"></i>
                        </span>
                        <span className="name">Create Story</span>
                    </div>


                    <div className="story">
                        <img src="./images/julie.png" alt="julie's story" />
                        <div className="dp-container">
                            <img src="./images/julie.png" alt="" />
                        </div>
                        <p className="name">Julie Anne Mora Roncejero</p>
                    </div>

                    <div className="story">
                        <img src="./images/ericc.png" alt="Story image"/>
                        <span className="dp-container">
                            <img src="./images/eric.png" alt="Profile pic"/>
                        </span>
                        <span className="name">Eric John Nito</span>
                    </div>

                    <div className="story">
                        <img src="./images/cruzz.png" alt="Story image" />
                        <span className="dp-container">
                            <img src="./images/cruz.png" alt="Profile pic" />
                        </span>
                        <span className="name">Justine Beriña Cruz</span>
                    </div>

                    <div className="story">
                        <img src="./images/Banzuelaa.jpg" alt="Story image"/>
                        <span className="dp-container">
                            <img src="./images/Banzuela.jpg" alt="Profile pic"/>
                        </span>
                        <span className="name">John Michael Banzuela </span>
                    </div>
                </div>

                <div className="post create">
                    <div className="post-top">
                        <div className="dp">
                            <img src="./images/Jayson.png" alt="" />
                        </div>
                        <input type="text" placeholder="What's on your mind, Jayson ?" />
                    </div>
                    
                    <div className="post-bottom">
                        <div className="action">
                            <i className="fa fa-video"></i>
                            <span>Live video</span>
                        </div>
                        <div className="action">
                            <i className="fa fa-image"></i>
                            <span>Photo/Video</span>
                        </div>
                        <div className="action">
                            <i className="fa fa-smile"></i>
                            <span>Feeling/Activity</span>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="post-top">
                        <div className="dp">
                            <img src="./images/eric.png" alt=""/>
                        </div>
                        <div className="post-info">
                            <p className="name">Eric John Nito</p>
                            <span className="time">12 hrs ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>

                    <div className="post-content">
                    rg +1 so bakong dangag ta baka ma labok ko lamang
                    </div>
                    
                    <div className="post-bottom">
                        <div className="action">
                            <i className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </div>
                        <div classNaem="action">
                            <i className="far fa-comment"></i>
                            <span>Comment</span>
                        </div>
                        <div className="action">
                            <i className="fa fa-share"></i>
                            <span>Share</span>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="post-top">
                        <div className="dp">
                            <img src="./images/eric.png" alt="" />
                        </div>
                        <div className="post-info">
                            <p className="name">Eric John Nito</p>
                            <span className="time">2 days ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>

                    <div className="post-content">
                        Shopping
                        <img src="./images/postniric.jpg" />
                    </div>
                    
                    <div className="post-bottom">
                        <div className="action">
                            <i className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </div>
                        <div className="action">
                            <i className="far fa-comment"></i>
                            <span>Comment</span>
                        </div>
                        <div className="action">
                            <i class="fa fa-share"></i>
                            <span>Share</span>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="post-top">
                        <div className="dp">
                            <img src="./images/julie.png" alt=""/>
                        </div>
                        <div className="post-info">
                            <p className="name">Julie Anne Roncejero</p>
                            <span className="time">1 week ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="post-content">
                        Peace
                        <img src="./images/peace.jpg" alt=""/>
                    </div>
                    <div className="post-bottom">
                        <div className="action">
                            <i className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </div>
                        <div className="action">
                            <i className="far fa-comment"></i>
                            <span>Comment</span>
                        </div>
                        <div className="action">
                            <i className="fa fa-share"></i>
                            <span>Share</span>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <div className="post-top">
                        <div className="dp">
                            <img src="./images/Ken.jpg" alt=""/>
                        </div>
                        <div className="post-info">
                            <p className="name">Ken C. Barcelon</p>
                            <span className="time">5 mins ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="post-content">
                        advance happy birthday, my little rockstar!! your sole existence gave me a shoulder to lean on whenever I feel so low. bente cinco ka na pero baby pa rin kita.
                        <img src="./images/waifu.png" alt="" />
                    </div>
                    <div className="post-bottom">
                        <div className="action">
                            <i className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </div>
                        <div className="action">
                            <i className="far fa-comment"></i>
                            <span>Comment</span>
                        </div>
                        <div className="action">
                            <i className="fa fa-share"></i>
                            <span>Share</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="right-panel">
                <div className="pages-section">
                    <h4>Your pages</h4>
                

                    <a className='page' href="#">
                        <div className="dp">
                            <img src="/images/hub.jpg" alt=""/>
                        </div>
                        <p className="name">Eric Tutorials</p>
                    </a>
                </div>

                <div className="friends-section">
                    <h4>Friends</h4>
                    <a className='friend' href="#">
                        <div className="dp">
                            <img src="./images/eric.png" alt=""/>
                        </div>
                        <p className="name">Eric John Nito</p>
                    </a>

                    <a className='friend' href="#">
                        <div className="dp">
                            <img src="./images/julie.png" alt=""/>
                        </div>
                        <p className="name">Julie Anne</p>
                    </a>

                    <a className="friend" href="#">
                        <div className="dp">
                            <img src="./images/cruz.png" alt=""/>
                        </div>
                        <p className="name">Justine Beriña Cruz</p>
                    </a>

                    <a className="friend" href="#">
                        <div className="dp">
                            <img src="./images/Banzuela.jpg" alt=""/>
                        </div>
                        <p className="name">John Michael</p>
                    </a>

                    <a className="friend" href="#">
                        <div className="dp">
                            <img src="./images/Ken.jpg" alt=""/>
                        </div>
                        <p className="name">Ken C. Barcelon</p>
                    </a>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Facebook;

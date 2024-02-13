import React, {useState,useEffect} from 'react';
import '../css/forum_styles.css'
import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";

const TeamC_Forum = () => {
  const [discussionTitle, setDiscussionTitle] = useState('');
  const [discussionContent, setDiscussionContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [discussionPosts, setDiscussionPosts] = useState([]);

  const toggleDiscussionForm = () => {
    setShowDiscussionForm(!showDiscussionForm);
  };
  
  function postDiscussion() {
    var discussionTitleInput = document.getElementById("discussionTitle");
    var discussionContentInput = document.getElementById("discussionContent");
    
    // Retrieve the input values
    var discussionTitle = discussionTitleInput.value.trim();
    var discussionContent = discussionContentInput.value.trim();
    
    // Validate discussion title length
    if (discussionTitle.length > 200) {
    alert("Discussion title must not exceed 200 characters!");
    return;
    }
    
    // Validate special characters in the discussion title using a regular expression
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharacters.test(discussionTitle)) {
    alert("Special characters are not allowed in the discussion title!");
    return;
    }
    
    // Validate if both title and content are provided
    if (discussionTitle === '' || discussionContent === '') {
    alert("Discussion title and content are required!");
    return;
    }
    
        // Create a new discussion card
        var newDiscussionCard = document.createElement("div");
        newDiscussionCard.className = "c_forum_newdiscussioncard card row-hover pos-relative py-3 px-3 mb-3 border-top-0 border-right-0 border-bottom-0 rounded-0 discussion-container c_forum_discussioncontainer";
        
        var cardContent = `
            <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-sm-0">
                    <h5><a href="#" className="c_forum_discussiontext text-primary c_forum_posttitle" id="discussionTitle_${Date.now()}">${discussionTitle}</a></h5>
                    <p className="text-sm"><span className="op-6">Posted by</span> <a className="c_forum_discussiontext text-black" href="#">Your Name</a></p>
                </div>
                <div className="col-md-4 op-7 d-flex justify-content-end align-items-center">
                    <div className="row text-center op-3">
                        <div className="col px-5"> 
                            <a className="ion-ios-chatboxes-outline icon-1x c_forum_iconchatbox" href="#"></a> 
                            <span className="d-block text-sm">0 replies</span> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        newDiscussionCard.innerHTML = cardContent;
    
        // Add an event listener to the discussion title for redirection
        var discussionTitleElement = newDiscussionCard.querySelector(`#discussionTitle_${Date.now()}`);
        discussionTitleElement.addEventListener("click", function() {
            redirectToDiscussionDetails(discussionTitle, discussionContent);
        });
    
        // Insert the new discussion card before the first post
        var existingDiscussions = document.getElementById("discussionPosts");
        existingDiscussions.insertBefore(newDiscussionCard, existingDiscussions.firstChild);
    
        // Reset the input fields and hide the form
        document.getElementById("discussionTitle").value = "";
        document.getElementById("discussionContent").value = "";
        var discussionForm = document.getElementById("discussionForm");
        discussionForm.style.display = "none";
    
        // Show modal and set timeout to close it after 1 second
        var myModal = new bootstrap.Modal(document.getElementById('niceModal'));
        myModal.show();
    
        setTimeout(function () {
            myModal.hide();
        }, 1000); // Close the modal after 1 second
        
    }

    const redirectToDiscussionDetails = (title, content) => {
    const urlTitle = title.replace(/\s+/g, '-').toLowerCase();
    const url = `/discussion_detail/${urlTitle}/${encodeURIComponent(content)}`;
    //navigate("/"); // Use useNavigate instead of history.push
  };
  
  const searchDiscussions = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const updatedDiscussionPosts = discussionPosts.map(post => {
      const discussionTitle = post.title.toLowerCase();

      if (trimmedSearchTerm && discussionTitle.includes(trimmedSearchTerm)) {
        return { ...post, display: true };
      } else {
        return { ...post, display: false };
      }
    });

    setDiscussionPosts(updatedDiscussionPosts);
  };

  const toggleSearchButton = () => {
    //const searchButton = document.getElementById("searchButton"); //cannot reac
    const searchInput = document.getElementById("searchDiscussion");

    setIsSearchButtonDisabled(searchInput.value.trim() === "");
  };

  useEffect(() => {
    const searchInput = document.getElementById("searchDiscussion");

    searchInput.addEventListener('input', toggleSearchButton);

    return () => {
      searchInput.removeEventListener('input', toggleSearchButton);
    };
  }, []);

  
    return (
      <>
       <Team_D_HeaderV2/>
        <div className="container stretch-forum">
          <div className="row justify-content-center">
            {/* added padding top 1/31/24 -jake */}
            <div className="col-lg-9 mb-3 pt-4">
              <div className="row text-left mb-5">
                {/* <div className="col-lg-12 text-left mt-50">
                  <h1>FORUM</h1>
                </div> */}
                <div className="col-lg-9 mb-3">
                  <div className="row text-left mb-5">
                    <div className="col-lg-6">
                      <button className="c_forum_successdiscussion btn btn-lg btn-success rounded-5 py-2 px-4 mt-5 ml-5 bg-op-6 roboto-bold" onClick={toggleDiscussionForm}>
                        Add discussion
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group mt-5 ml-5 pr-10">
                        <input type="text" className="form-control form-control-lg search-bar c_forum_searchbar " id="searchDiscussion" placeholder="Search topic..." onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-outline-success" type="button" onClick={searchDiscussions} disabled={isSearchButtonDisabled}>
                          <i className="ion-ios-search "></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDiscussionForm && (
                    <div id="c_forum_discussionForm">
                      <form>
                        <div className="form-group">
                          <label htmlFor="discussionTitle">Discussion Title</label>
                          <input type="text" className="form-control" id="discussionTitle" placeholder="Enter discussion title" onChange={(e) => setDiscussionTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="discussionContent">Discussion Content</label>
                          <textarea className="form-control" id="c_forum_discussionContent" rows="3" placeholder="Enter discussion content" onChange={(e) => setDiscussionContent(e.target.value)} />
                        </div>
                        <div className="d-md-flex justify-content-md-end">
                          <button type="button" className="btn btn-success" onClick={postDiscussion} style={{ marginTop: '10px', paddingLeft: '11px' }}>
                            Post
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
                <div id="discussionPosts">
                  {discussionPosts.map(post => (
                    <div key={post.id} style={{ display: post.display ? 'block' : 'none' }}>
                      <h5><a href={`/discussion/${post.title}`} className="c_forum_discssiontext text-primary">{post.title}</a></h5>
                      <p className="text-sm"><span className="op-6">Posted by</span> <a className="c_forum_discussiontext text-black" href="#">Your Name</a></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade top-right" id="niceModal" tabIndex="-1" aria-labelledby="niceModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="c_forum_modalcont modal-content">
                <div className="modal-body">Discussion posted!</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default TeamC_Forum;

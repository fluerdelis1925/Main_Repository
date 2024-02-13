import 'bootstrap/dist/css/bootstrap.min.css';

function ModalSeeMore() {
    return (
        <>
            <div class="modal fade" id="modal_seemoresql" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="exampleModalLongTitle">The SQL Query</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        In a SQL querying workshop, participants delve into fundamental concepts such as syntax, database design, and optimization, empowering them with practical skills to write efficient queries.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal_seemoresvn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="exampleModalLongTitle">Version Control: Subversion</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        Apache Subversion (SVN) is a centralized version control system, facilitating collaborative
                        software development through version tracking, allowing multiple developers to work on projects
                        concurrently.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal_seemorehtml" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="exampleModalLongTitle">HTML Programming</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        HTML (Hypertext Markup Language) is the standard language for creating web pages, defining the
                        structure and content using tags, ensuring compatibility and accessibility across various browsers.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: "#0e3b03", color: "#ffffff", borderRadius: "20px", fontSize: "15px", }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSeeMore;
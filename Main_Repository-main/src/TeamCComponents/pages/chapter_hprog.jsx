import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";

function TeamC_ChapterHprog() {
  return (
    <>
      <Team_D_HeaderV2 />
      {/* Back button */}
      <Link to='/course' className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content', }}>
        <div className="d-flex align-items-center" style={{ marginTop: '1rem' }}>
          <div>
            <img src="../../src/assets/TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{
              transition: 'transform .1s', color: '#ffffff',
              marginLeft: '1rem', width: '2rem', height: '2rem',
            }} />
          </div>
          <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem', }}>Back</span>
        </div>
      </Link>
      <div className="container mt-4 mx-auto">
        <h2 className="text-left mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>HTML Programming Chapters</h2>
        <hr />

        {/* Chapter 1 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{
            willChange: 'filter',
            transition: 'filter 300ms', marginTop: '10px', backgroundColor: '#126912', borderRadius: '1rem',
          }}>
            <Link to="/course1_hprog" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{
                backgroundColor: '#126912', borderRadius: '1rem',
                backgroundColor: '#126912', borderRadius: '10px'
              }}>
                CHAPTER 1: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain" style={{ marginTop: '0.6rem', marginLeft: '0.99rem', }}>
            <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white" style={{
              backgroundColor: '#126912', width: '4rem',
              height: '4rem', borderRadius: '10px',
            }}>
              <span>-$-</span>
            </div>
          </div>

        </div>

        {/* Chapter 2 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{
            willChange: 'filter',
            transition: 'filter 300ms', marginTop: '10px', backgroundColor: '#126912', borderRadius: '1rem',
          }}>
            <Link to="/course2_hprog" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{
                backgroundColor: '#126912', borderRadius: '1rem',
                backgroundColor: '#126912', borderRadius: '10px'
              }}>
                CHAPTER 2: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain" style={{ marginTop: '0.6rem', marginLeft: '0.99rem', }}>
            <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white" style={{
              backgroundColor: '#126912', width: '4rem',
              height: '4rem', borderRadius: '10px',
            }}>
              <span>-$-</span>
            </div>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{
            willChange: 'filter',
            transition: 'filter 300ms', marginTop: '10px', backgroundColor: '#126912', borderRadius: '1rem',
          }}>
            <Link to="/course3_hprog" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{
                backgroundColor: '#126912', borderRadius: '1rem',
                backgroundColor: '#126912', borderRadius: '10px'
              }}>
                CHAPTER 3: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain" style={{ marginTop: '0.6rem', marginLeft: '0.99rem', }}>
            <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white" style={{
              backgroundColor: '#126912', width: '4rem',
              height: '4rem', borderRadius: '10px',
            }}>
              <span>-$-</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamC_ChapterHprog;

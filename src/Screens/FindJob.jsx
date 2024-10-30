import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import { FindJobs } from '../utils/Data';
import Footer from '../Components/Footer';
import { FaHeart} from "react-icons/fa";


const FindJob = () => {

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const totalPages = Math.ceil(FindJobs.length / itemsPerPage);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = FindJobs.slice(startIndex, endIndex);



  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
        <Navbar/>
        <section class="find jobs">
        <p>Looking for a  job as a developer, customer service rep, designer or sales professional, etc? Browse openings in those categories and more below. We hand curate this list to showcase the best  job opportunities in the most recruited job categories.</p>


        <div class="catg">
            <div class="catg1">
                <select name="" id="">
                    <option value="">Category</option>
                    <option value="1">Front-end Developer</option>
                    <option value="2">Product Designer</option>

                </select>

                <input type="search" name="" id="" placeholder="Search Freelancer"/>
                <button type="submit">search</button>
            </div>

            <div class="filter">
                <img src="assets/images/filter.png" alt=""/>
                <select name="" id="">
                    <option value="">Filter</option>
                    <option value="">Filter</option>

                </select>
            </div>
        </div>
        

        <div class="freelancer">
            <div class="tops top-jobs">
                <div class="top1">
                    <input type="checkbox" name="" id=""/>
                    <p>1,000 Results</p>
                </div>

                <div class="top2">
                    <h5>Sort by:</h5>
                    <select name="" id="">
                        <option value="1">Relevance</option>
                        <option value="2">Relevance</option>
                    </select>
                </div>
            </div>


             {
                    currentItems && currentItems.map(item =>(
                        <div class="second find-job">
                            
                            <div className='job-flex'>

                                <img src={item.img} alt="" />
                                <div>
                                    <h4>{item.role}</h4>
                                    <p>
                                      <span>{item.company}</span> 
                                      <span>{item.stack}</span> 
                                      <button>{item.type}</button>
                                    </p>
                                </div>

                            </div>

                            <div className='job-time'>
                              <FaHeart/>
                              <p>6 hours ago</p>

                            </div>


                        </div>


                        
                    ))
                } 


            


            
        </div> 


        <div class="next">
            


            {/* Pagination buttons */}
            <span onClick={prevPage} disabled={currentPage === 1}>
            Prev
        </span>


        {/* Render page buttons */}
      {Array.from({ length: totalPages }).map((_, index) => (
        <span key={index} onClick={() => goToPage(index + 1)}>
          {index + 1}
        </span>
      ))}


    <span onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </span>
    </div>

        {/* </div> */}
     </section>
        <Footer/>
    </div>
  )
}

export default FindJob
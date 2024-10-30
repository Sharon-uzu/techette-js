import React, {useState, useEffect} from 'react';
import img1 from '../Images/top1.png'
import img2 from '../Images/top2.png';
import { FaHeart} from "react-icons/fa";
import work from '../Images/phones.png';
import { FaFacebook} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FindTalents } from '../utils/Data';




const FindFreelancers = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 

  const totalPages = Math.ceil(FindTalents.length / itemsPerPage);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = FindTalents.slice(startIndex, endIndex);



  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };



//     const [talents, setTalents] = useState(FindTalents)
//     const [page, setPage] = useState(1)

//     var perPage = 2
//     var numberOfPages = FindTalents.length / perPage
//     var numberOfPagesArray = []
//     for(var i=0; i<numberOfPages; i++) {
//         numberOfPagesArray.push(i)
//     }
//     var startIndex = 0
//     var endIndex

// function filterTalents(currentPage){
//     if(currentPage == 1){
//         startIndex = 0
//     }else{
//         startIndex = startIndex + perPage
//     }
//      endIndex = (startIndex + perPage)-1
//     var filteredTalentsArray = [];
//     var start = false
//     // console.log("start index:", startIndex)
//     // console.log("end index:", endIndex)
//     for(var i=0; i<talents.length; i++){
//         if(startIndex == i){
//             start = true
//         }
//         if(start){
//             filteredTalentsArray.push(talents[i])
//         }
//         if(endIndex == i){
//             return filteredTalentsArray
//         }
//     }
// }




// useEffect(()=>{
//     setTalents(filterTalents(page))
//     console.log(talents);
// }, [page])

// function handlePrev(){

// }

// function handleNext(){
//     // setTalents(filterTalents(page))
//     setPage(2);
// }

// function refreshTalents(){
//     setTalents(filterTalents(page))
// }
  return (
    <div>
        <Navbar/>
        <section class="find">
        <h4>Find and Hire Freelancers</h4>
        <p>We found 1,000 Freelancers offering 1,000 freelancing services online.FIND FREELANCERS</p>

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
            <div class="tops">
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

           
            {/* Freelancer

        {
                    talents && talents.map(item =>(
                        <div class="second">

                <div class="content">
                    <div class="content1">
                        <input type="checkbox" name="" id=""/>
                        <img src={item.img} alt=""/>
                        <div class="info">
                            <h6>{item.name}</h6>
                            <h5>{item.price}</h5>
                        </div>
                    </div>
    
                    <div class="content2">
                        <FaHeart className='hrt'/>
                    </div>
                </div>

                <div class="content-c">
                    <img src={item.workpix} alt=""/>
                    <div class="txts">
                        <h3>{item.track} <span>{item.price}</span></h3>
                        <p>{item.text}</p>
                    </div>
                </div>

                <div class="portf">
                    <a href={item.portfolio} className='portfolio'>Portfolio</a>

                    <div className="links">

                        <a href={item.fb} className="abt"><FaFacebook className='icons-social'/></a>
                        <a href={item.twitter} className="abt"><FaTwitter className='icons-social'/></a>
                        <a href={item.ins} className="abt"><FaInstagram className='icons-social'/></a>

                    </div>
                    

                </div>

            </div>


                        
                    ))
                } */}

            
             {/* Freelancer */}


             {
                    currentItems && currentItems.map(item =>(
                        <div class="second">

                <div class="content">
                    <div class="content1">
                        <input type="checkbox" name="" id=""/>
                        <img src={item.img} alt=""/>
                        <div class="info">
                            <h6>{item.name}</h6>
                            <h5>{item.price}</h5>
                        </div>
                    </div>
    
                    <div class="content2">
                        <FaHeart className='hrt'/>
                    </div>
                </div>

                <div class="content-c">
                    <img src={item.workpix} alt=""/>
                    <div class="txts">
                        <h3>{item.track} <span>{item.price}</span></h3>
                        <p>{item.text}</p>
                    </div>
                </div>

                <div class="portf">
                    <a href={item.portfolio} className='portfolio'>Portfolio</a>

                    <div className="links">

                        <a href={item.fb} className="abt"><FaFacebook className='icons-social'/></a>
                        <a href={item.twitter} className="abt"><FaTwitter className='icons-social'/></a>
                        <a href={item.ins} className="abt"><FaInstagram className='icons-social'/></a>

                    </div>
                    

                </div>

            </div>


                        
                    ))
                } 


            


            
        </div> 


        <div class="next">
            {/* <span onClick={handlePrev}>first</span> */}
            {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span> */}
            {/* {
                numberOfPagesArray.map((i)=>{
                    return (<span onClick={()=>{
                        console.log("Number of pages")
                        setPage(2)
                        refreshTalents()

                    }
                    }>{i+1}</span>)
                })
            }
          
            <span onClick={handleNext}>Next</span> */}


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

export default FindFreelancers
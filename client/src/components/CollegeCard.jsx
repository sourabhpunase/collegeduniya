import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import data from '../assets/colleges.json';
import { AiOutlineDownload } from "react-icons/ai";
import './CollegeCard.css';
import { TiInputChecked } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CollegeCard = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const observer = useRef();

  useEffect(() => {
    const fetchColleges = () => {
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      setColleges(data.colleges.slice(0, endIndex));
    };

    fetchColleges();

    // Clean up the IntersectionObserver
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [page]);

  // IntersectionObserver callback for infinite scroll
  const lastCollegeRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  // Function to handle sorting
  const handleSort = (sortBy) => {
    if (sortBy === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortBy);
      setSortOrder('asc');
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort function
  const compareFunction = (a, b) => {
    const valueA = a[sortBy].toString().toLowerCase();
    const valueB = b[sortBy].toString().toLowerCase();

    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  };

  // Filter and sort colleges based on search term and sort options
  const filteredColleges = colleges
    .filter((college) =>
      college.college_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      return compareFunction(a, b);
    });

  return (
    <div className="college-card">
    <div className="search-sort-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by college name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="sort-dropdown">
        <span className="sort-label">Sort by:</span>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="ranking">CD Rank</option>
          <option value="college_name">Colleges</option>
          <option value="discounted_fees">Course Fees</option>
          <option value="nearest_place">Placement</option>
          <option value="rating">User Review</option>
        </select>
        <button
          className={`sort-order ${sortOrder === 'asc' ? 'asc' : 'desc'}`}
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          {sortOrder === 'asc' ? '▼' : '▲'}
        </button>
      </div>
    </div>
    <div className="table-container" id="table-container">
      <table className="table">
        <thead>
          <tr className='table-head'>
            <th onClick={() => handleSort('ranking')}>
              CD Rank {sortBy === 'ranking' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
            <th onClick={() => handleSort('college_name')}>
              Colleges {sortBy === 'college_name' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
            <th onClick={() => handleSort('discounted_fees')}>
              Course Fees {sortBy === 'discounted_fees' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
            <th onClick={() => handleSort('nearest_place')}>
              Placement {sortBy === 'nearest_place' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
            <th onClick={() => handleSort('rating')}>
              User Review {sortBy === 'rating' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
            <th onClick={() => handleSort('ranking')}>
              Ranking {sortBy === 'ranking' && <span className={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}></span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredColleges.map((college, index) => (
            <tr key={college.id} ref={index === filteredColleges.length - 1 ? lastCollegeRef : null}>
              <td>#{college.id}
              {college.promoted && (
                  <div className="promotion-banner">
                    Featured
                  </div>
                )}
              </td>
              <td>
                <div className="main-container">

                
                <div className='name-container'>
                  <div>
                    <img className='clg-img' src={college.image} alt='images' 
                    onError={(e)=>{
                      e.target.onerror=null;
                      e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl8qSeP294TtnF1fnHgXyuazBlFEsW9dk8NATFnTR8LYTM-GrfYP9UsksGW7HUPBFSN8&usqp=CAU"
                    }}
                    />
                  </div>
                  <div>
                  <p className='college-name'>{college.college_name}</p>
                  <p className='college-place'>
                    {college.nearest_place} | {college.approved}
                  </p>

                  <div className='cutoff'>
                  <select
         
        >
          <option value="">{college.course}</option>
          <option value="ranking">BSC</option>
          <option value="college_name">BCA</option>
          <option value="discounted_fees">MCA</option>
          <option value="nearest_place">M.Tech</option>
          <option value="rating">PHD</option>
        </select>
        <p>JEE-Advanced 2023 Cutoff:{college.cutoff}</p>
                  </div>
             
                  </div>
                  </div>
                  <div className='apply-now'>

<span className='apply'><AiOutlineArrowRight />Apply now </span><span className='download'><AiOutlineDownload />Download</span>

<span className="compare"><input type="checkbox"/>Compare</span>

</div>
      
  </div>
            
              </td>
              <td><p className="fees">
              &#8377;{college.original_fees}
                </p>
                <p className="course">{college.course}</p>
                <p className="course">{college.fees_cycle}</p>
               
               <p className="compare-fee">
               <AiOutlineArrowLeft /><AiOutlineArrowRight style={{marginTop:"-8px"}} />Compare Fees

                </p> 
              
              </td>
              <td>
              
                <p className="fees">{college.average_package}</p>
           <p className="course"> Average Package</p>
   <p className="fees">{college.highest_package}</p>
   <p className="course">Highest Package</p>
              </td>
              <td>
                
                <p className="star">
                  
              <AiOutlineStar style={{color:"orangered"}} />{college.rating}/5
              </p>
              <p className="review">Based on {college.users} User Reviews</p>
             <p className="based-on"><TiInputChecked />
             Best in Social Life
             </p>
              </td>
             
              <td>
            <p>#{college.ranking}/<span style={{color:"orangered"}}>132</span> in India
              </p>    
              <p style={{display:"flex" ,alignItems:"center",gap:"6px",justifyContent:"center"}}><img style={{height:"24px", width:"24px"}}  src="https://seeklogo.com/images/S/shark-week-logo-C5E77BD763-seeklogo.com.png"
              
              />  2023
              </p>
                <p className="company">{college.companies[0]}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  </div>
  );
};

export default CollegeCard;

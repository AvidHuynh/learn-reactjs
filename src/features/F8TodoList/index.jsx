import React, { useState } from 'react';
import PropTypes from 'prop-types';

F8TodoList.propTypes = {
};

function F8TodoList(props) {
  const localJob = JSON.parse(localStorage.getItem('jobs'));
  const [jobs, setJobs] = useState(localJob ?? []);
  const [job, setJob] = useState('')
  
    function hanldeAddTodo() {
      if (job==='') return
      // add new job in setJobs
      setJobs(prev => {
        const newJob = [...prev, job]
        const jsonJob = JSON.stringify(newJob);
        localStorage.setItem('jobs',jsonJob)
        return newJob;
      });
      setJob('')
    }
         
    return (
      <div style={{ marginLeft: "50px" }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={hanldeAddTodo}>ADD</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    );
}

export default F8TodoList;
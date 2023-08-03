import React from 'react';
import { WorkData } from '../../common/data/work';
import Separator from "../../common/separater/Separator"
import NotWork from './NotWork';
import "./work.css";
import WorkCard from './workCard';

const Work = () => {
  const data = WorkData;
  return <div className='work'>
    <Separator />
    <label className='section-title'>Work</label>
  <div className="work-list">
    {data && data.map((item)=>{
      return(
        <div className="work-section">
            <WorkCard item={item}/>
        </div>
      )
    })}
    <div className="not-work">
      <NotWork />
    </div>
  </div>
  </div>;
};

export default Work;

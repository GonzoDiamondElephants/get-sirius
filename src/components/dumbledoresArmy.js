import React, {useEffect} from 'react';
import axios from 'axios';

const DumbledoresArmy = () => {
  let studentsImg = [];

  const studentPhotos = async() => {
    let allStudents = await axios.get(`${process.env.REACT_APP_API}/student`)
    allStudents = allStudents.data;

    let set = new Set();

    while(studentsImg.length < 10 ){
      let index = Math.floor(Math.random() * Math.floor(allStudents.length));
      if(set.has(index)){continue}
      else {
        studentsImg.push(
          <img 
          key={index}
          className="td"
          src={allStudents[index].picture} alt={'DumbledoresArmy'}
          />
        )
        set.add(index)
        continue;
      }
    }


    return(
      <>
      {studentsImg}
      </>
    )

  }
  studentPhotos();


}

export default DumbledoresArmy;
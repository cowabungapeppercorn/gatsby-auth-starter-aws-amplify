import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const TalksList = () => {
  return (<StaticQuery
    query={graphql`
      query {
        dataJson {
          talks {
            session
            time_start
            faculty {
              first_name
              last_name
              role
            }
          }
        }
      }  
    `}
    render={data => (
      <>
        <ul>{displayEventData(data)}</ul>
      </>
    )}
  />);
}

const displayEventData = (data) => {
  const arr = sortByTimeStap(data.dataJson.talks);
  const eventSessionsSet = new Set(arr.map(talk => talk.session));
  const eventSessionsArr = [];
  eventSessionsSet.forEach(item => eventSessionsArr.push(<li>{item}</li>));
  return eventSessionsArr;
}

const convertTimeStap = (ts) => (
  ts.slice(5).split('').filter(val => +val >= 0).join('')
);

const sortByTimeStap = (arr) => (
  arr.sort((a,b) => {
    let aTime = convertTimeStap(a.time_start);
    let bTime = convertTimeStap(b.time_start);
    if (aTime > bTime) {
      return 1;
    } else if (aTime < bTime) {
      return -1;
    } else {
      return 0;
    }
  })
);

export default TalksList

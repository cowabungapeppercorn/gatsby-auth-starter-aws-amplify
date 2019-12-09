import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaFilePdf, FaVideo } from 'react-icons/fa'


const TalksList = ({ track, timeframe }) => {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson{
          talks {
            session
            title
            time_start
            faculty {
              first_name
              last_name
              role
            }
            do_not_archive
            track
          }
        }
      }
    `);

  return (
    <>
      <ul>
        {getSessionData(dataJson, track, timeframe).map(session => (
          <li key={session}>
            {session}
            <ul>
              {getSessionTalks(dataJson.talks, session).map(talk => (
                <li key={talk.title}>
                  {talk.title}
                  {talk.faculty && (
                    <ul>
                      {talk.faculty.filter(fac => fac.role === 'Presenter').map(fac => (
                        <li>{fac.first_name} {fac.last_name} <span style={{ float: 'right' }} ><FaFilePdf /> | <FaVideo /></span></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );

}

function removeNoArchive(arr) {
  return arr.filter(talk => talk.do_not_archive === false);
}

function convertTimeStamp(ts) {
  return ts.slice(5).split('').filter(val => +val >= 0).join('');
}

function convertSliceParse(ts) {
  return parseInt(convertTimeStamp(ts).slice(0,6));
}

function sortByTimeStamp(arr) {
  return arr.sort((a, b) => {
    let aTime = convertTimeStamp(a.time_start);
    let bTime = convertTimeStamp(b.time_start);
    if (aTime > bTime) {
      return 1;
    } else if (aTime < bTime) {
      return -1;
    } else {
      return 0;
    }
  });
}

function filterByTrack(arr, track) {
  return arr.filter(talk => talk.track === track);
}

function filterByTimeframe(arr, timeframe) {
  const [start, stop] = timeframe.split('-');
  console.log("START", start, "STOP", stop);
  const sortedArr = sortByTimeStamp(arr);
  return sortedArr.filter(talk => (
    convertSliceParse(talk.time_start) > parseInt(start) && convertSliceParse(talk.time_start) < parseInt(stop)
  ));
}

function filterBySession(arr, session) {
  return arr.filter(talk => talk.session === session);
}

function getSessionData(data, track, timeframe) {
  console.log("DATA", data);
  let arr;
  if (timeframe) {
    arr = filterByTimeframe(filterByTrack(removeNoArchive(data.talks), track), timeframe);
  } else {
    arr = sortByTimeStamp(filterByTrack(removeNoArchive(data.talks), track));
  }
  console.log("ARR", arr);
  const eventSessionsSet = new Set(arr.map(talk => talk.session));
  const eventSessionsArr = [];
  eventSessionsSet.forEach(item =>
    eventSessionsArr.push(item)
  );
  return eventSessionsArr;
}

function getSessionTalks(data, session) {
  let arr = sortByTimeStamp(filterBySession(data, session));
  console.log("SESSION TALKS -->", arr);
  return arr;
}


export default TalksList;
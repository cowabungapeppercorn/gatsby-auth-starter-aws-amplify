import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaFilePdf, FaVideo } from 'react-icons/fa'
import Modal from 'react-modal'



const EpicTalksList = ({ track, timeframe }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalFooter, setModalFooter] = useState("");
  const { epicDataJson } = useStaticQuery(
    graphql`
      query {
        epicDataJson{
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: '400px',
      width: '400px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  function openImageModal(header, footer) {
    setModalHeader(header);
    setModalFooter(footer);
    setImageModalOpen(true);
  }

  function openVideoModal(header, footer) {
    setModalHeader(header);
    setModalFooter(footer);
    setVideoModalOpen(true);
  }

  function closeImageModal() {
    setModalHeader("");
    setModalFooter("");
    setImageModalOpen(false);
  }

  function closeVideoModal() {
    setModalHeader("");
    setModalFooter("");
    setVideoModalOpen(false);
  }

  return (
    <>
      <ul>
        {getSessionData(epicDataJson, track, timeframe).map(session => (
          <li key={session}>
            {session}
            <ul>
              {getSessionTalks(epicDataJson.talks, session).map(talk => (
                <li key={talk.title}>
                  {talk.title}
                  {talk.faculty && (
                    <ul>
                      {talk.faculty.filter(fac => fac.role === 'Presenter').map(fac => (
                        <li>{fac.first_name} {fac.last_name}
                          <span style={{ float: 'right' }} >
                            <span className='image-icon'
                              onClick={() => openImageModal(talk.title, `${fac.first_name} ${fac.last_name}`)}><FaFilePdf />
                            </span>
                            |
                            <span className='video-icon'
                              onClick={() => openVideoModal(talk.title, `${fac.first_name} ${fac.last_name}`)}> <FaVideo />
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* IMAGE MODAL */}
      <Modal
        isOpen={imageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Video"
        style={customStyles}
      >
        <h2>{modalHeader || "Title"}</h2>
        <button onClick={closeImageModal}>X</button>
        <div style={{ margin: 'auto', height: '200px', width: '300px', backgroundColor: '#333', color: '#999999' }}>
          Image goes here
        </div>
        <p>{modalFooter || "footer"}</p>
      </Modal>

      {/* VIDEO MODAL */}
      <Modal
        isOpen={videoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video"
        style={customStyles}
      >
        <h2>{modalHeader || "Title"}</h2>
        <button onClick={closeVideoModal}>X</button>
        <div style={{ margin: 'auto', height: '200px', width: '300px', backgroundColor: '#333', color: '#999999' }}>
          Video goes here
        </div>
        <p>{modalFooter || "footer"}</p>
      </Modal>
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
  return parseInt(convertTimeStamp(ts).slice(0, 6));
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
  const sortedArr = sortByTimeStamp(arr);
  return sortedArr.filter(talk => (
    convertSliceParse(talk.time_start) > parseInt(start) && convertSliceParse(talk.time_start) < parseInt(stop)
  ));
}

function filterBySession(arr, session) {
  return arr.filter(talk => talk.session === session);
}

function getSessionData(data, track, timeframe) {
  let arr;
  if (timeframe && !track) {
    console.log("TIMEFRAME DETECTED");
    console.log("TIMEFRAME --->", timeframe);
    arr = filterByTimeframe(removeNoArchive(data.talks), timeframe);
    console.log("ARR AFTER FILTER", arr);
  } else {
    arr = sortByTimeStamp(filterByTrack(removeNoArchive(data.talks), track));
  }
  const eventSessionsSet = new Set(arr.map(talk => talk.session));
  const eventSessionsArr = [];
  eventSessionsSet.forEach(item =>
    eventSessionsArr.push(item)
  );
  return eventSessionsArr;
}

function getSessionTalks(data, session) {
  let arr = sortByTimeStamp(filterBySession(data, session));
  return arr;
}


export default EpicTalksList;
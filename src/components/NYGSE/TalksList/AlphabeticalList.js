import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaFilePdf, FaVideo } from 'react-icons/fa'
import Modal from 'react-modal'

const DisplayDataByFaculty = () => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { nysgeDataJson } = useStaticQuery(
    graphql`
      query {
        nysgeDataJson{
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
      transform: 'translate(-50%, -50%)',
    }
  };

  function openImageModal() {
    setImageModalOpen(true);
  }

  function openVideoModal() {
    setVideoModalOpen(true);
  }

  function closeImageModal() {
    setImageModalOpen(false);
  }

  function closeVideoModal() {
    setVideoModalOpen(false);
  }

  return (
    <>
      <ul>
        {getSessionPresenters(nysgeDataJson).map(presenter => (
          <li>
            {presenter}
            <ul>
              {getPresenterTalks(nysgeDataJson.talks, presenter).map(talk => (
                <li>{talk.title}
                  <span style={{ float: 'right' }} >
                    <span className='image-icon' onClick={openImageModal}><FaFilePdf /> </span>
                    |
                    <span className='video-icon' onClick={openVideoModal}> <FaVideo /></span>
                  </span>
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
        <h2>Image Modal</h2>
        <button onClick={closeImageModal}>X</button>
        <div style={{ margin: 'auto', height: '200px', width: '300px', backgroundColor: '#333', color: '#999999' }}>
          Image goes here
        </div>
        <p>Info about presenter/talk if desired</p>
      </Modal>

      {/* VIDEO MODAL */}
      <Modal
        isOpen={videoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video"
        style={customStyles}
      >
        <h2>Video Modal</h2>
        <button onClick={closeVideoModal}>X</button>
        <div style={{ margin: 'auto', height: '200px', width: '300px', backgroundColor: '#333', color: '#999999' }}>
          Video goes here
        </div>
        <p>Info about presenter/talk if desired</p>
      </Modal>
    </>
  )
}

function removeNoArchive(arr) {
  return arr.filter(talk => talk.do_not_archive === false);
}

function getSessionPresenters(data) {
  let presentersSet = new Set;
  let presentersArr = [];
  let talksArr = removeNoArchive(data.talks);
  for (let arr of talksArr) {
    for (let presenter of arr.faculty) {
      if (presenter.role === "Presenter") {
        presentersSet.add(`${presenter.last_name}, ${presenter.first_name}`);
      }
    }
  }
  presentersSet.forEach(presenter => presentersArr.push(presenter));
  presentersArr.sort();
  return presentersArr;
}

function filterPresenterTalks(arr, presenter) {
  const [last_name, first_name] = presenter.split(', ');
  return arr.filter(talk => (talk.faculty.some(faculty => faculty.last_name === last_name) && talk.faculty.some(faculty => faculty.first_name === first_name)));
}

function getPresenterTalks(data, presenter) {
  let arr = filterPresenterTalks(data, presenter);
  return arr;
}

export default DisplayDataByFaculty

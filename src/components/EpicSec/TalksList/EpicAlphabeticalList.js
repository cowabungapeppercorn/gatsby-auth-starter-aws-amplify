import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaFilePdf, FaVideo } from 'react-icons/fa'
import Modal from 'react-modal'

const DisplayDataByFaculty = () => {
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
      position: 'relative',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: '80%',
      width: '70%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      backgroundColor: '#333333',
      color: 'white'
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
        {getSessionPresenters(epicDataJson).map(presenter => (
          <li>
            {presenter}
            <ul>
              {getPresenterTalks(epicDataJson.talks, presenter).map(talk => (
                <li>{talk.title}
                  <span style={{ float: 'right' }} >
                    <span className='image-icon'
                      onClick={() => openImageModal(talk.title, formatPresenterForFooter(presenter))}><FaFilePdf />
                    </span>
                    |
                    <span className='video-icon'
                      onClick={() => openVideoModal(talk.title, formatPresenterForFooter(presenter))}> <FaVideo />
                    </span>
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
        <h3 style={{ marginTop: '30px' }}>{modalHeader || "TITLE"}</h3>
        <p>{modalFooter || "Presenter"}</p>
        <button style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={closeImageModal}>X</button>
        <div>
          <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" width="400" height="500"></iframe>
        </div>
        <p><a style={{ color: 'white' }} href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download target="_blank">download</a></p>
      </Modal>

      {/* VIDEO MODAL */}
      <Modal
        isOpen={videoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video"
        style={customStyles}
      >
        <h3 style={{ marginTop: '30px' }}>{modalHeader || "TITLE"}</h3>
        <button style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={closeVideoModal}>X</button>
        <div>
          <iframe width="560" height="315"
            src="https://c3-content.meetingarchive.events/recording/2019/C32019-VideoUnavailable.mp4">
          </iframe>
        </div>
        <p>{modalFooter || "footer"}</p>
      </Modal>
    </>
  )
}

function formatPresenterForFooter(presenter) {
  const [last, first] = presenter.split(', ');
  return [first, last].join(' ');
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
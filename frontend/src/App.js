import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

// ways to grab all updated values in the search component
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

//function App() {  -> replaced with below arrow function syntax which provides same results
const App = () => {
  //this is for processing the search items in the search box
  const [word, setWord] = useState('');
  //this is for processing the images retrieved from the unsplash api
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        //storing in front of the array
        setImages([{ ...data, title: word }, ...images]);
        // console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  // invoke event log and display search term as being entered by the user...
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {/* converts length to boolean value, if truthy, will display the first object in the array */}
      {/* !!images.length && <ImageCard image={images[0]} /> */}
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;

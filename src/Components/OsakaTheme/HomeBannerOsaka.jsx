import WrapperComponent from '../Common/WrapperComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const HomeBannerOsaka = ({ dataAPI }) => {
  const images = [
    {
      url: dataAPI?.main_banner?.image_url,
      title: "1",
      description: "description",
    },
    {
      url: dataAPI?.main_banner?.image_url,
      title: "2",
      description: "description1",
    },
    {
      url: dataAPI?.main_banner?.image_url,
      title: "3",
      description: "description2",
    },
    {
      url: dataAPI?.main_banner?.image_url,
      title: "4",
      description: "description3",
    },
  ];

  return (
    // <WrapperComponent classes={{ sectionClass: ' pt-2',  }}   customCol={true}>
      <div id="homeBannerCarousel" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {images.map((item, index) => (
            <div key={index} style={{ height:"650px" }}  className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img className='d-block w-100' src={item.url} alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeBannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeBannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    // </WrapperComponent>
  );
};

export default HomeBannerOsaka;

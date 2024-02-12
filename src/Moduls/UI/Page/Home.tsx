import React from "react";
import Navbar from "../Component/Navbar";
import image1 from "../../../Assets/Image/Image1.png";
import image2 from "../../../Assets/Image/Image2.jpg";
import image3 from "../../../Assets/Image/Image3.png";
import Ideological_Image1 from "../../../Assets/Image/Ideological_Image1.jpg";
import indian_youth_congress_members_Image from "../../../Assets/Image/indian_youth_congress_members_Image1.png";
import indian_youth_congress_members_Image2 from "../../../Assets/Image/indian_youth_congress_members_Image2.png";
import indian_youth_congress_members_Image3 from "../../../Assets/Image/indian_youth_congress_members_Image3.png";

import presidents1 from "../../../Assets/Image/presidents1.jpg";
import presidents2 from "../../../Assets/Image/presidents2.jpg";
import presidents3 from "../../../Assets/Image/presidents3.jpg";
import presidents4 from "../../../Assets/Image/presidents4.jpeg";
import presidents5 from "../../../Assets/Image/presidents15.jpg";
import presidents6 from "../../../Assets/Image/presidents6.jpg";
import presidents7 from "../../../Assets/Image/presidents7.jpg";
import presidents8 from "../../../Assets/Image/presidents8.jpg";
import presidents9 from "../../../Assets/Image/presidents9.jpg";
import presidents10 from "../../../Assets/Image/presidents11.jpg";
import presidents11 from "../../../Assets/Image/presidents12.jpg";
import presidents12 from "../../../Assets/Image/presidents13.jpg";
import presidents13 from "../../../Assets/Image/presidents14.jpg";
import presidents14 from "../../../Assets/Image/presidents15.jpg";
import presidents15 from "../../../Assets/Image/presidents16.jpg";
import presidents16 from "../../../Assets/Image/presidents18.jpg";
import presidents17 from "../../../Assets/Image/presidents19.jpg";

import Rahul_Gandhi from "../../../Assets/Image/Rahul_Gandhi.jpg";
import Initiatives1 from "../../../Assets/Image/Initiatives1.png";
import Initiatives2 from "../../../Assets/Image/Initiatives2.png";
import Initiatives3 from "../../../Assets/Image/Initiatives3.jpg";
// indian_youth_congress_members_Image3
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div className="col-sm-12 p-0 m-0">
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide p-0 m-0 position-relative"
              data-bs-touch="false"
            >
              <div className="carousel-inner p-0 m-0 ">
                <div className="carousel-item active p-0 m-0">
                  <img
                    src={image1}
                    className="d-block w-100 p-0 m-0"
                    alt="image1"
                  />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="d-block w-100" alt="image2" />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="d-block w-100" alt="image3" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-secondary"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-secondary"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>

              <div className="position-absolute top-100 start-50 translate-middle col-sm-10 ">
                <div className="row">
                  <div
                    className="col-sm-3 bg-custom1 p-5 "
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="row text-center">
                      <div className="col-sm-12   text-center">
                        <span className="material-symbols-outlined display-3 text-white">
                          campaign
                        </span>
                      </div>
                      <span className=" fs-5 text-white">Our Campagin</span>
                    </div>
                  </div>

                  <div
                    className="col-sm-3 bg-custom2 p-5 "
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div className="row text-center">
                      <div className="col-sm-12   text-center">
                        <span className="material-symbols-outlined text-white display-3">
                          diversity_3
                        </span>
                      </div>
                      <span className=" fs-5 text-white">Be a Volunteer</span>
                    </div>
                  </div>

                  <div
                    className="col-sm-3 bg-custom3 p-5 "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="row text-center">
                      <div className="col-sm-12 text-center">
                        <span className="material-symbols-outlined display-3 text-white">
                          volunteer_activism
                        </span>
                      </div>
                      <span className=" fs-5 text-white">Donation</span>
                    </div>
                  </div>

                  <div
                    className="col-sm-3 bg-custom4 p-5"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <div className="row text-center">
                      <div className="col-sm-12 text-center">
                        <span className="material-symbols-outlined display-3 text-white">
                          how_to_vote
                        </span>
                      </div>
                      <span className=" fs-5 text-white">Voter Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 ">
          <div className="col-lg-12 marginPolicypositions">
            <h6 className="text-center text-capitalize text-custom">
              Policy positions
            </h6>
            <h1 className="text-center text-capitalize  ">
              Ideological Leader For Youth Generation
            </h1>
          </div>

          <div className="col-lg-12 p-0">
            <div className="featuredPropBox">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo bg-custom1 text-center p-2">
                      <span className="text-white fs-6 ">
                        NATIONAL SECURITY
                      </span>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo bg-custom2 text-center p-2">
                      <span className="text-white fs-6 ">AGRICULTURE</span>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo bg-custom5 text-center p-2">
                      <span className="text-white fs-6 ">EDUCATION</span>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo bg-custom3 text-center p-2">
                      <span className="text-white fs-6 ">HEALTH</span>
                    </div>

                    {/* HEALTH */}
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo bg-custom4 text-center p-2">
                      <span className="text-white fs-6 ">EMPLOYMENT</span>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row p-0 m-0 d-flex justify-content-evenly">
          <h1 className="text-center mt-4 mb-4">
            {" "}
            About Indian Youth Congress
          </h1>
          <div className="col-sm-5">
            <div className="row boxabout">
              <div className="col-sm-3 p-0 m-0">
                <img src={presidents1} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents2} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents3} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents4} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents5} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents6} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents7} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents8} alt="" className="w-100" height={100} />
              </div>

              <div className="col-sm-3  p-0 m-0">
                <img src={presidents9} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents10} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents11} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents12} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents13} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents14} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents15} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents16} alt="" className="w-100" height={100} />
              </div>
              <div className="col-sm-3  p-0 m-0">
                <img src={presidents17} alt="" className="w-100" height={100} />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <p className="fs-5" style={{ textAlign: "justify" }}>
              Pre-Independence: Students very prominently and positively
              participated in the National Movement. This was very clearly
              evident in 1905, when students protested against Lord Curzon’s
              decision of the partition of Bengal. This also had echoes in
              Northern India where students came out in large numbers to
              participate in the freedom movement in spite of the fact that the
              Indian National Congress at that time did not have a political
              outfit for the youth of the country.
            </p>
            <button className="btn btn-light btn-lg">
              OUR STORY <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="row p-0 m-0 mt-5  ">
          <div className="col-sm-12 p-0 m-0 position-relative">
            <div className="bg-video-wrap ">
              <video
                src="/SupportOurActivities.mp4"
                className=""
                loop
                muted
                autoPlay
              ></video>
              <div className="overlay"></div>
              <h1 className="overlayText">
                Support Our Activities By a Raise Voice
              </h1>
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x col-sm-10  ">
              <div className="row p-0 m-0 ">
                <div className="col-sm-4  text-white bg-custom4 d-flex flex-column justify-content-center align-items-center">
                  <h4>Shakti Super SHE</h4>
                  <p className="" style={{ textAlign: "center" }}>
                    Shakti Super SHE is an initiative of the Indian Youth
                    Congress aimed at building and strengthening nationwide
                    association and engagement of women with the Congress party.
                  </p>
                </div>
                <div className="col-sm-4 p-0 m-0 ">
                  <img
                    src={indian_youth_congress_members_Image}
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="col-sm-4   text-white bg-custom3 d-flex flex-column justify-content-center align-items-center">
                  <h4>Young India Live Series</h4>
                  <p className="" style={{ textAlign: "center" }}>
                    With the objective to reach out to the youth of India
                    directly, IYC has launched a Facebook live series, an online
                    interactive session, called the ‘Young India Live Series’.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 m-auto p-0 m-0">
            <div className="row p-0 m-0 ">
              <div className="col-sm-4 p-0 m-0">
                <img
                  src={indian_youth_congress_members_Image2}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-sm-4  m-0 text-white bg-custom1 d-flex flex-column justify-content-center align-items-center">
                <h4 style={{ textAlign: "center" }}>
                  Today’s Volunteer Tomorrow’s Leader
                </h4>
                <p className="" style={{ textAlign: "center" }}>
                  IYC has a rich story of volunteers, becoming leaders. INC
                  provides ample opportunities to citizens to volunteer in
                  various wings of the organization.
                </p>
              </div>

              <div className="col-sm-4 p-0 m-0">
                <img
                  src={indian_youth_congress_members_Image3}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 d-flex justify-content-evenly mb-5">
          <h1 className="text-center mt-5 mb-4"> Our Inspiration and Leader</h1>
          <div className="col-sm-5">
            <p className="fs-5" style={{ textAlign: "justify" }}>
              <span className="fw-bold text-custom">Shri Rahul Gandhi </span> is
              the source of inspiration for IYC. He represents the youth of
              today and their voice. He is the ex-national president of Indian
              National Congress, the grand old political party of India. Rahul
              Gandhi is three-time Member of Parliament, Lok Sabha from Amethi
              in Uttar Pradesh. He holds an M.Phill degree in Development
              Studies from Trinity College, Cambridge University. As a
              politician with grit, he vociferously champions the causes of the
              common man in and out of the parliament. The issues endearing to
              the poor, marginalized, farmers, women and downtrodden remain
              closer to him.
              {/* His thoughts and ideas are what drive the IYC to transcend different boundaries. Coming from a family who had dedicated their lives in the service of the nation, Rahul Gandhi remains embedded into the realities of the nation. */}
            </p>
          </div>
          <div className="col-sm-5">
            <img src={Rahul_Gandhi} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row p-0 m-0 bg-custom4 pt-5 ">
          <h1 className="text-white text-center mb-4">Our Initiatives</h1>
          <p className="text-custom text-center">
            These initiatives are demonstration of our commitment to addressing
            societal concerns and promoting our vision for a better community
            and country. They reflect our dedication to making positive changes
            and shaping policies that align with our values and priorities.
          </p>
          <div className="col-sm-10 m-auto pt-4 pb-5">
            <div className="row">
              <div className="col-sm-4 position-relative">
                <img src={Initiatives1} className="w-100" height={300} alt="" />
                <div className="position-absolute top-100 start-50 translate-middle bg-white  w-75 text-center p-2 border-custom">
                  <h6>
                    JAY JAWAN <br />
                    Anyay Ke Viruddh Nyay Ka Yuddh{" "}
                  </h6>
                </div>
              </div>
              <div className="col-sm-4 position-relative">
                <img src={Initiatives2} className="w-100" height={300} alt="" />
                <div className="position-absolute top-100 start-50 translate-middle bg-white  w-75 text-center p-2 border-custom">
                  <h6>
                    JAY JAWAN <br />
                    Anyay Ke Viruddh Nyay Ka Yuddh{" "}
                  </h6>
                </div>
              </div>

              <div className="col-sm-4 position-relative">
                <img src={Initiatives3} className="w-100" height={300} alt="" />
                <div className="position-absolute top-100 start-50 translate-middle bg-white  w-75 text-center p-2 border-custom">
                  <h6>
                    Shakti Super She <br />A platform for the women{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 m-auto mb-4 mt-4 text-center">
            <button className="btn bg-white ">
              SEE MORE INITIATIVES <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-lg-12 mt-5">
            <h6 className="text-center text-capitalize text-custom">
              Latest News{" "}
            </h6>
            <h1 className="text-center text-capitalize mb-4 ">
              Have a look what's going on
            </h1>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="position-relative">
                <img
                  src="https://bharatjodonyayyatra.com/nyay-diaries/wp-content/uploads/2024/02/blog-29-cover-2048x1365.jpg"
                  className="card-img-top"
                  height={300}
                  alt=""
                />

                <div className="position-absolute bottom-0 start-0 bg-custom1 ps-3 pe-3 text-white pt-2 pb-2">
                  12 Jan 2023
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title fs-5"> Lorem ipsum dolor sit</h6>
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt quidem magni perferendis pariatur eligendi? Atque et
                  delectus, recusandae id ratione quibusdam praesentium debitis?
                  Sed magnam reprehenderit illo, excepturi sint est!
                </p>
                <a href="" className="text-custom text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="position-relative">
                <img
                  src="https://bharatjodonyayyatra.com/nyay-diaries/wp-content/uploads/2024/02/day-26-cover-2048x1365.jpg"
                  className="card-img-top"
                  height={300}
                  alt=""
                />

                <div className="position-absolute bottom-0 start-0 bg-custom1 ps-3 pe-3 text-white pt-2 pb-2">
                  12 Jan 2023
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title fs-5"> Lorem ipsum dolor sit</h6>
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt quidem magni perferendis pariatur eligendi? Atque et
                  delectus, recusandae id ratione quibusdam praesentium debitis?
                  Sed magnam reprehenderit illo, excepturi sint est!
                </p>
                <a href="" className="text-custom text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="position-relative">
                <img
                  src="https://bharatjodonyayyatra.com/en/gallery-image/307/2024-02-05/Rahul-Gandhi-with-local-leaders-in-Jharkhand.JPG"
                  className="card-img-top"
                  height={300}
                  alt=""
                />

                <div className="position-absolute bottom-0 start-0 bg-custom1 ps-3 pe-3 text-white pt-2 pb-2">
                  12 Jan 2023
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title fs-5"> Lorem ipsum dolor sit</h6>
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt quidem magni perferendis pariatur eligendi? Atque et
                  delectus, recusandae id ratione quibusdam praesentium debitis?
                  Sed magnam reprehenderit illo, excepturi sint est!
                </p>
                <a href="" className="text-custom text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="position-relative">
                <img
                  src="https://bharatjodonyayyatra.com/en/gallery-image/347/2024-02-08/Rahul-Gandhi-speech-in-bharat-jodo-nyay-yatra.jpeg"
                  className="card-img-top"
                  alt=""
                  height={300}
                />

                <div className="position-absolute bottom-0 start-0 bg-custom1 ps-3 pe-3 text-white pt-2 pb-2">
                  12 Jan 2023
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title fs-5"> Lorem ipsum dolor sit</h6>
                <p
                  className="card-text text-muted"
                  style={{ textAlign: "justify" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt quidem magni perferendis pariatur eligendi? Atque et
                  delectus, recusandae id ratione quibusdam praesentium debitis?
                  Sed magnam reprehenderit illo, excepturi sint est!
                </p>
                <a href="" className="text-custom text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

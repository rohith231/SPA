import React from "react";
import MobDevCard from "../../pages/services/ourservices/Mobile Development/MobDevCard";
import CommonContainer from "../CommonContainer/CommonContainer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./commonCard.styles.css";

const CommonCard = (props) => {
  return (
    <>
      <div className="commonCard-container">
        <div
          className={
            props.type === "commonCardContainer"
              ? "centerIt flexRow commonCard-row"
              : "commonCard-row"
          }
        >
          {/* OUR SERVICES */}
          {/* Mobile Development */}
          {/* title */}{" "}
          {props.type === "title" && (
            <div className="mob-dev-container">
              <div className="heading1">
                <h2>{props.title}</h2>
              </div>
              <div className="heading4">
                <h4>
                  {props.data.map((e) => (
                    <div key={e}>
                      {e.para1} <a href="/">{e.anchor}</a> {e.para2}
                    </div>
                  ))}
                </h4>
              </div>
            </div>
          )}
          {/* tripletCard */}{" "}
          {props.type === "tripletCard" && (
            <div className="container2">
              {props.data.map((e) => (
                <div key={e}>
                  <MobDevCard
                    icon={e.icon}
                    title={e.title}
                    content={e.content}
                    bg={e.bg}
                  />
                </div>
              ))}
            </div>
          )}
          {/* paraUL */}{" "}
          {props.type === "paraUL" && (
            <div className="container3">
              <div className="col70">
                {props.heading1 && (
                  <h1 className="heading1">{props.heading1}</h1>
                )}
                {props.data.map((e) => (
                  <div key={e}>
                    <p>{e.para1}</p>
                    <p>{e.para2}</p>
                  </div>
                ))}
              </div>
              <div className="col30">
                <h2>{props.title}</h2>
                <ul>
                  {props.data.map((e) => (
                    <div key={e}>
                      {e.ul.map((e) => (
                        <li>
                          <a href={e.path}>{e.li}</a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* Software Testing */}
          {/* testingServices */}
          {props.type === "testingServices" && (
            <>
              <div className="col70">
                <div className="heading1">{props.title}</div>
                {props.data.map((e) => (
                  <div key={e}>
                    <h6 className="textLeft">{e.h6}</h6>
                    <p>{e.para}</p>
                  </div>
                ))}
              </div>
              <div className="col30 alignCenter">
                <div className={props.img}></div>
              </div>
            </>
          )}
          {/* 7030img */}{" "}
          {props.type === "7030img" && (
            <>
              {props.switch ? (
                <>
                  <div className="col30 alignCenter">
                    {props.iframe &&
                      props.iframe.map((e) => (
                        <div key={e}>
                          <iframe
                            width="420"
                            height="315"
                            title={e.title ? props.title : "video"}
                            src={e.src}
                            allowFullScreen
                          ></iframe>
                        </div>
                      ))}
                    <div className={props.img}></div>
                  </div>
                  <div className="col70">
                    {props.summary &&
                      props.summary.map((e) => (
                        <div key={e}>
                          <p className="textLeft summary">{e}</p>
                        </div>
                      ))}
                    <div
                      className={
                        props.heading ? props.heading + " m0" : "heading1 m0"
                      }
                    >
                      {props.title}
                    </div>
                    {props.para &&
                      props.para.map((e) => (
                        <div key={e}>
                          <p className="textLeft">{e}</p>
                        </div>
                      ))}
                    {props.data && (
                      <div className="">
                        {props.data.map((e) => (
                          <div className="" key={e.listHead}>
                            <h6>
                              <ul>
                                <li key={e.listHead}>{e.listHead}</li>
                              </ul>
                            </h6>
                            <ul className="whiteul">
                              {e.ul.map((e) => (
                                <li key={e.li}>{e.li}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {props.ul && (
                      <>
                        {props.ul.map((e) => (
                          <ul key={e}>
                            <li>{e}</li>
                          </ul>
                        ))}
                      </>
                    )}
                    {props.button && (
                      <div
                        className={props.btnFit ? "button fitWidth" : "button"}
                      >
                        {props.button}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col70">
                    {props.summary &&
                      props.summary.map((e) => (
                        <div key={e}>
                          <p className="textLeft summary">{e}</p>
                        </div>
                      ))}
                    <div
                      className={
                        props.heading ? props.heading + " m0" : "heading1 m0"
                      }
                    >
                      {props.title}
                    </div>
                    {props.para &&
                      props.para.map((e) => (
                        <div key={e}>
                          <p
                            className={props.pClass ? props.pClass : "textLeft"}
                          >
                            {e}
                          </p>
                        </div>
                      ))}
                    {props.data && (
                      <div className="">
                        {props.data.map((e) => (
                          <div className="" key={e.listHead}>
                            <h6>
                              <ul>
                                <li key={e.listHead}>{e.listHead}</li>
                              </ul>
                            </h6>
                            <ul className="whiteul">
                              {e.ul.map((e) => (
                                <li key={e.li}>{e.li}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {props.ul && (
                      <>
                        {props.ul.map((e) => (
                          <ul key={e}>
                            <li>{e}</li>
                          </ul>
                        ))}
                      </>
                    )}
                    {props.button && (
                      <div
                        className={props.btnFit ? "button fitWidth" : "button"}
                      >
                        {props.button}
                      </div>
                    )}
                  </div>
                  <div className="col30 alignCenter">
                    {props.iframe &&
                      props.iframe.map((e) => (
                        <div key={e}>
                          <iframe
                            width="420"
                            height="315"
                            title={e.title ? props.title : "video"}
                            src={e.src}
                            allowFullScreen
                            key={e}
                          ></iframe>
                        </div>
                      ))}
                    <div className={props.img}></div>
                  </div>
                </>
              )}
            </>
          )}
          {/* pythonimg */}{" "}
          {props.type === "pythonimg" && (
            <>
              {props.switch ? (
                <>
                  <div className="col30 alignCenter">
                    <div className={props.img}></div>
                  </div>
                  <div className="col70">
                    {props.button && (
                      <div
                        className={props.btnFit ? "button fitWidth" : "button"}
                      >
                        {props.button}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col70">
                    <div
                      className={
                        props.heading ? props.heading + " m0" : "heading1 m0"
                      }
                    >
                      {props.title}
                    </div>
                    {props.data.map((e) => (
                      <div key={e}>
                        <h5 className="textLeft">{e.h5}</h5>
                        <p>{e.para}</p>
                      </div>
                    ))}
                    <div className="head">
                      <h1>{props.title1}</h1>
                    </div>
                    {props.para.map((e) => (
                      <div key={e}>
                        <p className="textLeft">{e}</p>
                      </div>
                    ))}
                    {props.button && (
                      <div
                        className={props.btnFit ? "button fitWidth" : "button"}
                      >
                        {props.button}
                      </div>
                    )}
                  </div>
                  <div className="col30">
                    <div className={props.img}></div>
                  </div>
                </>
              )}
            </>
          )}
          {/* commonCardContainer */}
          {props.type === "commonCardContainer" && (
            <>
              {props.data.map((e) => (
                <div key={e} className="commonContainerWrapper">
                  <CommonContainer h2={e.h2} p={e.p} h1={e.h1} />
                </div>
              ))}
            </>
          )}
          {/* productDevContent */}
          {props.type === "productDevContent" && (
            <>
              <div className="">
                {props.title && (
                  <div
                    className={props.center ? "heading1 center" : "heading1"}
                  >
                    {props.title}
                  </div>
                )}
              </div>
              <div className="imagesContainer">
                {props.img.map((e) => (
                  <div key={e} className="image50">
                    <div className={e}></div>
                  </div>
                ))}
              </div>
              <div className="flexRow servicesContainer center">
                {props.data.map((e) => (
                  <div key={e} className="containerWidth50">
                    <div className="heading3">{e.title}</div>
                    {e.content && <div className="para">{e.content}</div>}
                  </div>
                ))}
              </div>
            </>
          )}
          {/* Offshore Development */}
          {/* OffshoreCardContainer */}
          {props.type === "OffshoreCardContainer" && (
            <>
              {props.data.map((e) => (
                <div key={e} className="offShoreContainerWrapper">
                  <div className="OffshoreContainer">
                    <div className="OffCol1">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="serviceIcon"
                      />
                    </div>
                    <div className="OffCol2">
                      <div className="">
                        <h3>{e.title}</h3>
                      </div>
                      <div className="para">
                        <p>{e.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {/* 5545img */}{" "}
          {props.type === "5545img" && (
            <>
              {props.switch ? (
                <>
                  <div className="col45 alignCenter">
                    {props.img && <div className={props.img}></div>}
                    {props.card && (
                      <div className="digitalContainerWrapper">
                        {props.card.map((e) => (
                          <div
                            key={e.title}
                            className="offShoreContainerWrapper"
                            style={
                              e.id % 2 === 0
                                ? { marginTop: "80px" }
                                : { marginTop: "10px" }
                            }
                          >
                            <div className="OffshoreContainer digitalContainer">
                              <div className="OffCol1">
                                <FontAwesomeIcon
                                  icon={faLaptopCode}
                                  className="serviceIcon"
                                />
                              </div>
                              <div className="OffCol2">
                                <div className="">
                                  <h3>{e.title}</h3>
                                </div>
                                <div className="para">
                                  <p>{e.content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col55">
                    <div
                      className={
                        props.heading ? props.heading + " m0" : "heading1 m0"
                      }
                    >
                      {props.title}
                    </div>
                    {props.para.map((e) => (
                      <div key={e} className="para">
                        <p className="textLeft">{e}</p>
                      </div>
                    ))}
                    {props.button && (
                      <div className="button">{props.button}</div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col55">
                    <div
                      className={
                        props.heading ? props.heading + " m0" : "heading1 m0"
                      }
                    >
                      {props.title}
                    </div>
                    {props.para.map((e) => (
                      <div key={e} className="para">
                        <p className="textLeft">{e}</p>
                      </div>
                    ))}
                    {props.button && (
                      <div className="button">{props.button}</div>
                    )}
                  </div>
                  <div className="col45 alignCenter">
                    <div className={props.img}></div>
                    {props.card && (
                      <div className="digitalContainerWrapper">
                        {props.card.map((e) => (
                          <div
                            key={e}
                            className="offShoreContainerWrapper"
                            style={
                              e.id % 2 === 0
                                ? { marginTop: "80px" }
                                : { marginTop: "10px" }
                            }
                          >
                            <div className="OffshoreContainer digitalContainer">
                              <div className="OffCol1">
                                <FontAwesomeIcon
                                  icon={faLaptopCode}
                                  className="serviceIcon"
                                />
                              </div>
                              <div className="OffCol2">
                                <div className="">
                                  <h3>{e.title}</h3>
                                </div>
                                <div className="para">
                                  <p>{e.content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
          {/* hiringTable */}{" "}
          {props.type === "hiringTable" && (
            <>
              <div className={props.type}>
                <table>
                  <tbody>
                    {props.data.map((e) => (
                      <tr key={e.col1}>
                        <td className="td1">{e.col1}</td>
                        <td className="td2">{e.col2}</td>
                        <td className="td3">{e.col3}</td>
                        <td className="td4">{e.col4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* TECHNOLOGIES */}
          {/* coldFusion */}{" "}
          {props.type === "coldFusion" && (
            <>
              <div className="col70 col-md-8 col-12">
                <div className="head">
                  {props.para.map((e) => (
                    <p key={e}> {e}</p>
                  ))}
                  <div className="head2">
                    <h3>{props.title1}</h3>
                  </div>
                  <div className="">
                    <ul>
                      {props.data.map((e) => (
                        <div key={e}>
                          {e.ul.map((e) => (
                            <li>
                              <a href={e.path}>{e.li}</a>
                            </li>
                          ))}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col30 col-md-4 col-12">
                <div className="title1">
                  <h5>{props.title}</h5>
                </div>
                <div className="head2">{props.par}</div>
                <div className="head2">
                  <h6>{props.title4}</h6>
                </div>
                <ul className="head2">
                  {props.data1.map((e) => (
                    <ul key={e}>{e}</ul>
                  ))}
                </ul>
                <div className="head2">
                  <h2>{props.title5}</h2>
                </div>
                <div className="">
                  <ul>
                    {props.data2.map((e) => (
                      <div key={e}>
                        {e.ul.map((e) => (
                          <li>
                            <a href={e.path}>{e.li}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
          {/* dualListItems*/}
          {props.type === "dualListItems" && (
            <div className="dualListItems">
              <div className="head">
                <h2>{props.title}</h2>
              </div>
              <div className="coldj">
                <div className="cold ">
                  {props.data.map((e) => (
                    <div className="cold" key={e.listHead}>
                      <h6>
                        <ul>
                          <li key={e.listHead}>{e.listHead}</li>
                        </ul>
                      </h6>
                      <ul className="whiteul">
                        {e.ul.map((e) => (
                          <li key={e.li}>{e.li}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="cold ">
                  {props.data1 &&
                    props.data1.map((e) => (
                      <div className="cold" key={e.listHead}>
                        <h6>
                          <ul>
                            <li key={e.listHead}>{e.listHead}</li>
                          </ul>
                        </h6>
                        <ul className="whiteul">
                          {e.ul.map((e) => (
                            <li key={e.li}>{e.li}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
                <div className="cold ">
                  {props.data2 &&
                    props.data2.map((e) => (
                      <div className="cold" key={e.listHead}>
                        <h6>
                          <ul>
                            <li key={e.listHead}>{e.listHead}</li>
                          </ul>
                        </h6>
                        <ul className="whiteul">
                          {e.ul.map((e) => (
                            <li key={e.li}>{e.li}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          {/* ReactJs Devlopment */}
          {/* ReactJS */}{" "}
          {props.type === "ReactJS" && (
            <>
              <div className="col70">
                <div className="head2">
                  <h3>{props.title}</h3>
                </div>
                <div className="head">
                  {props.para.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
                <div className="head2">
                  <h3>{props.title2}</h3>
                </div>
                <div className="head">
                  {props.para1.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
              </div>
              <div className="col30">
                <div className="head">
                  <div className="head2">
                    <h3>{props.title1}</h3>
                  </div>
                  <ul>
                    {props.data.map((e) => (
                      <div key={e}>
                        {e.ul.map((e) => (
                          <li>
                            <a href={e.path}>{e.li}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="ReactContainer">
                  <div className={props.img}></div>
                </div>
              </div>
            </>
          )}
          {/* React */}{" "}
          {props.type === "React" && (
            <div
              className="react justify-content-center"
              style={{ width: "100%" }}
            >
              <div className="reacthead ">
                <h2>{props.title}</h2>
              </div>
              <div
                className="reacttext text-muted "
                style={{
                  maxWidth: "600px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h6>
                  {props.data.map((e) => (
                    <div key={e}>
                      {e.para1} <a href="/">{e.anchor}</a> {e.para2}
                    </div>
                  ))}
                </h6>
              </div>
            </div>
          )}
          {/* ReactCard */}{" "}
          {props.type === "ReactCard" && (
            <div className="ContainerWrapper cardType">
              {props.data.map((e) => (
                <div key={e.title} className="Container">
                  <div className="">
                    <div className="OffCol1">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="serviceIcon"
                      />
                    </div>
                    <div className="OffCol2">
                      <div className="">
                        <h3>{e.title}</h3>
                      </div>
                      <div className="para">
                        <p>{e.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* images */}{" "}
          {props.type === "images" && (
            <div className="container">
              <h3>{props.title}</h3>
              <div className="ReactContainer">
                {props.img1.map((e) => (
                  <div key={e} className="">
                    <div className={e}></div>
                  </div>
                ))}
                {props.img2.map((e) => (
                  <div key={e} className="">
                    <div className={e}></div>
                  </div>
                ))}
                {props.img3.map((e) => (
                  <div key={e} className="">
                    <div className={e}></div>
                  </div>
                ))}
                {props.img4.map((e) => (
                  <div key={e} className="">
                    <div className={e}></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* img */}{" "}
          {props.type === "img" && (
            <div className="head2">
              <h3>{props.title}</h3>
              <div className="ReactContain">
                <div className={props.img}></div>
              </div>
            </div>
          )}
          {/* VueJS Devlopment */}
          {/* VUEJS */}{" "}
          {props.type === "VUEJS" && (
            <>
              <div className="col70">
                <div className="head2">
                  <h1>{props.title}</h1>
                </div>
                <div className="head">
                  {props.para.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
                <div className="head2">
                  <h1>{props.title2}</h1>
                </div>
                <div className="head">
                  {props.para1.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
              </div>
              <div className="col30">
                <div className="head">
                  <div className="head2">
                    <h1>{props.title1}</h1>
                  </div>
                  <ul>
                    {props.data.map((e) => (
                      <div key={e}>
                        {e.ul.map((e) => (
                          <li>
                            <a href={e.path}>{e.li}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                  {/* <div className='imagesContainer'>{(props.img).map(e => <div key={e} className=''><div className={e}></div></div>)}</div> */}
                </div>
                <div className="imagesContainer">
                  {props.img.map((e) => (
                    <div className={e}></div>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* VueJs */}{" "}
          {props.type === "VueJs" && (
            <>
              <div className="col70">
                <div className="head">
                  <h1>{props.title}</h1>
                </div>
                {props.data.map((e) => (
                  <div key={e}>
                    <h6 className="textLeft">{e.h6}</h6>
                    <p>{e.para}</p>
                  </div>
                ))}
              </div>
              <div className="col30">
                <div className="imagesContainer">
                  {props.img.map((e) => (
                    <div className={e}></div>
                  ))}
                </div>
                <div className="imagesContainer">
                  {props.img1.map((e) => (
                    <div className={e}></div>
                  ))}
                </div>
              </div>
              <div className="heading1">
                <h1>{props.title1}</h1>
              </div>
              <ul className="head2" style={{ marginBottom: "30px" }}>
                {props.data1.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </>
          )}
          {/* Angular Devlopment */}
          {/* Angular */}{" "}
          {props.type === "Angular" && (
            <>
              <div className="col70">
                <div className="head2">
                  <h1>{props.title}</h1>
                </div>
                <div className="head">
                  {props.para.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
                <div className="head2">
                  <h1>{props.title2}</h1>
                </div>
                <div className="head">
                  {props.para1.map((e) => (
                    <p> {e}</p>
                  ))}
                </div>
              </div>
              <div className="col30">
                <div className="head">
                  <div className="head2">
                    <h1>{props.title1}</h1>
                  </div>
                  <ul>
                    {props.data.map((e) => (
                      <div key={e}>
                        {e.ul.map((e) => (
                          <li>
                            <a href={e.path}>{e.li}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                  {/* <div className='imagesContainer'>{(props.img).map(e => <div key={e} className=''><div className={e}></div></div>)}</div> */}
                </div>
                <div className="imagesContainer">
                  {props.img.map((e) => (
                    <div className={e}></div>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* AngularDev */}{" "}
          {props.type === "AngularDev" && (
            <>
              <div className="col70">
                <div className="head">
                  <h1>{props.title}</h1>
                </div>
                {props.data.map((e) => (
                  <div key={e}>
                    <h6 className="textLeft">{e.h6}</h6>
                    <p>{e.para}</p>
                  </div>
                ))}
              </div>
              <div className="col30">
                <div className="imagesContainer">
                  {props.img.map((e) => (
                    <div className={e}></div>
                  ))}
                </div>
                {/* <div className='imagesContainer'>{(props.img1).map(e => <div className={e}></div>)}</div> */}
              </div>
              <div className="heading1">
                <h1>{props.title1}</h1>
              </div>
              <ul className="head2" style={{ marginBottom: "30px" }}>
                {props.data1.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </>
          )}
          {/* Golang Devlopment */}
          {/* card */}{" "}
          {props.type === "card" && (
            <div className="ContainerWrapper cardType">
              {props.card.map((e) => (
                <div key={e.title} className="Container">
                  <div className="">
                    <div className="OffCol1">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="serviceIcon"
                      />
                    </div>
                    <div className="OffCol2">
                      <div className="">
                        <h3>{e.title}</h3>
                      </div>
                      <div className="para">
                        <p>{e.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* NodeJs */}{" "}
          {props.type === "Nodejs" && (
            <>
              <div className="col70 col-md-8 col-12">
                <div className="head">
                  {props.para.map((e) => (
                    <p key={e}> {e}</p>
                  ))}
                </div>
                <div className="images">
                  {props.img.map((e) => (
                    <div key={e} className="">
                      <div className={e}></div>
                    </div>
                  ))}
                </div>
                <div className="head2" style={{ justifyContent: "left" }}>
                  <h1>{props.title}</h1>
                </div>
                <ul className="head2">
                  {props.li.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <div className="images">
                  {props.img1.map((e) => (
                    <div key={e} className="">
                      <div className={e}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col30 col-md-4 col-12">
                <div className="title1">
                  <h2>{props.title1}</h2>
                </div>
                <ul>
                  {props.li1.map((e) => (
                    <div key={e}>
                      {e.ul.map((e) => (
                        <li>
                          <a href={e.path}>{e.li}</a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
                <div className="head2">
                  <h3>{props.title2}</h3>
                </div>
                <div className="images">
                  {props.img2.map((e) => (
                    <div key={e} className="">
                      <div className={e}></div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* NodejsItems*/}
          {props.type === "NodejsItems" && (
            <div className="node">
              <div className="head2">
                <h2>{props.title}</h2>
              </div>
              <div className="Nodejs">
                <div className="nodejs ">
                  {props.data.map((e) => (
                    <div className="nodejs">
                      <h6>
                        <ul>
                          <li>{e.listHead}</li>
                        </ul>
                      </h6>
                      <ul className="whiteul">
                        {e.ul.map((e) => (
                          <li>{e.li}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="nodejs ">
                  {props.data1.map((e) => (
                    <div className="nodejs">
                      <h6>
                        <ul>
                          <li>{e.listHead}</li>
                        </ul>
                      </h6>
                      <ul className="whiteul">
                        {e.ul.map((e) => (
                          <li>{e.li}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="nodejs ">
                  {props.data2.map((e) => (
                    <div className="nodejs">
                      <h6>
                        <ul>
                          <li>{e.listHead}</li>
                        </ul>
                      </h6>
                      <ul className="whiteul">
                        {e.ul.map((e) => (
                          <li>{e.li}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          )}
          {/* TECHNOLOGIES */}
          {/* 7030ulimg */}{" "}
          {props.type === "7030ulimg" && (
            <>
              <div className="col70">
                <div
                  className={
                    props.heading ? props.heading + " m0" : "heading1 m0"
                  }
                >
                  {props.title}
                </div>
                {props.para.map((e) => (
                  <div key={e}>
                    <p className="textLeft">{e}</p>
                  </div>
                ))}
                {props.button && (
                  <div className={props.btnFit ? "button fitWidth" : "button"}>
                    {props.button}
                  </div>
                )}
              </div>
              <div className="col30 alignCenter col30Flex">
                <h2>{props.title2}</h2>
                <ul>
                  {props.ul.map((e) => (
                    <div key={e}>
                      {e.ul.map((e) => (
                        <li>
                          <a href={e.path}>{e.li}</a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
                <div className={props.img}></div>
              </div>
            </>
          )}
          {/* Non Type Common Cards */}
          {!props.type && (
            <div className={props.center && "center"}>
              <div className="column">
                {props.title && (
                  <div
                    className={props.center ? "heading1 center" : "heading1"}
                  >
                    {props.title}
                  </div>
                )}
              </div>
              {props.switch ? (
                <div className="commonCard-row">
                  {props.img && (
                    <div className="col2">
                      {props.img && (
                        <div className="img">
                          {props.img.map((e) => (
                            <div key={e} className={e} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  <div className={props.img ? "wid60" : "col1"}>
                    {props.para && (
                      <div
                        className={
                          props.wid60 ? "body wid60 textCenter" : "body"
                        }
                      >
                        {props.para.map((e) => (
                          <p key={e}>{e}</p>
                        ))}
                      </div>
                    )}
                    {props.ul && (
                      <div className="list">
                        <ul>
                          {props.ul.map((e) => (
                            <li key={e} className={props.liClass}>
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {props.title2 && (
                      <h2 className="heading2">{props.title2}</h2>
                    )}
                    {props.table && (
                      <div>
                        <table>
                          {props.table.map((e) => (
                            <tr>
                              <td className="td1">{e.col1}</td>
                              <td className="td2">{e.col2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    )}
                    {props.button && (
                      <a href="/contact" style={{ textDecoration: "none" }}>
                        <div
                          className={
                            props.center ? "button btncenter" : "button"
                          }
                        >
                          {props.button}
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="commonCard-row">
                  <div className={props.img ? "wid60" : "col1"}>
                    {props.para && (
                      <div
                        className={
                          props.wid60 ? "body wid60 textCenter" : "body"
                        }
                      >
                        {props.para.map((e) => (
                          <p key={e}>{e}</p>
                        ))}
                      </div>
                    )}
                    {props.ul && (
                      <div className="list">
                        <ul>
                          {props.ul.map((e) => (
                            <li key={e} className={props.liClass}>
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {props.para2 && (
                      <div className="body">
                        {props.para2.map((e) => (
                          <p key={e}>{e}</p>
                        ))}
                      </div>
                    )}
                    {props.button && (
                      <a href="/contact" style={{ textDecoration: "none" }}>
                        <div
                          className={
                            props.center ? "button btncenter" : "button"
                          }
                        >
                          {props.button}
                        </div>
                      </a>
                    )}
                  </div>
                  {props.img && (
                    <div className="col2">
                      {props.img && (
                        <div className="img">
                          {props.img.map((e) => (
                            <div key={e} className={e} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommonCard;

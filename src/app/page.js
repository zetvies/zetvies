"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Lottie
import Lottie from "lottie-react";
import LoadingAnimation from "@/assets/lottie/Logo.json";

// Audio Player
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./audioplayer.scss";
// import Anindya from "@/assets/songs/Anindya.mp3";
// import Cat from "@/assets/songs/Cat.mp3";
// import Untuk from "@/assets/songs/Untuk.mp3";
import Disk from "@/assets/images/Disk.svg";
import { useMedia } from "react-use";

// Rabbit Hole
import Tower from "@/assets/images/Tower.svg";
import Rabbit from "@/assets/images/Rabbit.svg";
import Turtle from "@/assets/images/Turtle.svg";

//Profile
import Arsa from "@/assets/images/Arsa.jpg";
import Nongki from "@/assets/images/Nongki.png";
import Sisva from "@/assets/images/Sisva.png";
import Rayain from "@/assets/images/Rayain.png";
import Sensoria from "@/assets/images/Sensoria.jpg";
import PerfectLiar from "@/assets/images/Perfect-Liar.png";
import MurderByStage from "@/assets/images/Murder-By-Stage.jpeg";
import SalingSulam from "@/assets/images/Saling-Sulam.png";
import ArezaNirmala from "@/assets/images/Areza-Nirmala.jpg";
import SafeSpace from "@/assets/images/SafeSpace.png";
import { TypeAnimation } from "react-type-animation";

import { NextReactP5Wrapper } from "@p5-wrapper/next";
import Parser from "html-react-parser";

export default function Home() {
  const smUp = useMedia("(min-width: 640px)", false);
  const smMd = useMedia("(min-width: 640px) and (max-width:1025px)", false);
  const mdUp = useMedia("(min-width: 1025px)", false);
  const lottieRef = useRef();
  const audioPlayerRef = useRef();
  const mainRef = useRef();
  const portfolioRef = useRef();

  let [Anindya, setAnindya] = useState();
  let [Cat, setCat] = useState();
  let [Untuk, setUntuk] = useState();
  let [openModal, setOpenModal] = useState(0);
  let [openSection, setOpenSection] = useState(0);

  let modalContents = [
    {
      color: "bg-[#1f4846]",
    },
    {
      color: "bg-gradient-to-br from-sky-600 to-blue-700",
    },
    {
      color: "bg-[#3d2561]",
    },
    {
      color: "bg-[#04041c]",
    },
    {
      color: "bg-[#85b9c2]",
    },
    {
      color: "bg-[#b42f2e]",
    },
    {
      color: "bg-gradient-to-t from-[#deafb1] from-40% to-[#e1a1a3]",
    },
    {
      color: "bg-[#84765b]",
    },
    {
      color: "bg-[#8cb1cc]",
    },
  ];

  useEffect(() => {
    async function importFile() {
      const anindya = await import(`@/assets/songs/Anindya.mp3`);
      const cat = await import(`@/assets/songs/Cat.mp3`);
      const untuk = await import(`@/assets/songs/Untuk.mp3`);
      setAnindya(anindya.default);
      setCat(cat.default);
      setUntuk(untuk.default);

      audioPlayerRef.current.audio.current.pause();
    }
    importFile();
  }, []);

  let songs = [
    {
      title: "Anindya",
      file: Anindya,
      duration: 139,
    },
    {
      title: "Cat",
      file: Cat,
      duration: 295,
    },
    {
      title: "Untuk:",
      file: Untuk,
      duration: 257,
    },
  ];
  let [currentSong, setCurrentSong] = useState(0);

  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let scrollHandler = (event) => {
      if (event.deltaY === 100 || event.deltaY === -100) {
        event.preventDefault();

        if (openSection === 0) {
          mainRef.current.scrollBy({
            top: event.deltaY,
            behavior: "smooth",
          });
        }

        if (openModal === 0 && openSection === 2) {
          portfolioRef.current.scrollLeft =
            portfolioRef.current.scrollLeft + event.deltaY * 4;
        }
      }
    };

    mainRef.current.addEventListener("wheel", scrollHandler);

    return () => mainRef.current.removeEventListener("wheel", scrollHandler);
  }, [openSection, openModal]);

  const sketch = (p5) => {
    let xoff1 = 0;
    let xoff2 = 10000;
    let xoff3 = 43000;
    let xoff4 = 220000;
    let xoff5 = 900000;
    let xoff6 = 100000;
    let xoff7 = 913000;
    let xoff8 = 230000;
    let xoff9 = 300000;
    let xoff10 = 600000;
    let instagram = p5.createA("https://instagram.com/zetvies", "", "_blank");
    let email = p5.createA(
      "mailto:zetvies@gmail.com?subject=Hi%20Arsa!",
      "",
      "_blank"
    );
    let whatsapp = p5.createA(
      "https://wa.me/6282114461449?text=Hi+Arsa!",
      "",
      "_blank"
    );
    let medium = p5.createA("https://medium.com/@zetvies", "", "_blank");
    let linkedin = p5.createA("https://linkedin.com/in/zetvies", "", "_blank");

    p5.setup = () => {
      p5.createCanvas(
        window.innerWidth,
        mdUp ? window.innerHeight : (window.innerHeight * 70) / 100
      );

      // whatsapp.position(p5.width / 2, p5.height / 2);

      {
        smUp
          ? instagram.html(
              `<button style="background-color:black;color:white;height:16dvh;width:16dvh;transform:translate(-8dvh,-8dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Instagram.png" style="height:13dvh;"/></button>`
            )
          : instagram.html(
              `<button style="background-color:black;color:white;height:12dvh;width:12dvh;transform:translate(-6dvh,-6dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Instagram.png" style="height:10dvh;"/></button>`
            );
      }
      instagram.style("z-index:10");

      {
        smUp
          ? medium.html(
              `<button style="overflow:hidden; background-color:black;color:white;height:9dvh;width:9dvh;transform:translate(-4.5dvh,-4.5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Medium.png" style="height:7dvh;"/></button>`
            )
          : medium.html(
              `<button style="overflow:hidden; background-color:black;color:white;height:7dvh;width:7dvh;transform:translate(-3.5dvh,-3.5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Medium.png" style="height:5dvh;"/></button>`
            );
      }
      medium.style("z-index:10");

      {
        smUp
          ? linkedin.html(
              `<button style="overflow:hidden; background-color:black;color:white;height:11dvh;width:11dvh;transform:translate(-5,5dvh,-5,5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Linkedin.jpg" style="height:8dvh;"/></button>`
            )
          : linkedin.html(
              `<button style="overflow:hidden; background-color:black;color:white;height:9dvh;width:9dvh;transform:translate(-4dvh,-4dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:36px"><img src="/Linkedin.jpg" style="height:6dvh;"/></button>`
            );
      }
      linkedin.style("z-index:10");

      {
        smUp
          ? email.html(
              `<button style="background-color:white;border:2px solid black;color:black;height:15dvh;width:15dvh;transform:translate(-8dvh,-8dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:18px"><img src="/Email.png" style="height:10.5dvh;"/></button>`
            )
          : email.html(
              `<button style="background-color:white;border:2px solid black;color:black;height:12dvh;width:11dvh;transform:translate(-5.5dvh,-5.5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:18px"><img src="/Email.png" style="height:7dvh;"/></button>`
            );
      }
      email.style("z-index:11");

      {
        smUp
          ? whatsapp.html(
              `<button style="background-color:white;border:2px solid black;color:black;height:11dvh;width:11dvh;transform:translate(-5.5dvh,-5.5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:18px"><img src="/Whatsapp.png" style="height:5.5dvh;"/></button>`
            )
          : whatsapp.html(
              `<button style="background-color:white;border:2px solid black;color:black;height:9dvh;width:9dvh;transform:translate(-4.5dvh,-4.5dvh);border-radius:50%;padding:5%;text-align:center;line-height:36px;display:flex;justify-content:center;align-items:center;font-weight:800;font-size:18px"><img src="/Whatsapp.png" style="height:4.5dvh;"/></button>`
            );
      }
      whatsapp.style("z-index:10");
    };

    p5.draw = () => {
      // p5.background(0);
      let x = p5.map(p5.noise(xoff1), 0, 1, 0, p5.width);
      let y = p5.map(p5.noise(xoff2), 0, 1, 0, p5.height);
      let x2 = p5.map(p5.noise(xoff3), 0, 1, 0, p5.width);
      let y2 = p5.map(p5.noise(xoff4), 0, 1, 0, p5.height);
      let x3 = p5.map(p5.noise(xoff5), 0, 1, 0, p5.width);
      let y3 = p5.map(p5.noise(xoff6), 0, 1, 0, p5.height);
      let x4 = p5.map(p5.noise(xoff7), 0, 1, 0, p5.width);
      let y4 = p5.map(p5.noise(xoff8), 0, 1, 0, p5.height);
      let x5 = p5.map(p5.noise(xoff9), 0, 1, 0, p5.width);
      let y5 = p5.map(p5.noise(xoff10), 0, 1, 0, p5.height);

      xoff1 += 0.003;
      xoff2 += 0.003;
      xoff3 += 0.005;
      xoff4 += 0.005;
      xoff5 += 0.0075;
      xoff6 += 0.0075;
      xoff7 += 0.0075;
      xoff8 += 0.0075;
      xoff9 += 0.005;
      xoff10 += 0.005;

      p5.fill(0);
      instagram.position(x, y);
      email.position(x2, y2);
      whatsapp.position(x3, y3);
      medium.position(x4, y4);
      linkedin.position(x5, y5);
    };
  };
  return (
    <main
      ref={mainRef}
      className={`snap-y snap-mandatory scroll-smooth h-screen w-screen ${
        isLoaded ? "overflow-scroll" : "overflow-hidden"
      } overflow-x-hidden bg-[#bfd6e8]`}
    >
      <div className=" snap-always snap-start w-full h-[100dvh] flex justify-center items-center relative">
        <div className="mt-[40dvh] md:mt-[50dvh] flex flex-col items-center">
          <Lottie
            animationData={LoadingAnimation}
            lottieRef={lottieRef}
            style={{ height: mdUp ? "100dvh" : "80dvh", maxWidth: "90vw" }}
            loop={false}
            onComplete={() => {
              if (!isLoaded) {
                setIsLoaded(true);
              }
              lottieRef.current.playSegments([194, 204]);
            }}
          />
        </div>
      </div>

      <div
        className={` ${isLoaded ? "flex" : "hidden"}  w-full h-[15dvh]`}
      ></div>
      <div
        className={` ${
          isLoaded ? "flex" : "hidden"
        } snap-always snap-start w-full h-[100dvh] flex-col justify-end`}
      >
        <div className="flex flex-1 relative">
          <Image
            alt="tower"
            src={Tower}
            style={{
              height: mdUp ? "42.9dvh" : "34.2dvh",
              // maxWidth: smUp ? "34.4dvh" : "27.6dvh",
              width: mdUp ? "34.4dvh" : "27.6dvh",
              // position: "absolute",
              transform: mdUp ? "translateY(-21dvh)" : "translateY(-17dvh)",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              width: "auto",
            }}
          />
          <Image
            alt="rabbit"
            src={Rabbit}
            style={{
              display: "block",
              height: mdUp ? "65dvh" : "49dvh",
              width: mdUp ? "80dvh" : "40dvh",
              transform: smMd
                ? "translateX(23dvh)"
                : mdUp
                ? "translateX(32dvh)"
                : "translateX(12dvh)translateY(3dvh)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              // bottom: smUp ? "-80.4dvh" : "-60.1dvh",
              zIndex: 1,
            }}
          />
          <Image
            alt="turtle"
            src={Turtle}
            style={{
              display: "block",
              height: mdUp ? "25dvh" : "65dvh",
              width: mdUp ? "33dvh" : "21dvh",
              transform: smMd
                ? "translateX(-20dvh)translateY(-1dvh)"
                : mdUp
                ? "translateX(-30dvh)translateY(-32dvh)"
                : "translateX(-12dvh)translateY(-1dvh)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: 1,
            }}
          />
          <svg
            style={{
              display: "block",
              height: mdUp ? "7.5dvh" : "5.6dvh",
              width: "100%",
              // transform: "translateX(-2px)",
              position: "absolute",
              bottom: mdUp ? "59.8dvh" : "49.8dvh",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: 1,
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 59.3 86.2"
          >
            <path
              fill="#ffffff"
              d="M37.2,1.2c-1.7-0.5-8.8-2.6-16.7,0.2C8.6,5.6,0.4,18.7,0,34.5C0.2,51.7,0.5,69,0.7,86.2
c19.5-0.1,39-0.1,58.6-0.2c-0.1-17.8-0.1-35.6-0.2-53.5C57.9,17.4,49.2,5,37.2,1.2z"
            />
          </svg>
          <svg
            preserveAspectRatio="none"
            style={{
              display: "block",
              height: mdUp ? "60dvh" : "50dvh",
              width: mdUp ? "223dvh" : "170dvh",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(calc(-50% + .5dvh))translateY(2px)",
              marginLeft: "auto",
              marginRight: "auto",
              // zIndex: 1,
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1553.5 691.4"
          >
            <path
              fill="#404041"
              d="M754,0c0.2,0.5,0.5,1.2,1.1,2.1c1.7,2.6,4,3.9,5.3,4.7c7.1,4,15.2,6.9,19,8.1c6.1,1.8,4.6,1.1,10.4,2.9
	c10.3,3.1,14.7,5.2,32.6,11.1c0.3,0.1,0.5,0.2,0.7,0.2c7.2,2.4,17.5,5.8,30,10.3c8.1,4.6,8.8,7.7,8.7,9.3
	c-2.8,27.8-316.2,53.8-430,90.3c-12.5,4-36.4,12.6-46.7,34c-11.9,24.9,0.9,53.6,2,56c31.1,65.8,189,77.1,370,90
	c19,1.4,84.2,5.8,100.1,39.9c2.3,5,14.2,33,7.1,65.2c-0.4,2-0.8,3.6-1.1,4.7c-20,78.1-166.8,132.1-673.4,214.4
	C105.3,656.9,37.7,667,0,672.6c0,6.2,0,12.4,0,18.6c258.5,0.1,517,0.1,775.5,0.1c259.3,0,518.7,0.1,778,0.1
	c0.1-18.3,0.1-36.5,0.2-54.8c0-0.2-0.1-0.6-0.1-1.1c0,0-0.9-10.3-2.6-20.5c-20-123.3-149-233.9-149-233.9
	c-3.7-3.1-9.3-7.9-16.9-13.9C1202,220.2,956,214,956,214c-136.1-4.1-332,28.2-415.4-13.4c-3-1.5-10.3-5.2-10.5-10.5
	C529,149.6,953.1,131.2,957,62c0.4-7.5-4.1-14-8.5-18.6C942.9,34.3,935,29.2,929,26c-22.1-11.8-40.1-12.1-77.3-17
	c-12-1.6-29.1-4.3-49.6-9C786,0,770,0,754,0z"
            />
          </svg>
        </div>
        <div className="w-screen px-2 md:px-16 py-[1dvh] md:py-[4dvh] border-b-[35dvh] md:border-b-[10dvh] border-b-[#404041] h-[20dvh] md:h-[22dvh] bg-[#404041] flex flex-col md:flex-row text-white justify-between items-center">
          <div className="hidden md:flex text-[3] text-[2dvh] md:text-[2.5dvh]">
            Once upon a time, there was a boy who fell in love
            <br />
            with a girl whose tears tasted like moon dust.
          </div>
          <div className="flex md:hidden text-[2.2dvh] text-center mb-4">
            Once upon a time, there was a
            <br />
            boy who fell in love with a girl
            <br />
            whose tears tasted like moon dust.
          </div>

          <div className="flex">
            <button
              onClick={() => setOpenSection(1)}
              className="bg-[#afc150] hover:bg-[#9fb140] text-[2dvh] md:text-[2.5dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh]  font-bold"
            >
              About Me
            </button>
            <button
              onClick={() => {
                setOpenSection(2);
                portfolioRef.current.scrollLeft = 0;
              }}
              className="bg-[#00a0a2] hover:bg-[#0095a2] text-[2dvh] md:text-[2.5dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded font-bold"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
      {/* About */}
      <div
        className={` ${
          isLoaded && openSection === 1 ? "flex" : "hidden"
        } absolute top-0 left-0 z-[1000] snap-always snap-start w-full h-screen flex flex-col justify-end md:justify-center pb-[25dvh] md:pb-0 items-center overflow-hidden bg-[#c7d783]`}
      >
        <button
          className="absolute md:h-[6dvh] md:w-[6dvh] md:top-[5dvh] md:right-[5dvh]h-[4.4dvh] w-[4.4dvh] top-[4dvh] right-[4dvh] cursor-pointer z-[100000]"
          onClick={() => setOpenSection(0)}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
            className="h-[100%] w-[100%]"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <div className=" w-full h-[80dvh] md:h-screen flex flex-col justify-center items-center overflow-hidden absolute top-0 left-0">
          <NextReactP5Wrapper sketch={sketch} />
        </div>
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="text-gray-800 text-[3.2dvh] md:text-[5.5dvh] ">
            <b> Bimo Arsa</b>{" "}
            <span className="text-[2.8dvh] md:text-[5dvh]">is a</span>
          </div>
          <TypeAnimation
            sequence={[
              "Product Enthusiast",
              3000,
              "Scientific Artist",
              3000,
              "Creative Technologist",
              3000,
            ]}
            wrapper="i"
            speed={50}
            className="font-serif text-[3.8dvh] md:text-[7dvh]"
            style={{
              display: "inline-block",
              color: "rgb(31 41 55)",
              // marginLeft: 6,
              transform: "translateY(-10px)",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div
        className={` ${
          isLoaded && openSection === 2 ? "visible" : "invisible"
        } flex absolute top-0 left-0  z-[1000] snap-always snap-start w-full h-screen flex-col justify-center items-center overflow-hidden bg-[#1fb9bb]`}
      >
        <button
          className="absolute md:h-[6dvh] md:w-[6dvh] md:top-[5dvh] md:right-[5dvh]  fill-white h-[4.4dvh] w-[4.4dvh] top-[4dvh] right-[4dvh] cursor-pointer z-[100000]"
          onClick={() => setOpenSection(0)}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
            className="h-[100%] w-[100%]"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <div className="flex items-center flex-col md:flex-row justify-center ">
          <div className="text-white text-[2.4dvh] md:text-[2.8dvh] md:translate-x-0 md:w-[25dvh] md:text-right">
            I aspire to be
          </div>
          <div className=" flex justify-center mx-4 w-[32dvh]  md:translate-x-0">
            <TypeAnimation
              sequence={["Artsy✨", 3000, "Techy🤖", 3000, "Brandy🥂", 3000]}
              wrapper="i"
              speed={50}
              className="font-serif text-gray-100 text-[3.9dvh] md:text-[5dvh]"
              style={{
                display: "inline-block",
                // color: "rgb(31 41 55)",
                // marginLeft: 6,
                // transform: "translateY(-10px)",
              }}
              repeat={Infinity}
            />
          </div>

          <div className="text-white text-[2.4dvh] md:text-[2.8dvh]  md:translate-x-[-2dvh] md:w-[25dvh]  ">
            and I have proofs.
          </div>
        </div>

        <div
          ref={portfolioRef}
          id={"portfolio"}
          className="flex mt-[3dvh] w-[100vw] overflow-x-scroll pl-[15%] pr-[5%] md:pr-[8%] scroll-smooth pb-[4dvh] mb-[4dvh]"
        >
          <div className=" rotate-[-90deg] h-[10dvh] md:h-[15dvh] w-0 translate-y-[36dvh] md:translate-y-[39dvh] text-white text-bold text-[2.7dvh] md:text-[3.3dvh]">
            Product<span className="text-[#1fb9bb]">o</span>Development
          </div>
          <div
            className="flex flex-col bg-[#1f4846] rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
            onClick={() => setOpenModal(1)}
          >
            <div className="text-gray-100 p-[2.6dvh] z-10 ">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Nongki!
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Social Game Database
              </span>
              <div className="flex flex-wrap mt-[1.6dvh]">
                <div className="bg-[#bd3229] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Product Manager
                </div>
                <div className="bg-[#4275db] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
                <div className="bg-[#e4bf4b] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mt-[.8dvh] ">
                  Front End Developer
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[100%] absolute bottom-[-4.5dvh]">
              <Image src={Nongki} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div
            onClick={() => setOpenModal(2)}
            className=" bg-gradient-to-br from-sky-600 to-blue-700 shadow flex flex-col rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] z-10 ">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Sisva
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                School Digitalization
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#F96756] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Product Manager
                </div>
                <div className="bg-[#7F41CE] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
                <div className="bg-[#00AC96] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh] ">
                  Front End Developer
                </div>
                <div className="bg-[#F79F1C] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh] ">
                  UI/UX Design
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[100%] absolute bottom-[-7.2dvh]">
              <Image src={Sisva} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div
            onClick={() => setOpenModal(3)}
            className="flex flex-col bg-[#3d2561]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative"
          >
            <div className="text-gray-100 p-[2.6dvh] z-10 ">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Rayain
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Digital Greeting Card
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#5977f1] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Product Manager
                </div>
                <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
                <div className="bg-[#de556a] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh] ">
                  Front End Developer
                </div>
                <div className="bg-[#7b32ec] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh] ">
                  UI/UX Design
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[100%] absolute bottom-[-7.5dvh]">
              <Image src={Rayain} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="  rotate-[-90deg] h-[10dvh] md:h-[15dvh] w-0 translate-y-[36dvh] md:translate-y-[39dvh] text-white text-bold text-[2.7dvh] md:text-[3.3dvh] ml-[6dvh] md:ml-[10dvh]">
            Creative<span className="text-[#1fb9bb]">o</span>Technology
          </div>
          <div
            onClick={() => setOpenModal(4)}
            className="  flex flex-col bg-[#04041c]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] bg-gradient-to-b from-[#04041c] from-65% to-transparent  h-[50%] w-[100%] absolute top-0 z-20">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                SENSORIA
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Light Installation
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[70%] absolute bottom-0">
              <Image src={Sensoria} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div
            onClick={() => setOpenModal(5)}
            className="  flex flex-col bg-[#85b9c2]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] bg-gradient-to-b from-[#85b9c2] from-65% to-transparent  h-[50%] w-[100%] absolute top-0 z-20">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Perfect Liar
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Extended Reality
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#b5a468] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  XR Engineer
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[70%] absolute bottom-0">
              <Image src={PerfectLiar} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div
            onClick={() => setOpenModal(6)}
            className="  flex flex-col bg-[#b42f2e]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] bg-gradient-to-b from-[#b42f2e] from-70% to-transparent  h-[45%] w-[100%] absolute top-0 z-20">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Murder by Stage
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Festival Teater Jakarta
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#0e0b07] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Multimedia Design
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[70%] absolute bottom-0">
              <Image src={MurderByStage} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div
            onClick={() => setOpenModal(7)}
            className="flex flex-col  bg-gradient-to-t from-[#deafb1] from-60% to-[#e1a1a3]   rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] z-10 ">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                Saling Sulam
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Multiuser Augmented Reality
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#7f3b44] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
                <div className="bg-[#558f89] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold ">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[60%] absolute bottom-0">
              <Image src={SalingSulam} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="  rotate-[-90deg] h-[10dvh] md:h-[15dvh] w-0 translate-y-[29dvh] md:translate-y-[31dvh] text-white text-bold text-[2.7dvh] md:text-[3.3dvh] ml-[6dvh] md:ml-[10dvh]">
            Art<span className="text-[#1fb9bb]">o</span>Projects
          </div>

          <div
            onClick={() => setOpenModal(8)}
            className="  flex flex-col bg-[#84765b]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] mr-[2.4dvh] cursor-pointer relative "
          >
            <div className="text-gray-100 p-[2.6dvh] bg-gradient-to-b from-[#84765b] from-65% to-transparent  h-[50%] w-[100%] absolute top-0 z-20">
              <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
                {" "}
                Areza Nirmala
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Music EP
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Singer-Songwriter
                </div>
                <div className="bg-[#56432c] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Creative Director
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[70%] absolute bottom-0">
              <Image src={ArezaNirmala} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div className="  rotate-[-90deg] h-[10dvh] md:h-[15dvh] w-0 translate-y-[33dvh] md:translate-y-[37dvh] text-white text-bold text-[2.7dvh] md:text-[3.3dvh] ml-[6dvh] md:ml-[10dvh]">
            Voluntary<span className="text-[#1fb9bb]">o</span>Activities
          </div>

          <div
            onClick={() => setOpenModal(9)}
            className="  flex flex-col bg-[#8cb1cc]  rounded-[3dvh] overflow-hidden h-[53dvh] md:h-[57dvh] min-w-[39dvh] md:min-w-[42dvh]  md:max-w-[90vw] cursor-pointer relative"
          >
            <div className="text-gray-100 p-[2.6dvh] bg-gradient-to-b from-[#8cb1cc] from-65% to-transparent  h-[55%] w-[100%] absolute top-0 z-20">
              <b className="text-[3.1dvh] md:text-[3.4dvh] h-['fit-content']">
                {" "}
                Safe Space Indonesia
              </b>

              <span className="text-[2.2dvh] md:text-[2.4dvh]">
                <br />
                Spoken Word Art Platform
              </span>
              <div className="flex flex-wrap mt-[1.8dvh]">
                <div className="bg-[#91787b] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                  Core Team Member
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[70%] absolute bottom-0">
              <Image src={SafeSpace} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Modal */}
      <div
        className={` ${
          openModal === 0 ? "hidden" : ""
        } absolute top-0 left-0 h-screen w-screen`}
      >
        <div
          className=" absolute h-screen w-screen bg-[rgb(0,0,0,0.5)] top-0 left-0 z-[10000] cursor-pointer"
          onClick={() => setOpenModal(0)}
        ></div>
        <div
          className={`absolute bottom-0 md:right-0 w-[100vw] md:w-[80dvh] md:max-w-[85vw] ${
            modalContents[openModal - 1]?.color
          } h-[80dvh] md:h-screen rounded-t-[5dvh] md:rounded-l-[5dvh] md:rounded-tr-none z-[10010] overflow-hidden`}
        >
          <div
            className={`${
              openModal === 1 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh]  h-['fit-content']">
              Nongki!
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Social Game Database
            </span>
            <div className="flex flex-wrap mt-2">
              <div className="bg-[#bd3229] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh]">
                Product Manager
              </div>
              <div className="bg-[#4275db] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-[.8dvh]">
                Creative Director
              </div>
              <div className="bg-[#e4bf4b] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mt-[.8dvh]">
                Front End Developer
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Nongki!</b> is a platform dedicated to social games, where
              players can explore games across various genres. Beyond a mere
              game repository, Nongki! serves as a vibrant social space where
              gamers effortlessly connect, form communities, and dive into
              captivating social experiences.
            </p>

            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              In this project, we aim to push the boundaries of traditional
              website design methods.
            </p>

            <a href="https://nongki.space">
              <button className="bg-[#4E5AEA] hover:bg-[#3E4ADA] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                Visit Nongki!
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 2 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Sisva
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              School Digitalization
            </span>
            <div className="flex flex-wrap mt-2">
              <div className="bg-[#F96756] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-2">
                Product Manager
              </div>
              <div className="bg-[#7F41CE] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-2">
                Creative Director
              </div>
              <div className="bg-[#00AC96] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]  mt-2">
                Front End Developer
              </div>
              <div className="bg-[#F79F1C] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold  mt-2">
                UI/UX Design
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Sisva</b> is a SaaS EdTech platform revolutionizing educational
              systems by streamlining school operations and digitizing every
              aspect of the academic experience. With a dedicated mission to
              simplify school processes, Sisva offers a comprehensive suite of
              tools and solutions aimed at enhancing efficiency and
              accessibility, making administrative tasks more manageable and
              fostering a more engaging learning environment.
            </p>

            <a href="https://sisva.id">
              <button className="bg-[#ee462b] hover:bg-[#de361b] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                Visit Sisva
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 3 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Rayain
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Digital Greeting Card
            </span>
            <div className="flex flex-wrap mt-2">
              <div className="bg-[#5977f1] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-2">
                Product Manager
              </div>
              <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-2">
                Creative Director
              </div>
              <div className="bg-[#de556a] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh] mt-2 ">
                Front End Developer
              </div>
              <div className="bg-[#7b32ec] w-[fit-content]  p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mt-2 ">
                UI/UX Design
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Rayain</b> is a modern digital greeting card platform designed
              to infuse special moments with heartfelt celebrations. With its
              innovative approach, Rayain offers a seamless way to mark
              cherished occasions, providing a diverse range of customizable
              digital cards for every heartfelt sentiment. Rayain ensures
              special moment is commemorated with sincerity and joy.
            </p>

            <a href="https://rayain.id">
              <button className="bg-[#4eac5e] hover:bg-[#3e9c4e] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                Visit Rayain
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 4 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              SENSORIA
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Light Installation
            </span>
            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Creative Director
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>SENSORIA</b> is an immersive workshop curated by Goethe
              Institut Indonesia, where participants delve into the world of
              lighting installations guided by renowned experts Convert Textured
              and Tomy Herseta. This immersive experience offers participants a
              deep dive into the world of creating evocative atmospheres and
              immersive spaces through scenography.
            </p>

            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              In the workshop that was organized from June-September 2023, Bimo
              Arsa was part of the Light Installation team.
            </p>

            <a href="https://www.goethe.de/ins/id/id/ver.cfm?event_id=24974490">
              <button className="bg-[#4eac5e] hover:bg-[#3e9c4e] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                View Article
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 5 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Perfect Liar
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Extended Reality
            </span>
            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#b5a468] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                XR Engineer
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Perfect Liar</b> is a sensational single by Putri Ariani, the
              Indonesian prodigy who astounded audiences with her remarkable
              performance on America's Got Talent. With haunting melodies and
              poignant lyrics, "Perfect Liar" takes listeners on an evocative
              musical voyage, showcasing Putri's raw talent and ability to
              connect deeply through her music.
            </p>

            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              In the creation of the Music Video, Bimo Arsa was part of XR
              Engineer team who are responsible for planning and operating the
              cutting-edge technology.
            </p>

            <a href="https://www.youtube.com/watch?v=-K6nfNuImOc">
              <button className="bg-[#b5a468] hover:bg-[#a59458] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                Watch Perfect Liar
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 6 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Murder by Stage
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Extended Reality
            </span>
            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#000000] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Multimedia Design
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Murder by Stage: A Killing Enigma</b> is an enthralling theatre
              piece by Teater Asa, eligible for performance at the illustrious
              Festival Teater Jakarta, a pinnacle in Indonesia's theater
              landscape. This production unravels a gripping mystery, weaving
              together suspense, intrigue, and masterful storytelling.
              Itsflawless execution have earned numerous prestigious awards and
              accolades.
            </p>

            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              In this production, Bimo Arsa took part as Multimedia Design to
              create a way of story-telling that triggers wonder.
            </p>

            <a href="https://www.instagram.com/p/Cy2YzlxyZQ_/?next=%2Fp%2FB9Q6c9OHMxT%2F&hl=ne">
              <button className="bg-[#000000] hover:bg-[#202020] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                View Official Documentation
              </button>
            </a>
          </div>

          <div
            className={`${
              openModal === 7 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Saling Sulam
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Multiuser Augmented Reality
            </span>

            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#7f3b44] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Creative Director
              </div>
              <div className="bg-[#558f89] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold ">
                Full Stack Developer
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Saling Sulam</b> is an innovative exhibit crafted by no:rue for
              Ourchetype Exhibition held in December 2023 - January 2024, Using
              a novel approach to multiuser Augmented Reality, visitors are
              invited to partake in a collaborative experience, contributing to
              the creation of a stunning embroidery together and fostering a
              sense of community and shared artistry.
            </p>

            <div className="flex flex-col md:flex-row">
              <a href="https://salingsulam.zetvi.es">
                <button className="bg-[#7f3b44] hover:bg-[#6f2b34] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                  Visit Saling Sulam
                </button>
              </a>
              <a href="https://www.instagram.com/ourchetype/">
                <button className="bg-[#558f89] hover:bg-[#457f79] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[.8dvh] font-bold">
                  Visit Ourchetype
                </button>
              </a>
            </div>
          </div>

          <div
            className={`${
              openModal === 8 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Areza Nirmala
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">Music EP</span>

            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#4eac5e] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Singer-Songwriter
              </div>
              <div className="bg-[#56432c] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Creative Director
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Areza Nirmala</b> is a story about encounters, farewells, and
              everything that happens in between.
            </p>
            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              This project was initiated by Bimo Arsa and Nissa Annabiilah, and
              given life by Eky Rizkani through the magical arrangements he
              crafted. Comprising five songs that chronologically narrate in
              five acts, Areza Nirmala invites us for a fleeting glance through
              the journey of human relationships - and ultimately, reflecting on
              our own individual connections.
            </p>

            <div className="flex">
              <a href="https://www.youtube.com/watch?v=hw-1M0Gacn0&pp=ygUNYXJlemEgbmlybWFsYQ%3D%3D">
                <button className="bg-[#4eac5e] hover:bg-[#3e9c4e] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                  Explore Areza Nirmala
                </button>
              </a>
            </div>
          </div>

          <div
            className={`${
              openModal === 9 ? "" : "hidden"
            } text-gray-100 p-[3dvh] md:p-[3.3dvh] absolute top-0 left-0 z-[10020] flex flex-col`}
          >
            <b className="text-[3.4dvh] md:text-[3.6dvh] h-['fit-content']">
              Safe Space Indonesia
            </b>

            <span className="text-[2.2dvh] md:text-[2.4dvh]">
              Spoken Word Art Platform
            </span>

            <div className="flex flex-wrap mt-[1.8dvh]">
              <div className="bg-[#91787b] w-[fit-content] p-[.5dvh] px-[1dvh] text-[1.6dvh] md:text-[1.7dvh] rounded font-bold mr-[.8dvh]">
                Core Team Member
              </div>
            </div>

            <p className="mt-[3dvh] text-[2dvh] md:text-[2.2dvh]">
              <b>Safe Space Indonesia</b> is an Indonesia-based home of
              storytellers, lyricists, spoken word poets, and more.
            </p>
            <p className="mt-[1dvh] text-[2dvh] md:text-[2.2dvh]">
              We are building a non-judgmental, secure haven for creative
              expression, inviting individuals from every walk of life to freely
              share their voices. At our core, we hold the firm belief that
              access to artistic expression and safe, inclusive spaces is an
              inherent right for all.
            </p>

            <div className="flex">
              <a href="https://safespaceindo.com/">
                <button className="bg-[#91787b] hover:bg-[#81686b] text-[2dvh] md:text-[2.2dvh] text-white py-[1dvh] px-[2dvh] md:px-[3dvh] w-fit rounded  mr-[.8dvh] mt-[1.6dvh] font-bold">
                  Visit Safe Space Indonesia
                </button>
              </a>
            </div>
          </div>

          <div
            className={`${
              openModal === 1 ? "md:flex" : ""
            } hidden  w-[100%] h-[70%] absolute bottom-[-5dvh] z-1 `}
          >
            <Image src={Nongki} fill style={{ objectFit: "cover" }} />
          </div>

          <div
            className={`${
              openModal === 2 ? "md:flex" : ""
            } hidden w-[100%] h-[70%] absolute bottom-[-4dvh] z-1 `}
          >
            <Image src={Sisva} fill style={{ objectFit: "contain" }} />
          </div>

          <div
            className={`${
              openModal === 3 ? "md:flex" : ""
            } hidden w-[80%] h-[60%] right-0 absolute bottom-[-3dvh] z-1`}
          >
            <Image src={Rayain} fill style={{ objectFit: "contain" }} />
          </div>

          <div
            className={` ${
              openModal === 4 ? "md:flex" : ""
            } hidden flex-col bg-[#04041c] rounded-[3dvh] overflow-hidden h-screen w-[100%] cursor-pointer relative `}
          >
            <div className="text-gray-100 p-4 bg-gradient-to-b from-[#04041c] from-65% to-transparent  h-[85%] w-[100%] absolute top-0 z-20"></div>
            <div className=" w-[100%] h-[45%] absolute bottom-0">
              <Image src={Sensoria} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div
            className={` ${
              openModal === 5 ? "md:flex" : ""
            } hidden flex-col  rounded-[3dvh] overflow-hidden h-screen w-[100%] cursor-pointer relative `}
          >
            <div className="text-gray-100 p-4 bg-gradient-to-b from-[#85b9c2] from-65% to-transparent  h-[85%] w-[100%] absolute top-0 z-20"></div>
            <div className=" w-[100%] h-[45%] absolute bottom-0">
              <Image src={PerfectLiar} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div
            className={` ${
              openModal === 6 ? "md:flex" : ""
            } hidden flex-col  rounded-[3dvh] overflow-hidden h-screen w-[100%] cursor-pointer relative `}
          >
            <div className="text-gray-100 p-4 bg-gradient-to-b from-[#b42f2e] from-65% to-transparent  h-[85%] w-[100%] absolute top-0 z-20"></div>
            <div className=" w-[100%] h-[55%] absolute bottom-0">
              <Image src={MurderByStage} fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div
            className={`${
              openModal === 7 ? "md:flex" : ""
            } hidden w-[100%] h-[40%] absolute bottom-[1.5dvh] z-1`}
          >
            <Image src={SalingSulam} fill style={{ objectFit: "contain" }} />
          </div>

          <div
            className={` ${
              openModal === 8 ? "md:flex" : ""
            } hidden flex-col  rounded-[3dvh] overflow-hidden h-screen w-[100%] cursor-pointer relative `}
          >
            <div className="text-gray-100 p-4 bg-gradient-to-b from-[#84765b] from-65% to-transparent  h-[85%] w-[100%] absolute top-0 z-20"></div>
            <div className=" w-[100%] h-[55%] absolute bottom-0">
              <Image src={ArezaNirmala} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div
            className={` ${
              openModal === 9 ? "md:flex" : ""
            } hidden flex-col  rounded-[3dvh] overflow-hidden h-screen w-[100%] cursor-pointer relative `}
          >
            <div className="text-gray-100 p-4 bg-gradient-to-b from-[#8cb1cc] from-65% to-transparent  h-[85%] w-[100%] absolute top-0 z-20"></div>
            <div className=" w-[100%] h-[55%] absolute bottom-0">
              <Image src={SafeSpace} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>

      <AudioPlayer
        ref={audioPlayerRef}
        className={`${
          isLoaded ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
        src={songs[currentSong].file}
        showSkipControls={true}
        showJumpControls={false}
        autoPlay={false}
        autoPlayAfterSrcChange={true}
        defaultCurrentTime="00:00"
        defaultDuration={`0${Math.floor(songs[currentSong].duration / 60)}:${
          songs[currentSong].duration % 60 < 10
            ? "0" + (songs[currentSong].duration % 60)
            : songs[currentSong].duration % 60
        }`}
        customVolumeControls={smUp ? [RHAP_UI.VOLUME] : []}
        onClickPrevious={() => {
          setCurrentSong(currentSong > 0 ? currentSong - 1 : 2);
        }}
        onClickNext={() => {
          setCurrentSong(currentSong < 2 ? currentSong + 1 : 0);
        }}
        onEnded={() => {
          setCurrentSong(currentSong < 2 ? currentSong + 1 : 0);
        }}
        layout={mdUp ? "horizontal" : "stacked-reverse"}
        customAdditionalControls={[
          <div
            style={{
              alignItems: "center",
              flex: 1,
            }}
            className="flex md:hidden"
          >
            <Image
              src={Disk}
              alt="Disk"
              style={{ height: "3.3dvh", width: "4dvh", marginRight: ".8dvh" }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                maxWidth: "20dvh",
                width: "45vw",
              }}
            >
              <div
                style={{
                  fontSize: "2.2dvh",
                  fontWeight: 700,
                  marginRight: ".5dvh",
                }}
              >
                {songs[currentSong].title}{" "}
              </div>
              <div
                style={{
                  fontSize: "1.7dvh",
                  fontWeight: 400,
                  transform: "translateY(-1px)",
                  marginTop: 2,
                }}
              >
                Bimo Arsa
              </div>
            </div>
          </div>,
        ]}
        customProgressBarSection={[
          <div
            style={{
              marginRight: "6vw",
              alignItems: "center",
              minWidth: 160,
            }}
            className="hidden md:flex"
          >
            <Image
              src={Disk}
              alt="Disk"
              style={{ height: "4.8dvh", width: "4.8dvh" }}
            />
            <div style={{ marginLeft: "1.4dvh", textAlign: "left" }}>
              <span style={{ fontSize: "2.7dvh", fontWeight: 700 }}>
                {songs[currentSong].title}
              </span>
              <br />
              <span className="font black" style={{ fontSize: "2dvh" }}>
                Bimo Arsa
              </span>
            </div>
          </div>,
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
        ]}
      />
    </main>
  );
}

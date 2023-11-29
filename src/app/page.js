"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Lottie
import Lottie from "lottie-react";
import LoadingAnimation from "@/assets/lottie/Logo.json";

// Audio Player
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./audioplayer.scss";
import Anindya from "@/assets/songs/Anindya.mp3";
import Cat from "@/assets/songs/Cat.mp3";
import Untuk from "@/assets/songs/Untuk.mp3";
import Disk from "@/assets/images/Disk.svg";
import { useMedia } from "react-use";

// Rabbit Hole
import Tower from "@/assets/images/Tower.svg";
import Rabbit from "@/assets/images/Rabbit.svg";
import Turtle from "@/assets/images/Turtle.svg";

//Profile
import Arsa from "@/assets/images/Arsa.jpg";

export default function Home() {
  const smUp = useMedia("(min-width: 640px)");
  const smMd = useMedia("(min-width: 640px) and (max-width:850px)");
  const mdUp = useMedia("(min-width: 850px)");
  const lottieRef = useRef();
  const mainRef = useRef();

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
  let [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    mainRef.current.addEventListener("wheel", function (event) {
      if (event.deltaY === 100 || event.deltaY === -100) {
        event.preventDefault();

        mainRef.current.scrollBy({
          top: event.deltaY,
          behavior: "smooth",
        });
      }
    });
  }, []);
  return (
    <main
      ref={mainRef}
      className="snap-y snap-mandatory scroll-smooth h-screen w-screen overflow-scroll overflow-x-hidden bg-[#bfd6e8] "
    >
      <div className=" snap-always snap-start w-full h-[100vh] flex justify-center items-center relative">
        <div className="mt-[95vh] flex flex-col items-center">
          <Lottie
            animationData={LoadingAnimation}
            lottieRef={lottieRef}
            style={{ height: smUp ? "100vh" : "80vh", maxWidth: "90vw" }}
            loop={false}
            onComplete={() => {
              if (!isLoaded) {
                setIsLoaded(true);
              }
              lottieRef.current.playSegments([194, 204]);
            }}
          />
          <div
            style={{
              height: "40vh",
              // maxWidth: smUp ? "34.4vh" : "27.6vh",
              width: smUp ? "34.4vh" : "27.6vh",
              // position: "absolute",
              transform: smUp
                ? "translateY(-33vh)translateX(-.5px)"
                : "translateY(-24vh)translateX(-.5px)",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* <Image src={Tower} style={{ width: "auto" }} /> */}
          </div>
        </div>
      </div>

      <div className="w-full h-[15vh]"></div>
      <div className=" snap-always snap-start w-full h-[100vh] flex flex-col justify-end">
        <div className="flex flex-1 relative">
          <Image
            src={Tower}
            style={{
              height: smUp ? "42.9vh" : "34.2vh",
              // maxWidth: smUp ? "34.4vh" : "27.6vh",
              width: smUp ? "34.4vh" : "27.6vh",
              // position: "absolute",
              transform: "translateY(-21vh)translateX(0px)",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              width: "auto",
            }}
          />
          <Image
            src={Rabbit}
            style={{
              display: "block",
              height: smMd ? "50vh" : mdUp ? "65vh" : "49vh",
              width: smMd ? "55vh" : mdUp ? "80vh" : "40vh",
              transform: smMd
                ? "translateX(23vh)"
                : mdUp
                ? "translateX(32vh)"
                : "translateX(12vh)translateY(3vh)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              // bottom: smUp ? "-80.4vh" : "-60.1vh",
              zIndex: 1,
            }}
          />
          <Image
            src={Turtle}
            style={{
              display: "block",
              height: smUp ? "20vh" : mdUp ? "25vh" : "65vh",
              width: smMd ? "24vh" : mdUp ? "33vh" : "21vh",
              transform: smMd
                ? "translateX(-20vh)translateY(-32vh)"
                : mdUp
                ? "translateX(-30vh)translateY(-32vh)"
                : "translateX(-12vh)translateY(-6vh)",
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
              height: smUp ? "7.5vh" : "5.6vh",
              width: "100%",
              // transform: "translateX(-2px)",
              position: "absolute",
              bottom: smUp ? "59.6vh" : "56.8vh",
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
              height: smUp ? "60vh" : "57vh",
              width: smUp ? "223vh" : "170vh",
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(calc(-50% + 3px))translateY(2px)",
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
        <div className="w-screen px-2 sm:px-4 md:px-16 py-[1vh] sm:py-[4vh] border-b-[32vh] sm:border-b-[10vh] border-b-[#404041] h-[20vh] sm:h-[22vh] bg-[#404041] flex flex-col sm:flex-row text-white justify-between items-center">
          <div className="hidden sm:flex text-[15px] md:text-[18px]">
            Once upon a time, there was a boy who fell in love
            <br />
            with a girl whose tears tasted like moon dust.
          </div>
          <div className="flex sm:hidden text-[13px] text-center mb-4">
            Once upon a time, there was a
            <br />
            boy who fell in love with a girl
            <br />
            whose tears tasted like moon dust.
          </div>

          <div className="flex">
            <button className="bg-[#00a0a2] hover:bg-[#0095a2] text-[15px] md:text-[18px] text-white py-2 px-6 w-fit rounded mr-2 font-bold">
              Personal
            </button>
            <button className="bg-[#afc150] hover:bg-[#9fb140] text-[15px] md:text-[18px] text-white py-2 px-6 w-fit rounded font-bold">
              Projects
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" snap-always snap-start w-full h-screen pb-[40px] flex justify-center items-center overflow-hidden relative bg-[#404041]">
        <div className="flex items-center">
          <div
            style={{
              height: "350px",
              width: "300px",
              position: "relative",
              marginRight: "4vw",
              // transform:"translateY(-30px)"
              // zIndex:-1
            }}
          >
            <Image
              src={Arsa}
              fill
              style={{ objectFit: "cover", objectPosition: "bottom right" }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-gray-100  text-[28px]  font-bold ">
              Bimo Arsa
            </div>
            <p className="text-gray-100  text-[22px]  leading-6">
               is a scientific-artist
              <br />
              trying to make the world
              <br />
              just a little bit more fun,
              <br />
              one project at a time.
            </p>
            <button className="bg-[#00a0a2] text-white py-2 px-4 w-fit  mt-4 rounded">
              Stalk me on <b>Instagram</b>{" "}
            </button>
          </div>
        </div>
      </div> */}
      <AudioPlayer
        className={`${
          isLoaded ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
        src={songs[currentSong].file}
        showSkipControls={true}
        showJumpControls={false}
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
        layout={smUp ? "horizontal" : "stacked-reverse"}
        customAdditionalControls={[
          <div
            style={{
              alignItems: "center",
              flex: 1,
            }}
            className="flex sm:hidden"
          >
            <Image
              src={Disk}
              alt="Disk"
              style={{ height: 28, width: 28, marginRight: 6 }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                maxWidth: 205,
                width: "45vw",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  marginRight: "4px",
                }}
              >
                {songs[currentSong].title}{" "}
              </div>
              <div
                style={{
                  fontSize: 12,
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
            className="hidden sm:flex"
          >
            <Image src={Disk} alt="Disk" style={{ height: 40, width: 40 }} />
            <div style={{ marginLeft: "8px", textAlign: "left" }}>
              <span style={{ fontSize: "18px", fontWeight: 700 }}>
                {songs[currentSong].title}
              </span>
              <br />
              <span className="font black" style={{ fontSize: "14px" }}>
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

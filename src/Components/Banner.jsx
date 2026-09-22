import { useEffect, useState } from "react";
import $ from "../jquerySetup.js";

const Banner = () => {

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bgFit = isMobile ? "cover" : "contain";


    /*
    ==========================================
    REVOLUTION SLIDER INITIALIZATION
    ==========================================
    */

    useEffect(() => {

        const initSlider = () => {

            const $slider = $("#rev_slider_1_1");

            // console.log("REV SLIDER ELEMENT:", $slider.length);
            // console.log(
            //     "REVOLUTION FUNCTION:",
            //     typeof $.fn.revolution
            // );

            // Slider element does not exist
            if (!$slider.length) {
                // console.error(
                //     "REV SLIDER: #rev_slider_1_1 not found"
                // );
                return;
            }

            // Revolution Slider plugin is not loaded
            if (typeof $slider.revolution !== "function") {
                // console.error(
                //     "REV SLIDER: revolution plugin not loaded"
                // );
                return;
            }

            // Prevent duplicate initialization
            if ($slider.hasClass("revslider-initialised")) {
                // console.log(
                //     "REV SLIDER: already initialized"
                // );
                return;
            }

            // console.log("REV SLIDER: initializing");

            try {
                console.log("JQUERY VERSION:", $.fn.jquery);
                console.log("EASING:", $.easing);
                console.log("POWER3:", $.easing?.Power3);
                console.log("POWER4:", $.easing?.Power4);

                console.log("PUNCHGS:", window.punchgs);
                console.log("PUNCHGS POWER3:", window.punchgs?.Power3);
                console.log("PUNCHGS POWER4:", window.punchgs?.Power4);
                console.log("PUNCHGS TWEENLITE:", window.punchgs?.TweenLite);

                $slider.show().revolution({
                    hide_onmobile: false,
                    hide_under: 0,

                    /*
                    IMPORTANT:
                    This should point to the folder where
                    Revolution Slider assets are available.
                    */
                    jsFileLocation: "/vendor/",

                    sliderLayout: "fullscreen",

                    dottedOverlay: "none",

                    delay: 5000,

                    navigation: {

                        keyboardNavigation: "off",

                        keyboard_direction: "horizontal",

                        mouseScrollNavigation: "off",

                        mouseScrollReverse: "default",

                        onHoverStop: "off",

                        arrows: {

                            style: "gyges",

                            enable: true,

                            hide_onmobile: true,

                            hide_under: 767,

                            hide_onleave: false,

                            tmp: "",

                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            },

                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            }

                        }

                    },

                    responsiveLevels: [
                        1240,
                        1024,
                        778,
                        480
                    ],

                    visibilityLevels: [
                        1240,
                        1024,
                        778,
                        480
                    ],

                    gridwidth: [
                        1140,
                        1024,
                        778,
                        480
                    ],

                    gridheight: [
                        700,
                        768,
                        960,
                        420
                    ],

                    lazyType: "none",

                    parallax: {

                        type: "mouse",

                        origo: "enterpoint",

                        speed: 400,

                        speedbg: 0,

                        speedls: 0,

                        levels: [
                            2,
                            3,
                            5,
                            10,
                            25,
                            30,
                            35,
                            40,
                            45,
                            46,
                            47,
                            48,
                            49,
                            50,
                            51,
                            55
                        ],

                        disable_onmobile: "on"

                    },

                    shadow: 0,

                    spinner: "off",

                    stopLoop: "off",

                    stopAfterLoops: -1,

                    stopAtSlide: -1,

                    shuffle: "off",

                    autoHeight: "off",

                    fullScreenAutoWidth: "off",

                    fullScreenAlignForce: "off",

                    fullScreenOffsetContainer: "",

                    fullScreenOffset: "",

                    disableProgressBar: "on",

                    hideThumbsOnMobile: "off",

                    hideSliderAtLimit: 0,

                    hideCaptionAtLimit: 0,

                    hideAllCaptionAtLilmit: 0,

                    debugMode: false,

                    fallbacks: {

                        simplifyAll: "off",

                        nextSlideOnWindowFocus: "off",

                        disableFocusListener: false

                    }

                });

            } catch (error) {

                console.error(
                    "REV SLIDER INITIALIZATION ERROR:",
                    error
                );

            }

        };


        /*
        React has rendered Banner at this point,
        so #rev_slider_1_1 should exist.
        */

        initSlider();

        const sliderWrapper = document.getElementById("rev_slider_1_1_wrapper");
        const $slider = $("#rev_slider_1_1");
        const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
        let touchStartX = 0;
        let touchStartY = 0;

        const handleTouchStart = (event) => {
            const touch = event.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        };

        const handleTouchEnd = (event) => {
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;

            if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
                return;
            }

            if (deltaX < 0 && typeof $slider.revnext === "function") {
                $slider.revnext();
            } else if (deltaX > 0 && typeof $slider.revprev === "function") {
                $slider.revprev();
            }
        };

        if (isMobileViewport) {
            sliderWrapper?.addEventListener("touchstart", handleTouchStart, { passive: true });
            sliderWrapper?.addEventListener("touchend", handleTouchEnd, { passive: true });
        }


        /*
        Cleanup.
        This is particularly useful because your
        app is wrapped in React StrictMode.
        */

        return () => {

            sliderWrapper?.removeEventListener("touchstart", handleTouchStart);
            sliderWrapper?.removeEventListener("touchend", handleTouchEnd);

            const $slider = $("#rev_slider_1_1");

            if (!$slider.length) {
                return;
            }

            try {

                if (
                    typeof $slider.revkill === "function" &&
                    $slider.hasClass("revslider-initialised")
                ) {

                    // console.log(
                    //     "REV SLIDER: destroying"
                    // );

                    $slider.revkill();

                }

            } catch (error) {

                console.warn(
                    "REV SLIDER CLEANUP ERROR:",
                    error
                );

            }

        };

    }, []);


    return (
        <>
            {/* Fallback slide backgrounds as CSS classes (not inline style) — Revolution Slider's JS
                overwrites each <li>'s inline `style` attribute on init and on every slide change, so an
                inline backgroundColor gets wiped out after the first paint. A className survives that. */}

            <style>{`
                #rev_slider_1_1 > ul > li.slide-fallback-dark {
                    background-color: #e9e4de !important;
                }

                #rev_slider_1_1 > ul > li.slide-fallback-light {
                    background-color: #f5f5f5 !important;
                }

                #rev_slider_1_1 > ul > li.slide-fallback-tan {
                    background-color: #e9e4de !important;
                }

                @media (max-width: 767px) {
                    #slide-2-layer-3 {
                        box-sizing: border-box !important;
                        max-width: calc(100vw - 40px) !important;
                        text-align: center !important;
                        white-space: normal !important;
                        width: calc(100vw - 40px) !important;
                    }

                    #slide-4-layer-3 {
                        box-sizing: border-box !important;
                        max-width: calc(100vw - 40px) !important;
                        text-align: center !important;
                        white-space: normal !important;
                        width: calc(100vw - 40px) !important;
                    }

                    #slide-1-layer-3 {
                        box-sizing: border-box !important;
                        max-width: calc(100vw - 40px) !important;
                        text-align: center !important;
                        white-space: normal !important;
                        width: calc(100vw - 40px) !important;
                    }
                }
            `}</style>


            <div className="slider">

                <div
                    id="rev_slider_1_1_wrapper"
                    className="rev_slider_wrapper fullscreen-container banner-text"
                    data-alias="slider-shop"
                    data-source="gallery"
                    style={{
                        background: "rgba(255,255,255,0)",
                        padding: "0px"
                    }}
                >

                    <div
                        id="rev_slider_1_1"
                        className="rev_slider fullscreenbanner"
                        style={{ display: "none" }}
                        data-version="5.4.8.1"
                    >

                        <ul>

                            {/* ==========================================
                                SLIDE 3
                            ========================================== */}

                            <li
                                className="slide-fallback-dark"
                                data-index="rs-3"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="300"
                                data-thumb="assets/100x50_44515-slider-bg-3.jpg"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide 3"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description=""
                            >

                                <img
                                    src="images/Reverie1.png"
                                    data-bgposition="right center"
                                    data-bgfit={bgFit}
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    alt="slider-image"
                                    data-no-retina
                                />


                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-2"
                                    id="slide-3-layer-1"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-120','-115','-114','-114']"
                                    data-fontsize="['16','14','14','14']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: "nowrap",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        fontWeight: 500,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    You found us
                                </div>


                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-3"
                                    id="slide-3-layer-2"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-52','-52','-52','-52']"
                                    data-fontsize="['60','60','50','40']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        whiteSpace: "nowrap",
                                        fontSize: "60px",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        letterSpacing: "0px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Welcome to Tales
                                    <span
                                        style={{
                                            color: "#ab8754",
                                            marginLeft: "0px",
                                            WebkitTextStroke: "1px #ffff"
                                        }}
                                    >
                                        Told
                                    </span>
                                </div>


                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-2"
                                    id="slide-3-layer-3"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 7,
                                        whiteSpace: "nowrap",
                                        fontSize: "18px",
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Every canvas tells a story
                                </div>


                                <div
                                    className="tp-caption rev-btn rs-parallaxlevel-2"
                                    id="slide-3-layer-4"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['82','82','73','70']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 11,
                                        maxWidth: "960px",
                                        whiteSpace: "nowrap",
                                        fontSize: "12px",
                                        lineHeight: "22px",
                                        fontWeight: 600,
                                        letterSpacing: "0px",
                                        fontFamily: "Poppins"
                                    }}
                                >
                                    <a
                                        href="/products"
                                        className="btn white-into-black-trans-btn mr-3"
                                    >
                                        EXPLORE
                                    </a>
                                </div>

                            </li>


                            {/* ==========================================
                                SLIDE 4
                            ========================================== */}

                            <li
                                className="slide-fallback-light"
                                data-index="rs-4"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="300"
                                data-thumb="assets/100x50_9a2ac-slider-bg-4.jpg"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide 4"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description=""
                            >

                                <img
                                    src="images/potrait1.png"
                                    alt=""
                                    data-bgposition="bottom left"
                                    data-bgfit={bgFit}
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-4-layer-1"
                                    data-x="['right','center','center','center']"
                                    data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-120','-115','-114','-114']"
                                    data-fontsize="['16','14','14','14']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: "nowrap",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        fontWeight: 500,
                                        letterSpacing: "0px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Art that speaks for itself
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-4-layer-2"
                                    data-x="['right','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-52','-52','-52','-52']"
                                    data-fontsize="['60','60','50','40']"
                                    data-lineheight="['54','54','48','45']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        whiteSpace: "nowrap",
                                        fontSize: "60px",
                                        lineHeight: "57px",
                                        fontWeight: 500,
                                        letterSpacing: "0px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Made with Passion
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-4-layer-3"
                                    data-x="['right','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','17','17']"
                                    data-width="['none','none','300','300']"
                                    data-height="none"
                                    data-whitespace="['nowrap','nowrap','normal','normal']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 7,
                                        whiteSpace: "nowrap",
                                        fontSize: "18px",
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Discover artwork crafted to bring character to every space
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-3-layer-4"
                                    data-x="['right','right','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['82','82','73','70']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 11,
                                        maxWidth: "960px",
                                        whiteSpace: "nowrap",
                                        fontSize: "12px",
                                        lineHeight: "22px",
                                        fontWeight: 600,
                                        letterSpacing: "0px",
                                        fontFamily: "Poppins"
                                    }}
                                >
                                    <a
                                        href="/products"
                                        className="btn white-into-black-trans-btn mr-3"
                                    >
                                        EXPLORE
                                    </a>
                                </div>

                            </li>


                            {/* ==========================================
                                SLIDE 2
                            ========================================== */}

                            <li
                                className="slide-fallback-dark"
                                data-index="rs-2"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="300"
                                data-thumb="assets/100x50_129c3-slider-bg-2.jpg"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide 2"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description=""
                            >

                                <img
                                    src="images/model1_3.png"
                                    alt=""
                                    data-bgposition="bottom right"
                                    data-bgfit={bgFit}
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-2-layer-1"
                                    data-x="['left','center','center','center']"
                                    data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-120','-115','-114','-114']"
                                    data-fontsize="['16','14','14','14']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: "nowrap",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        fontWeight: 500,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    More Than Just a Painting
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-2-layer-2"
                                    data-x="['left','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-52','-52','-52','-52']"
                                    data-fontsize="['60','60','50','40']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        whiteSpace: "nowrap",
                                        fontSize: "60px",
                                        lineHeight: "16px",
                                        fontWeight: 500,
                                        letterSpacing: "0px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Bring Spaces Alive
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-2-layer-3"
                                    data-x="['left','center','center','center']"
                                    data-hoffset="['3','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
                                    data-width="['none','none','300','300']"
                                    data-height="none"
                                    data-whitespace="['nowrap','nowrap','normal','normal']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 7,
                                        whiteSpace: "nowrap",
                                        fontSize: "18px",
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        letterSpacing: "0px",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Discover thoughtful art that brings personality and timeless beauty.
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-3-layer-4"
                                    data-x="['left','left','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['82','82','73','70']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 11,
                                        maxWidth: "960px",
                                        whiteSpace: "nowrap",
                                        fontSize: "12px",
                                        lineHeight: "22px",
                                        fontWeight: 600,
                                        letterSpacing: "0px",
                                        fontFamily: "Poppins"
                                    }}
                                >
                                    <a
                                        href="/products"
                                        className="btn white-into-black-trans-btn mr-3"
                                    >
                                        EXPLORE
                                    </a>
                                </div>

                            </li>


                            {/* ==========================================
                                SLIDE 1
                            ========================================== */}

                            <li
                                className="slide-fallback-light"
                                data-index="rs-1"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="300"
                                data-thumb="assets/100x50_a1c1a-slider-bg-1.jpg"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide 1"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description=""
                            >

                                <img
                                    src="images/model2.png"
                                    alt=""
                                    data-bgposition="bottom left"
                                    data-bgfit={bgFit}
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-1-layer-1"
                                    data-x="['right','right','center','center']"
                                    data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-120','-115','-114','-114']"
                                    data-fontsize="['16','14','14','14']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 5,
                                        whiteSpace: "nowrap",
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Made for Your Space
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-1-layer-2"
                                    data-x="['right','right','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-52','-52','-52','-52']"
                                    data-fontsize="['60','60','50','40']"
                                    data-lineheight="['54','54','50','45']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        whiteSpace: "nowrap",
                                        fontSize: "60px",
                                        lineHeight: "54px",
                                        fontWeight: 500,
                                        letterSpacing: 0,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Made to Connect
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-1-layer-3"
                                    data-x="['right','right','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
                                    data-width="['none','none','300','300']"
                                    data-height="none"
                                    data-whitespace="['nowrap','nowrap','normal','normal']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 7,
                                        whiteSpace: "nowrap",
                                        fontSize: "18px",
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Explore distinctive pieces that turn empty walls into something truly personal.
                                </div>


                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-3-layer-4"
                                    data-x="['right','right','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['82','82','73','70']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-responsive="off"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 11,
                                        maxWidth: "960px",
                                        whiteSpace: "nowrap",
                                        fontSize: "12px",
                                        lineHeight: "22px",
                                        fontWeight: 600,
                                        letterSpacing: "0px",
                                        fontFamily: "Poppins"
                                    }}
                                >
                                    <a
                                        href="/products"
                                        className="btn white-into-black-trans-btn mr-3"
                                    >
                                        EXPLORE
                                    </a>
                                </div>

                            </li>

                        </ul>


                        <div
                            className="tp-bannertimer tp-bottom"
                            style={{ visibility: "hidden" }}
                        >
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Banner;
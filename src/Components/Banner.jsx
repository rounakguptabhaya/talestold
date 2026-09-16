import { useEffect, useState } from "react";



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

    return (
        <>
            {/* Fallback slide backgrounds as CSS classes (not inline style) — Revolution Slider's JS
                overwrites each <li>'s inline `style` attribute on init and on every slide change, so an
                inline backgroundColor gets wiped out after the first paint. A className survives that. */}
            <style>{`
                #rev_slider_1_1 > ul > li.slide-fallback-dark { background-color: #e9e4de !important; }
                #rev_slider_1_1 > ul > li.slide-fallback-light { background-color: #f5f5f5 !important; }
                #rev_slider_1_1 > ul > li.slide-fallback-tan { background-color: #e9e4de !important; }
            `}</style>
            <div className="slider">
                <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullscreen-container banner-text" data-alias="slider-shop" data-source="gallery" style={{ background: "rgba(255,255,255,0)", padding: "0px" }}>
                    <div id="rev_slider_1_1" className="rev_slider fullscreenbanner" style={{ display: "none" }} data-version="5.4.8.1">
                        <ul>

                            {/* Slide 3 — dark fallback bg so light text (#eaeaef/#ffffff) stays legible if slider-bg-3.jpg doesn't load */}
                            <li className="slide-fallback-dark" data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="assets/100x50_44515-slider-bg-3.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide 3" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <img src="images/potrait2.png" data-bgposition="right center" data-bgfit={bgFit} data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" alt="slider-image" data-no-retina />

                                <div className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                                    id="slide-3-layer-1"
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-120','-115','-114','-114']"
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
                                    style={{ zIndex: 5, whiteSpace: "nowrap", fontSize: "16px", lineHeight: "22px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>You found us </div>

                                <div className="tp-caption   tp-resizeme rs-parallaxlevel-3"
                                    id="slide-3-layer-2"
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-52','-52','-52','-52']"
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
                                    style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "60px", lineHeight: "16px", fontWeight: 500, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Welcome to Tales<span style={{color: "#ab8754", marginLeft: "0px", WebkitTextStroke: "1px #ffff"}}>Told</span> </div>

                                <div className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                                    id="slide-3-layer-3"
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 7, whiteSpace: "nowrap", fontSize: "18px", lineHeight: "22px", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>Every canvas tells a story </div>

                                <div className="tp-caption rev-btn  rs-parallaxlevel-2"
                                    id="slide-3-layer-4"
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['82','82','73','70']"
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
                                    style={{ zIndex: 11, maxWidth: "960px", whiteSpace: "nowrap", fontSize: "12px", lineHeight: "22px", fontWeight: 600, letterSpacing: "0px", fontFamily: "Poppins" }}><a href="#" className="btn white-trans-btn-with-white-border"> READ MORE</a>
                                </div>

                            </li>

                            {/* slide 2 */}

                            {/* Slide 4 — dark fallback bg so black text still contrasts, plus fixed fontsize/lineheight breakpoint anomalies */}
                            <li className="slide-fallback-light" data-index="rs-4" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="assets/100x50_9a2ac-slider-bg-4.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide 4" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <img src="images/potrait1.png" alt="" data-bgposition="bottom left" data-bgfit={bgFit} data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                                {/* FIX: data-fontsize was ['16','14','16','14'] (non-monotonic) and data-voffset was inconsistent — aligned to slides 1-3's pattern */}
                                <div className="tp-caption   tp-resizeme"
                                    id="slide-4-layer-1"
                                    data-x="['right','center','center','center']" data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-120','-115','-114','-114']"
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
                                    style={{ zIndex: 5, whiteSpace: "nowrap", fontSize: "16px", lineHeight: "22px", fontWeight: 500, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Latest Fashion </div>

                                {/* FIX: data-lineheight was ['54','16','40','51'] — '16' at 2nd breakpoint too small for 50-60px heading */}
                                <div className="tp-caption   tp-resizeme"
                                    id="slide-4-layer-2"
                                    data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-52','-52','-52','-52']"
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
                                    style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "60px", lineHeight: "57px", fontWeight: 500, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Classic Collection </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-4-layer-3"
                                    data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','17','17']"
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
                                    style={{ zIndex: 7, whiteSpace: "nowrap", fontSize: "18px", lineHeight: "22px", fontWeight: 400, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Choose from clothes of World’s Famous Brands </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-2-layer-8"
                                    data-x="['right','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['top','top','top','top']" data-voffset="['400','439','523','270']"
                                    data-width="['260','160','260','260']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"500","ease":"Linear.ease","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 11, maxWidth: "960px", whiteSpace: "nowrap", fontSize: "12px", lineHeight: "22px", fontWeight: 600, letterSpacing: "0px", fontFamily: "Poppins" }}><a href="#" className="btn white-into-black-trans-btn mr-3"> READ MORE</a> <a href="#" className="btn trans-black-btn">SHOW NOW</a>
                                </div>

                            </li>

                            {/* Slide 3 — light fallback bg (works fine already, text is dark) */}
                            <li className="slide-fallback-dark" data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="assets/100x50_129c3-slider-bg-2.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide 2" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <img src="images/model1_3.png" alt="" data-bgposition="bottom right" data-bgfit={bgFit} data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-2-layer-1"
                                    data-x="['left','center','center','center']" data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-120','-115','-114','-114']"
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
                                    style={{ zIndex: 5, whiteSpace: "nowrap", fontSize: "16px", lineHeight: "22px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>The Most latest </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-2-layer-2"
                                    data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-52','-52','-52','-52']"
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
                                    style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "60px", lineHeight: "16px", fontWeight: 500, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Trending Collection</div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-2-layer-3"
                                    data-x="['left','center','center','center']" data-hoffset="['3','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
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
                                    style={{ zIndex: 7, whiteSpace: "nowrap", fontSize: "18px", lineHeight: "22px", fontWeight: 400, letterSpacing: "0px", fontFamily: "'Poppins', sans-serif" }}>Choose from clothes of World’s Famous Brands </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-2-layer-4"
                                    data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['top','top','top','top']" data-voffset="['400','439','523','270']"
                                    data-width="['160','160','260','320']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"500","ease":"Linear.ease","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                    data-textalign="['inherit','inherit','inherit','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 11, maxWidth: "960px", whiteSpace: "nowrap", fontSize: "12px", lineHeight: "22px", fontWeight: 600, letterSpacing: "0px", fontFamily: "Poppins" }}><a href="#" className="btn pink-color-gradient-btn mr-3"> READ MORE</a> <a href="#" className="btn trans-pink-color-gradient-btn">SHOW NOW</a>
                                </div>

                            </li>



                            {/* Slide 4 — dark fallback bg so white/near-white text (#ffffff/#eaeaef) stays legible */}
                            <li className="slide-fallback-light" data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="assets/100x50_a1c1a-slider-bg-1.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide 1" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <img src="images/model2.png" alt="" data-bgposition="bottom right" data-bgfit={bgFit} data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-1-layer-1"
                                    data-x="['left','center','center','center']" data-hoffset="['5','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-120','-115','-114','-114']"
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
                                    style={{ zIndex: 5, whiteSpace: "nowrap", fontSize: "16px", lineHeight: "22px", fontWeight: 500, letterSpacing: 0, fontFamily: "'Poppins', sans-serif" }}>The Most latest </div>

                                {/* FIX: data-lineheight was ['54','16','16','51'] — two middle values too small for 50-60px heading */}
                                <div className="tp-caption   tp-resizeme"
                                    id="slide-1-layer-2"
                                    data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['-52','-52','-52','-52']"
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
                                    style={{ zIndex: 6, whiteSpace: "nowrap", fontSize: "60px", lineHeight: "54px", fontWeight: 500, letterSpacing: 0, fontFamily: "'Poppins', sans-serif" }}>Classic Collection </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-1-layer-3"
                                    data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']" data-voffset="['5','5','5','5']"
                                    data-fontsize="['18','18','16','16']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 7, whiteSpace: "nowrap", fontSize: "18px", lineHeight: "22px", fontWeight: 400, letterSpacing: 0, fontFamily: "'Poppins', sans-serif" }}>Choose from clothes of World’s Famous Brands </div>

                                <div className="tp-caption   tp-resizeme"
                                    id="slide-1-layer-8"
                                    data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']"
                                    data-y="['top','top','top','top']" data-voffset="['400','439','523','270']"
                                    data-width="['160','160','260','260']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":280,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"500","ease":"Linear.ease","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                    data-textalign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 11, maxWidth: "960px", whiteSpace: "nowrap", fontSize: "12px", lineHeight: "22px", fontWeight: 600, letterSpacing: "0px", fontFamily: "Poppins" }}><a href="#" className="btn white-btn mr-3"> READ MORE</a> <a href="#" className="btn trans-btn">SHOW NOW</a>
                                </div>

                            </li>

                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ visibility: "hidden" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;

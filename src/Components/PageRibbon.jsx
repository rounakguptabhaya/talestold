import React, { useEffect } from 'react';
import $ from '../jquerySetup.js';

const PageRibbon = () => {

    useEffect(() => {
        const $section = $(".paralax-section-slide-data1");

        if (!$section.length) {
            console.error("PARALLAX: element not found");
            return;
        }

        if (typeof $.fn.parallaxie !== "function") {
            console.error("PARALLAX: parallaxie plugin not loaded");
            return;
        }

        try {
            $section.parallaxie({
                speed: 0.2,
                repeat: "no-repeat",
                size: "cover",
                pos_x: "center",
                offset: 0
            });

            console.log("PARALLAX: initialized successfully");
        } catch (error) {
            console.error("PARALLAX INITIALIZATION ERROR:", error);
        }
    }, []);

    return (
        <div
            className="paralax-section-slide-data1"
            style={{
                backgroundImage: "url('images/standaloneBanner.avif')"
            }}
        >
        </div>
    )
}

export default PageRibbon;
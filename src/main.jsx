import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';

import $ from './jquerySetup.js';

import './styles/bundle.min.css';
import './styles/cubeportfolio.min.css';
import './styles/jquery.fancybox.min.css';
import './styles/LineIcons.min.css';
import './styles/megamenu.css';
import './styles/owl.carousel.min.css';
import './styles/revolution-settings.min.css';
import './styles/style.css';
import './styles/nouislider.min.css';
import './styles/range-slider.css';

// jQuery plugins
import './vendor/jquery.cubeportfolio.min.js';
// import './vendor/jquery.appear.js';
import './vendor/owl.carousel.min.js';
import './vendor/jquery.fancybox.min.js';
import './vendor/swiper.min.js';
import './vendor/wow.min.js';
import './vendor/bootstrap-input-spinner.js';
import './vendor/parallaxie.min.js';
import './vendor/nouislider.min.js';
import './vendor/stickyfill.min.js';

// DO NOT statically import these:
// import './vendor/TweenLite.js';
// import './vendor/TweenMax.min.js';
// import './vendor/jquery.themepunch.tools.min.js';
// import './vendor/jquery.themepunch.revolution.min.js';
// import './vendor/script.js';

import { AppProvider } from './contexts/productContext.jsx';
import { FilterContextProvider } from './contexts/filterContext.jsx';
import App from './App.jsx';



async function bootstrap() {

  // 1. Load ThemePunch tools first
  await import('./vendor/jquery.themepunch.tools.min.js');

  // 2. Load GSAP 2.1.3
  const gs = await import('gsap/TweenMax.js');

  // 3. Give ThemePunch the GSAP classes it expects
  Object.assign(window.punchgs, gs);

  // 4. Load Revolution Slider AFTER GSAP has been attached
  await import('./vendor/jquery.themepunch.revolution.min.js');

  // 5. Load the template script last
  await import('./vendor/script.js');

  // 6. Start React
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AppProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AppProvider>
      <Analytics />
    </StrictMode>,
  );
}

bootstrap();
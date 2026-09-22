import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
import './vendor/TweenLite.js';
import './vendor/TweenMax.min.js';
import './vendor/jquery.themepunch.tools.min.js';
import './vendor/jquery.themepunch.revolution.min.js';


// Your main template JS — LAST
import './vendor/script.js';

import { AppProvider } from './contexts/productContext.jsx';
import { FilterContextProvider } from './contexts/filterContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </StrictMode>,
)
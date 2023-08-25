import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./pages/home/home.page";
import Footer from "./components/footer/footer.component";
import ServicesPage from "./pages/services/services.page";
import ColdfusionDevelopment from "./pages/services/technologies/Coldfusion Devlopment/ColdfusionDevlopment.component";
import ReactJSDevelopment from "./pages/services/technologies/ReactJSDevlopment/ReactJSDevlopment.component";
import VUEJSDevelopment from "./pages/services/technologies/VueJS Devlopment/VUEJSDevlopment.component";
import AngularDevelopment from "./pages/services/technologies/Angular Devlopment/AngularDevlopment.component";
import NodeJsDevelopment from "./pages/services/technologies/NodeJs Devlopment/NodeJsDevlopment.component";
import SoftwareDevelopment from "./pages/services/ourservices/Software Development/SoftwareDevelopment.component";
import MobileDevelopment from "./pages/services/ourservices/Mobile Development/MobileDevelopment.component";
import SoftwareTesting from "./pages/services/ourservices/Software Testing/SoftwareTesting.component";
import CnDServices from "./pages/services/ourservices/Cloud And Devops Services/CnDServices.component";
import SocialMediaMarketing from "./pages/services/ourservices/Social Media Marketing/SocialMediaMarketing.component";
import ProductDevelopment from "./pages/services/ourservices/Product Development/ProductDevelopment.component";
import OffshoreDevelopment from "./pages/services/ourservices/Offshore Development/OffshoreDevelopment.component";
import GolangDevelopment from "./pages/services/technologies/Golang Development/GolangDevelopment.component";
import PythonDevelopment from "./pages/services/technologies/Python Devlopment/PythonDevlopment.component";
import ReactNativeDevelopment from "./pages/services/mobiledevelopment/React Native Development/ReactNativeDevelopment.component";
import FlutterDevelopment from "./pages/services/mobiledevelopment/Flutter Development/FlutterDevelopment.component";
import IonicDevelopment from "./pages/services/mobiledevelopment/Ionic Development/IonicDevelopment.component";
import PhoneGapDevelopment from "./pages/services/mobiledevelopment/PhoneGap Development/PhoneGapDevelopment.component";
import HireReactJsDevelopers from "./pages/services/mobiledevelopment/Hire ReactJs Developers/HireReactJsDevelopers.component";
import AboutUs from "./pages/about us/About Us/AboutUs.Component";
import Contact from "./pages/contact/Contact.component";
import MatchSquare from "./pages/products/Match Square/MatchSquare.component";
import ArizonaLottery from "./pages/products/Arizona Lottery/ArizonaLottery.component";
import Telemed2U from "./pages/products/Telemed2U/Telemed2U.component";
import Portfolio from "./pages/about us/Portfolio/Portfolio.component";
import Careers from "./pages/about us/Careers/Careers.Component";
import Ourclient from "./pages/about us/Our Client/OurClient.componet";
import PythonDev from "./pages/about us/Careers/Python Dev/PythonDev.component";
import JsMobDev from "./pages/about us/Careers/Javascript Mobile Dev/JsMobDev.component";
import FreshersJob from "./pages/about us/Careers/Freshers Job/FreshersJob.component";
import Testimonials from "./pages/about us/Testimonials/Testimonials.component";
import KayoAuto from "./pages/products/Kayo Auto/KayoAuto.component";
import ReactJsDev from "./pages/about us/Careers/ReactJs/ReactJs.component";
import ReactNativeDev from "./pages/about us/Careers/React Native/ReactNative.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          {/* Our Services */}
          <Route
            path="services/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="services/mobile-development"
            element={<MobileDevelopment />}
          />
          <Route
            path="services/software-testing"
            element={<SoftwareTesting />}
          />
          <Route
            path="services/cloud-develops-services"
            element={<CnDServices />}
          />
          <Route
            path="services/product-development"
            element={<ProductDevelopment />}
          />
          <Route
            path="services/offshore-development"
            element={<OffshoreDevelopment />}
          />
          <Route
            path="services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          {/* Technologies */}
          <Route
            path="services/coldfusion-development"
            element={<ColdfusionDevelopment />}
          />
          <Route
            path="services/reactjs-development"
            element={<ReactJSDevelopment />}
          />
          <Route
            path="services/vuejs-development"
            element={<VUEJSDevelopment />}
          />
          <Route
            path="services/angular-development"
            element={<AngularDevelopment />}
          />
          <Route
            path="services/nodejs-development"
            element={<NodeJsDevelopment />}
          />
          <Route
            path="services/python-development"
            element={<PythonDevelopment />}
          />
          <Route
            path="services/golang-development"
            element={<GolangDevelopment />}
          />
          {/* Mobile Development */}
          <Route
            path="services/react-native-development"
            element={<ReactNativeDevelopment />}
          />
          <Route
            path="services/flutter-development"
            element={<FlutterDevelopment />}
          />
          <Route
            path="services/ionic-development"
            element={<IonicDevelopment />}
          />
          <Route
            path="services/phonegap-development"
            element={<PhoneGapDevelopment />}
          />
          <Route
            path="services/hire-reactjs-developers"
            element={<HireReactJsDevelopers />}
          />
          {/* Products */}
          <Route path="products/matchsquare" element={<MatchSquare />} />
          <Route path="products/arizona-lottery" element={<ArizonaLottery />} />
          <Route path="products/telemed2u" element={<Telemed2U />} />
          <Route path="products/kayo-auto" element={<KayoAuto />} />
          {/* About Us */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="careers" element={<Careers />} />
          <Route path="our-clients" element={<Ourclient />} />
          <Route path="testimonials" element={<Testimonials />} />
          {/* Careers */}
          <Route path="careers/python-dev" element={<PythonDev />} />
          <Route path="careers/react-native" element={<ReactNativeDev />} />
          <Route path="careers/js-mobile-dev" element={<JsMobDev />} />
          <Route path="careers/reactjs" element={<ReactJsDev />} />
          <Route path="careers/freshers-job" element={<FreshersJob />} />
          {/* Contact */}
          <Route path="contact" element={<Contact />} />
          {/* Error 404 Page Not Found */}
          <Route path="*" element={<My404Component />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

function My404Component() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.4rem",
        textTransform: "uppercase",
        color: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1>404: Page Not Found</h1>
      <p>
        <a href="/">Click Here</a> to return to the Home Page!
      </p>
    </div>
  );
}

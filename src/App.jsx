import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const App = () => (
  <div className=" min-h-screen w-full overflow-hidden">
    <Navbar />
    <HeroSection />
    <section id="cards" className="min-h-screen w-full relative">
      <div className="flex justify-center flex-wrap items-center gap-8">
        <div className="w-[320px] h-[358px] p-4 text-center hover:shadow-lg transition-all rounded-3xl cursor-pointer  ">
          <h2>Project Plan</h2>
          <p className="py-4 w-[90%]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.{" "}
          </p>
          <a className=" text-orange-400 hover:underline cursor-pointer ">
            <p className="mt-12">Read More</p>
          </a>
        </div>
        <div className="w-[320px] h-[358px] p-4 text-center hover:shadow-lg transition-all rounded-3xl cursor-pointer  ">
          <h2>Interior Work</h2>
          <p className="py-4 w-[90%]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <a className=" text-orange-400 hover:underline cursor-pointer">
            <p className="mt-12">Read More</p>
          </a>
        </div>
        <div className="w-[320px] h-[358px] p-4 text-center hover:shadow-lg transition-all rounded-3xl cursor-pointer  ">
          <h2> Realization</h2>
          <p className="py-4 w-[90%]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <a className=" text-orange-400 hover:underline cursor-pointer">
            <p className="mt-12 ">Read More</p>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
        <div className="flex flex-col  gap-8 justify-center items-center  ">
          <div className="w-[350px]  flex flex-col gap-8">
            <h2 className="text-4xl ">
              We Create The Art <br /> Of Stylish Living <br /> Stylishly
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="flex flex-row gap-2 justify-start items-start">
              <img src="/assets/callicon.png" alt="Call Icon" />
              <div className="flex flex-col gap-1">
                <h3>012345678</h3>
                <h3>Call Us Anytime</h3>
              </div>
            </div>
            <button className="bg-[#292F36] text-white p-4 rounded-2xl w-[200px] font-semibold hover:shadow-lg hover:scale-110 transition-all flex items-center gap-3">
              Get Free Estimate
              <FaArrowRight color="#CDA274" />
            </button>
          </div>
        </div>

        <img src="/assets/image2.png" alt="image2" className="mt-3" />
      </div>
    </section>
    <section id="aboutus" className="min-h-screen w-full relative ">
      <div className="max-w-[1200px] min-h-[600px] bg-[#F4F0EC] m-auto rounded-[3rem] mt-[4rem] relative">
        <h1 className="text-4xl text-center pt-12 pb-4">
          What People Thinks <br />
          About Us
        </h1>
        <div className="flex justify-center flex-wrap items-center gap-8 mt-4">
          <div className="w-[300px] h-[300px]  bg-white rounded-2xl p-3  cursor-pointer hover:scale-110 transition-all">
            <div className="flex gap-2 items-center">
              <img src="/assets/p1.png" alt="person photo" />
              <div className="flex flex-col gap-1 ms-4 ">
                <h2>Nattasha Mith</h2>{" "}
                <p className="text-gray-500">Sydney, USA</p>
              </div>
            </div>

            <p className="pt-10 w-[90%]">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>
          <div className="w-[300px] h-[300px]  bg-white rounded-2xl p-3 cursor-pointer  hover:scale-110 transition-all">
            <div className="flex gap-2 items-center">
              <img src="/assets/p2.png" alt="person photo" />
              <div className="flex flex-col gap-1 ms-4 ">
                <h2>Raymond Galario</h2>{" "}
                <p className="text-gray-500">Sydney, Australia</p>
              </div>
            </div>

            <p className="pt-10 w-[90%]">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>
          <div className="w-[300px] h-[300px] bg-white rounded-2xl p-3 cursor-pointer hover:scale-110 transition-all ">
            <div className="flex gap-2 items-center">
              <img src="/assets/p3.png" alt="person photo" />
              <div className="flex flex-col gap-1 ms-4 ">
                <h2>Benny Roll</h2>{" "}
                <p className="text-gray-500">Sydney, New York</p>
              </div>
            </div>

            <p className="pt-10 w-[90%]">
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-24 flex-wrap mt-10">
        <img src="/assets/01.png" alt="client photo" />
        <img src="/assets/02.png" alt="client photo" />
        <img src="/assets/03.png" alt="client photo" />
        <img src="/assets/04.png" alt="client photo" />
        <img src="/assets/05.png" alt="client photo" />
      </div>
    </section>
    <section id="projects" className="min-h-screen w-full relative mt-10 ">
      <h1 className="text-center text-4xl">Follow Our Projects</h1>
      <p className="text-center py-2">
        It is a long established fact that a reader will be distracted by the of
        readable <br />
        content of page lookings at its layouts points.
      </p>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 justify-center items-center mt-8 w-[70%]">
          <div className="flex flex-col  justify-center items-center hover:drop-shadow-lg transition-all  ">
            <div className="max-w-[619px] flex flex-col gap-3 cursor-pointer">
              <img
                src="/assets/project1.png"
                width={500}
                className="rounded-tr-[3rem]"
                alt="project image"
              />
              <div className="mt-2">
                <h1>Modern Kitchen</h1>
                <p>Decor / Artchitecture</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center hover:drop-shadow-lg transition-all   ">
            <div className="max-w-[619px] flex flex-col gap-3 cursor-pointer">
              <img
                src="/assets/project2.png"
                width={500}
                className="rounded-tl-[3rem]"
                alt="project image"
              />
              <div className="mt-2">
                <h1>Modern Kitchen</h1>
                <p>Decor / Artchitecture</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center hover:drop-shadow-lg transition-all   ">
            <div className="max-w-[619px] flex flex-col gap-3 cursor-pointer">
              <img
                src="/assets/project3.png"
                width={500}
                className="rounded-tr-[3rem]"
                alt="project image"
              />
              <div className="mt-2">
                <h1>Modern Kitchen</h1>
                <p>Decor / Artchitecture</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center hover:drop-shadow-lg transition-all  ">
            <div className="max-w-[619px] flex flex-col gap-3  cursor-pointer">
              <img
                src="/assets/project4.png"
                width={500}
                className="rounded-tl-[3rem]"
                alt="project image"
              />
              <div className="mt-2">
                <h1>Modern Kitchen</h1>
                <p>Decor / Artchitecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="stats"
      className="w-full min-h-[400px] relative  bg-[#F4F0EC] mt-8 flex justify-center items-center"
    >
      <div className="flex justify-center items-center gap-14  flex-wrap mt-8">
        <div className="flex flex-col gap-3 border-r border-[#CDA274] p-2">
          <h1 className="text-[#CDA274] text-8xl">12</h1>
          <p className="text-gray-500">Years Of Experience</p>
        </div>
        <div className="flex flex-col gap-3 border-r border-[#CDA274] p-2">
          <h1 className="text-[#CDA274] text-8xl">85</h1>
          <p className="text-gray-500">Successful Projects</p>
        </div>
        <div className="flex flex-col gap-3 border-r border-[#CDA274] p-2">
          <h1 className="text-[#CDA274] text-8xl">15</h1>
          <p className="text-gray-500">Active Projects</p>
        </div>
        <div className="flex flex-col gap-3 border-r border-[#CDA274] p-2">
          <h1 className="text-[#CDA274] text-8xl">95</h1>
          <p className="text-gray-500">Happy Customers</p>
        </div>
      </div>
    </section>
    <section id="articles" className="min-h-screen w-full relative ">
      {" "}
      <h1 className="text-center text-4xl pt-14">Articles & News</h1>
      <p className="text-center py-2">
        It is a long established fact that a reader will be distracted by the of
        readable content <br /> of a page when lookings at its layouts the
        points of using.
      </p>
      <div className="flex justify-center flex-wrap items-center gap-8 mt-12">
        <div className="w-[320px] h-[430px] p-4  bg-white shadow-lg rounded-3xl cursor-pointer flex flex-col gap-3  hover:scale-90 transition-all ">
          <img src="/assets/news1.png" alt="thumbnail of article" />
          <h2 className="text-2xl">
            Best For Any Office & Business Interior Solution
          </h2>
          <p className="py-4 ">26 December, 2022</p>
        </div>
        <div className="w-[320px] h-[430px] p-4  bg-white shadow-lg rounded-3xl cursor-pointer  flex flex-col gap-3  hover:scale-90 transition-all ">
          <img src="/assets/news2.png" alt="thumbnail of article" />
          <h2 className="text-2xl">
            Low Cost Latest Invented Interior Designing Ideas.
          </h2>
          <p className="py-4 ">26 December, 2022</p>
        </div>
        <div className="w-[320px] h-[430px] p-4  bg-white shadow-lg rounded-3xl cursor-pointer  flex flex-col gap-3   hover:scale-90 transition-all">
          <img src="/assets/news3.png" alt="thumbnail of article" />
          <h2 className="text-2xl">
            Let’s Get Solution For Building Construction Work
          </h2>
          <p className="py-4 ">26 December, 2022</p>
        </div>
      </div>
    </section>
    <section id="join" className=" w-full relative ">
      <div className="max-w-[1200px] min-h-[300px] bg-[#292F36] m-auto rounded-[3rem] flex flex-col gap-4 justify-center items-center mt-5">
        <h1 className="text-4xl text-center  pb-4 text-white">
          Wanna Join The Interno?
        </h1>
        <p className="text-center text-white">
          It is a long established fact will be distracted.
        </p>
        <button className="bg-[#CDA274] text-white p-4 rounded-2xl w-[180px] font-semibold hover:shadow-lg hover:scale-110 transition-all flex items-center gap-3">
          Contact With Us
          <FaArrowRight color="black" />
        </button>
      </div>
    </section>
    <footer
      id="footer"
      className="relative bottom-0 w-[80%] p-4 min-h-[400px] m-auto mt-12 grid md:grid-cols-4 grid-cols-1 "
    >
      <div className="flex flex-col gap-4 ">
        <img src="/assets/logo.png" width={200} />
        <p className="pt-3">
          It is a long established fact that a reader <br /> will be distracted
          lookings.
        </p>
        <div className="flex  gap-10">
          <FaFacebook className="cursor-pointer hover:scale-110 transition-all" />
          <FaTwitter className="cursor-pointer hover:scale-110 transition-all" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition-all" />
          <FaYoutube className="cursor-pointer hover:scale-110 transition-all" />
        </div>
      </div>
      <div className="flex flex-col gap-4 m-4">
        <h1 className="text-xl">Pages</h1>
        <ul className="flex flex-col gap-4 ">
          <li className="hover:underline cursor-pointer ">About Us</li>
          <li className="hover:underline cursor-pointer ">Our Projects</li>
          <li className="hover:underline cursor-pointer ">Our Team</li>
          <li className="hover:underline cursor-pointer ">Contact Us</li>
          <li className="hover:underline cursor-pointer ">Services</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 m-4">
        <h1 className="text-xl">Services</h1>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline cursor-pointer ">Kitchen</li>
          <li className="hover:underline cursor-pointer ">Living Area</li>
          <li className="hover:underline cursor-pointer ">Bathroom</li>
          <li className="hover:underline cursor-pointer ">Dining Hall </li>
          <li className="hover:underline cursor-pointer ">Bedroom</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 m-4">
        <h1 className="text-xl">Contact</h1>
        <p>55 East Birchwood Ave. Brooklyn, New York 1120</p>
        <p>contact@interno.com</p>
        <p>(123) 456 - 7890</p>
      </div>
    </footer>
    <p className="text-center py-4 text-lg">
      Copyright © Interno | Designed by Salman Haider - Powered by Webflow
    </p>
  </div>
);

export default App;

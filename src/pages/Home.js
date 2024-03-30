import React from "react";
import Navbar from "../components/Navbar";
import CardSkill from "../components/CardSkill";
import Footer from "../components/Footer";
import job from "../job.jpg";
import { Office } from "../assets";
import {pie} from 'src\assets\pie.jpg';

function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      {/* <CardSkill /> */}
      <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
          <div className="w-full md:2/3 2xl:w-2/4">
            <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
            <p className="text-justify leading-7">
              Internships present an effective pathway to finding employment
              after graduation in nearly every industry across the nation. With
              more and more businesses requiring internship experience, we set
              out to understand the benefits and trends of internships in the
              India. After extensive research, our data
              analysis team concluded:
            </p>
          </div>
          <img src={job} alt="About" className="w-auto h-[300px]" />
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        {/* <img src={pie} alt="About" className="w-auto h-[300px]" /> */}
          <div className="w-full md:2/3 2xl:w-2/4">
            
            <p className="text-justify leading-7">
                
            <p>
          <ul>
      <li>It’s estimated that 300,000 people intern each year in India.</li>
      <li>70% of interns are hired at the same company they interned with following their internship.</li>
      <li>39.2% of internships in India are unpaid positions, and 60.8% of internships are paid positions.</li>
      <li>In the first few post-graduation years, former interns are 15% less likely to be unemployed and earn 6% more than students who did not intern.</li>
      <li>Paid internships are 32% more likely to result in a full-time job offer than unpaid internships.</li>
      <li>The national average hourly wage for paid interns is $20.76.</li>
      <li>31% of former students begin internships after graduating college.</li>
    </ul>
          </p>
            </p>
          </div>
         
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
          <div className="w-full md:2/3 2xl:w-2/4">
            <p className="text-justify leading-7">
           <bold> <h3>The majority of students who successfully complete an internship receive a full-time job offer after graduation.</h3></bold>

<p>56% of all interns in the India have accepted job offers from the company they interned for. An additional 14% of all interns in the U.S. are given a part-time job offer after completing their internship.</p>

<p><ul>80% of interns who are extended job offers at the company where they interned accept them.</ul></p>

<p>Students and young professionals with internship experience are 35% more likely to get at least one job offer after graduating than those without internship experience.</p>

<p>Individuals searching for entry-level work have a slightly better chance of getting hired if they have at least some internship experience. On average, 53.2% of all graduating seniors receive at least one job offer.</p>

<p>Of the graduates who receive job offers, roughly 57.5% have had at least one internship, while 42.5% have had no internship experience.</p>
            </p>
          </div>
          <img src={ Office} alt="About" className="w-auto h-[300px]" />
        </div>
       
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;

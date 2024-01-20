// import React from 'react';
// import { Link } from 'react-router-dom';

// function CardSkill() {
//   const skills = [
//     { id: 'chichen-itza', title: 'Chichen Itza', image: 'https://dummyimage.com/720x400' },
//     { id: 'colosseum-roma', title: 'Colosseum Roma', image: 'https://dummyimage.com/721x401' },
//     { id: 'great-pyramid-of-giza', title: 'Great Pyramid of Giza', image: 'https://dummyimage.com/722x402' },
//     { id: 'san-francisco', title: 'San Francisco', image: 'https://dummyimage.com/723x403' },
//   ];
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap w-full mb-20">
//           <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//               Our Cources
//             </h1>
//             <div className="h-1 w-20 bg-indigo-500 rounded"></div>
//           </div>
//           {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
//             Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
//             Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid
//             celiac humblebrag.
//           </p> */}
//         </div><div className="flex flex-wrap -m-4">
//           {skills.map((skill) => (
//             <div className="xl:w-1/4 md:w-1/2 p-4" key={skill.id}>
//               <Link to={{ pathname: `/skill/${skill.id}`, state: { title: 'Chichen Itza',
//                     image: 'https://dummyimage.com/720x400', } }}>
//                 <div className="bg-gray-100 p-6 rounded-lg">
//                   <img
//                     className="h-40 rounded w-full object-cover object-center mb-6"
//                     src={skill.image}
//                     alt={skill.title}
//                   />
//                   <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//                   <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{skill.title}</h2>
//                   <p className="leading-relaxed text-base">
//                     Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//         {/* <div className="flex flex-wrap -m-4">
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//           <Link to="/skill/chichen-itza">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <img
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//                 src="https://dummyimage.com/720x400"
//                 alt="content"
//               />
//               <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
//               <p className="leading-relaxed text-base">
//                 Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
//               </p>
//             </div>
//             </Link>
//           </div>
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//           <Link to="/skill/colosseum-roma">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <img
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//                 src="https://dummyimage.com/721x401"
//                 alt="content"
//               />
//               <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
//               <p className="leading-relaxed text-base">
//                 Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
//               </p>
//             </div>
//             </Link>
//           </div>
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//           <Link to="/skill/great-pyramid-of-giza">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <img
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//                 src="https://dummyimage.com/722x402"
//                 alt="content"
//               />
//               <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
//               <p className="leading-relaxed text-base">
//                 Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
//               </p>
//             </div>
//             </Link>
//           </div>
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//           <Link to="/skill/san-francisco">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <img
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//                 src="https://dummyimage.com/723x403"
//                 alt="content"
//               />
//               <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//               <p className="leading-relaxed text-base">
//                 Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
//               </p>
//             </div>
//             </Link>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// export default CardSkill;

import React from 'react';
import { Link } from 'react-router-dom';
import skills from '../skills';

function CardSkill() {
 

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Courses
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div className="xl:w-1/4 md:w-1/2 p-4" key={skill.id}>
              <Link to={`/skill/${skill.id}`} key={skill.id}>
                
              
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={skill.image}
                    alt={skill.title}
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{skill.title}</h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSkill;

// // import React, { useState, useEffect } from 'react';
// // import { useParams ,useLocation} from 'react-router-dom';

// // function SkillPage() {
// //   const { skillId } = useParams();
// //   const [skillDetails, setSkillDetails] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const { state: skillData } = useLocation();

// //   useEffect(() => {
// //     const fetchSkillDetails = async () => {
// //         try {
// //           const response = await fetch(`/api/skills/${skillId}`);

// //           if (!response.ok) {
// //             throw new Error(`Failed to fetch skill details. Status: ${response.status}`);
// //           }

// //           const data = await response.json();
// //           setSkillDetails(data);
// //           setLoading(false);
// //         } catch (error) {
// //           console.error('Error fetching skill details:', error);
// //           setLoading(false);
// //         }
// //       };
// //     fetchSkillDetails();
// //   }, [skillId]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (!skillData) {
// //     return <p>Error loading skill details.</p>;
// //   }

// //   return (
// //     <div>
// //       <h2>Skill Page: {skillData.skill.title}</h2>
// //       <p>Description: {skillData.skill.description}</p>
// //       {/* Add more details based on your API response */}
// //     </div>
// //   );
// // }

// // export default SkillPage;

// // // // import React from 'react';
// // // // import { useParams, useLocation } from 'react-router-dom';

// // // // function SkillPage() {
// // // //   const { skillId } = useParams();
// // // //   const location = useLocation();
// // // //   const { state } = location;

// // // //   if (!state || !state.skill) {
// // // //     return <p>No skill details found.</p>;
// // // //   }

// // // //   const { title, image } = state.skill;

// // // //   return (
// // // //     <div>
// // // //       <h2>Skill Page: {title}</h2>
// // // //       <img src={image} alt={title} />
// // // //       {/* Add more details based on your API response */}

// // // //       <section class="text-gray-600 body-font overflow-hidden">
// // // //   <div class="container px-5 py-24 mx-auto">
// // // //     <div class="lg:w-4/5 mx-auto flex flex-wrap">
// // // //       <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
// // // //         <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
// // // //         <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
// // // //         <div class="flex mb-4">
// // // //           <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
// // // //           <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
// // // //           <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
// // // //         </div>
// // // //         <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
// // // //         <div class="flex border-t border-gray-200 py-2">
// // // //           <span class="text-gray-500">Color</span>
// // // //           <span class="ml-auto text-gray-900">Blue</span>
// // // //         </div>
// // // //         <div class="flex border-t border-gray-200 py-2">
// // // //           <span class="text-gray-500">Size</span>
// // // //           <span class="ml-auto text-gray-900">Medium</span>
// // // //         </div>
// // // //         <div class="flex border-t border-b mb-6 border-gray-200 py-2">
// // // //           <span class="text-gray-500">Quantity</span>
// // // //           <span class="ml-auto text-gray-900">4</span>
// // // //         </div>
// // // //         <div class="flex">
// // // //           <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
// // // //           <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
// // // //           <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
// // // //             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
// // // //               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
// // // //             </svg>
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //       <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
// // // //     </div>
// // // //   </div>
// // // // </section>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SkillPage;

// // // import React from 'react';
// // // import { useParams, useLocation } from 'react-router-dom';

// // // function SkillPage() {
// // //   const { skillId } = useParams();
// // //   const location = useLocation();
// // //   const { state } = location;

// // //   if (!state || !state.skill) {
// // //     return <p>No skill details found.</p>;
// // //   }

// // //   const { title, image } = state.skill;

// // //   return (
// // //     <div>
// // //       <h2>Skill Page: {title}</h2>
// // //       <img src={image} alt={title} />
// // //       {/* Add more details based on your API response */}

// // //       <section className="text-gray-600 body-font overflow-hidden">
// // //         <div className="container px-5 py-24 mx-auto">
// // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //             <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
// // //               <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
// // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
// // //               <div className="flex mb-4">
// // //                 <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
// // //                 <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
// // //                 <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
// // //               </div>
// // //               <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
// // //               <div className="flex border-t border-gray-200 py-2">
// // //                 <span className="text-gray-500">Color</span>
// // //                 <span className="ml-auto text-gray-900">Blue</span>
// // //               </div>
// // //               <div className="flex border-t border-gray-200 py-2">
// // //                 <span className="text-gray-500">Size</span>
// // //                 <span className="ml-auto text-gray-900">Medium</span>
// // //               </div>
// // //               <div className="flex border-t border-b mb-6 border-gray-200 py-2">
// // //                 <span className="text-gray-500">Quantity</span>
// // //                 <span className="ml-auto text-gray-900">4</span>
// // //               </div>
// // //               <div className="flex">
// // //                 <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
// // //                 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
// // //                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
// // //                   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
// // //                     <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
// // //                   </svg>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default SkillPage;
// // // import React, { useEffect } from 'react';
// // // import { useParams, useLocation } from 'react-router-dom';

// // // function SkillPage() {
// // //   const { skillId } = useParams();
// // //   const location = useLocation();
// // //   const { state } = location;

// // //   useEffect(() => {
// // //     console.log('Received skill data:', state);
// // //   }, [state]);

// // //   if (!state || !state.skill) {
// // //     return <p>No skill details found.</p>;
// // //   }

// // //   const { title, image } = state.skill;

// // //   return (
// // //     <div>
// // //       <h2>Skill Page: {title}</h2>
// // //       <p>Skill ID: {skillId}</p>
// // //       <img src={image} alt={title} />
// // //       {/* Add more details based on your API response */}
// // //       {/* ... */}
// // //       <section className="text-gray-600 body-font overflow-hidden">
// // //         <div className="container px-5 py-24 mx-auto">
// // //           <div className="lg:w-4/5 mx-auto flex flex-wrap">
// // //             <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
// // //               <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
// // //               <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
// // //               <div className="flex mb-4">
// // //                 <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
// // //                 <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
// // //                 <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
// // //               </div>
// // //               <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
// // //               <div className="flex border-t border-gray-200 py-2">
// // //                 <span className="text-gray-500">Color</span>
// // //                 <span className="ml-auto text-gray-900">Blue</span>
// // //               </div>
// // //               <div className="flex border-t border-gray-200 py-2">
// // //                 <span className="text-gray-500">Size</span>
// // //                 <span className="ml-auto text-gray-900">Medium</span>
// // //               </div>
// // //               <div className="flex border-t border-b mb-6 border-gray-200 py-2">
// // //                 <span className="text-gray-500">Quantity</span>
// // //                 <span className="ml-auto text-gray-900">4</span>
// // //               </div>
// // //               <div className="flex">
// // //                 <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
// // //                 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
// // //                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
// // //                   <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
// // //                     <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
// // //                   </svg>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default SkillPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, Link } from 'react-router-dom';

// function SkillPage() {
//   const { skillId } = useParams();
//   const [skillDetails, setSkillDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { state: skillData } = useLocation();

//   useEffect(() => {
//     const fetchSkillDetails = async () => {
//       try {
//         const response = await fetch(`/api/skills/${skillId}`);

//         if (!response.ok) {
//           throw new Error(`Failed to fetch skill details. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setSkillDetails(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching skill details:', error);
//         setError(error.message); // Set the error message
//         setLoading(false);
//       }
//     };

//     fetchSkillDetails();
//   }, [skillId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading skill details: {error}</p>;
//   }

//   if (!skillDetails) {
//     return <p>No skill details found.</p>;
//   }

//   return (
//     <div>
//       <h2>Skill Page: {skillDetails.title}</h2>
//       <p>Description: {skillDetails.description}</p>
//       {/* Add more details based on your API response */}
//       <Link to="/">Go back to skills</Link>
//     </div>
//   );
// }

// export default SkillPage;

// SkillDetail.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import skills from '../skills';

// const SkillPage = () => {
//   const { id } = useParams();
//   console.log('id:', id);
//   const skill = skills.find((s) => s.id === parseInt(id));

//   if (!skill) {
//     return <div>Skill not found</div>;
//   }

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-gray-200 p-8 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">{skill.title}</h2>
//         <p className="text-gray-700">{skill.id}</p>
//         {/* Add more details about the skill here */}
//       </div>
//     </div>
//   );
// };

// export default SkillPage;
// SkillPage.js
// SkillPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import skills from '../skills';

const SkillPage = () => {
  const { id } = useParams();

  // Find the skill with the matching id
  const skill = skills.find((s) => s.id === Number(id));

  if (!skill) {
    // Handle the case where the skill is not found (optional)
    return <div>Skill not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{skill.title}</h2>
        <p className="text-gray-700">{skill.id}</p>
        {/* ... other details ... */}
      </div>
    </div>
  );
};

export default SkillPage;



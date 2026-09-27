import { useState, useRef } from 'react';

const faqData = [
   { id: 1, question: "How do I deploy my app to production?", answer: "You can deploy your app using platforms like Vercel, Netlify, or your own server. Make sure to configure environment variables and use a production build (`npm run build`) before deployment." },
   { id: 2, question: "Can I use a custom domain with my project?", answer: "Yes, you can connect a custom domain via your DNS provider. Most platforms like Vercel or Netlify offer simple guides to point your domain to your deployed site." },
   { id: 3, question: "How do I contribute or suggest improvements?", answer: "You can contribute by submitting feedback through our contact form or GitHub issues. We welcome ideas and suggestions to improve our UI components." },
   { id: 4, question: "Is the codebase optimized for SEO?", answer: "Yes, our components are built with performance and SEO in mind. HTML is semantic, images are optimized, and we follow best practices like lazy loading." },
   { id: 5, question: "How do I manage API keys securely?", answer: "Never expose API keys on the client side. Store them in environment variables and use them only on the server." },
   { id: 6, question: "Do you offer technical support?", answer: "Yes, we provide developer-focused support through our documentation, community Discord, and priority email support." },
   { id: 7, question: "Can I use these in commercial projects?", answer: "Absolutely! All components are production-ready and can be used in both personal and commercial projects." },
   { id: 8, question: "Do you provide regular updates?", answer: "Yes, we continuously release new components, improvements, and bug fixes based on user feedback." },
];

export default function Faq() {
   const [openIndexes, setOpenIndexes] = useState([1]); // Default opening the first one
   const contentRefs = useRef([]);

   const toggleFAQ = (id) => {
      setOpenIndexes((prev) =>
         prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
   };

   // Split data into two columns for the desktop grid
   const leftCol = faqData.slice(0, 4);
   const rightCol = faqData.slice(4);

   return (
      <section className="max-w-7xl mx-auto mt-6 px-4">
         <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-slate-900 text-3xl font-bold mb-6 md:text-4xl">
               Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
               Explore common questions about using our platform, managing your account, billing, and accessing support.
               Whether you're a developer or a new user, this section helps you get quick answers without the hassle.
            </p>
         </div>

         <div className="grid lg:grid-cols-2 gap-6 items-start">
            {[leftCol, rightCol].map((column, colIdx) => (
               <div key={colIdx} className="space-y-6">
                  {column.map((item) => {
                     const isOpen = openIndexes.includes(item.id);
                     return (
                        <div key={item.id} className="bg-white border border-slate-300 shadow-sm rounded-lg">
                           <h3 id={`faq-heading-${item.id}`}>
                              <button
                                 type="button"
                                 aria-expanded={isOpen}
                                 aria-controls={`faq-panel-${item.id}`}
                                 onClick={() => toggleFAQ(item.id)}
                                 className="cursor-pointer p-5 w-full text-base font-semibold text-left text-slate-900 flex items-center outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                              >
                                 <span className="mr-4">{item.question}</span>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" className="size-3.5 fill-current ml-auto shrink-0">
                                    <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                                    <path
                                       className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                       d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                                    />
                                 </svg>
                              </button>
                           </h3>

                           <div
                              id={`faq-panel-${item.id}`}
                              role="region"
                              aria-labelledby={`faq-heading-${item.id}`}
                              aria-hidden={!isOpen}
                              ref={(el) => (contentRefs.current[item.id] = el)}
                              style={{
                                 maxHeight: isOpen ? `${contentRefs.current[item.id]?.scrollHeight}px` : '0px',
                              }}
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? 'invisible' : ''}`}
                           >
                              <div className="px-5 pb-5">
                                 <p className="text-base text-slate-600 leading-relaxed">
                                    {item.answer}
                                 </p>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            ))}
         </div>
      </section>
   );
}
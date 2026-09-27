const teamMembers = [
   { id: 1, name: 'John Doe', role: 'Software Engineer', image: 'https://readymadeui.com/team-1.webp' },
   { id: 2, name: 'Mark Adair', role: 'Web Developer', image: 'https://readymadeui.com/team-2.webp' },
   { id: 3, name: 'Simon Konecki', role: 'Web Designer', image: 'https://readymadeui.com/team-3.webp' },
   { id: 4, name: 'Eleanor', role: 'Web Designer', image: 'https://readymadeui.com/team-4.webp' },
   { id: 5, name: 'Alen', role: 'Software Engineer', image: 'https://readymadeui.com/team-5.webp' },
   { id: 6, name: 'Sophia', role: 'Software Developer', image: 'https://readymadeui.com/team-6.webp' },
];

export default function Team() {

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto text-center md:mb-16 mb-12">
               <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">
                  Meet our team
               </h2>
            </div>

            <ul className="grid gap-4 mx-auto grid-cols-2 md:gap-6 md:grid-cols-3 sm:max-w-xl md:max-w-full">
               {teamMembers.map((member) => (
                  <li
                     key={member.id}
                     className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700"
                  >
                     <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
                        <img
                           src={member.image}
                           className="w-full h-full object-cover object-top"
                           alt={member.name}
                           loading="lazy"
                        />
                     </div>

                     <div className="text-center mt-4 mb-1">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                           {member.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                           {member.role}
                        </p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
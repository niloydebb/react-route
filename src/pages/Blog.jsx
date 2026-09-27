const posts = [
   {
      id: 1,
      title: "Creative Design Trends",
      description: "Stay ahead of the curve with the latest creative design trends shaping the digital world.",
      image: "https://readymadeui.com/images/ai-img1.webp",
      alt: "Design ai image",
      link: "#",
      date: "Mar 07, 2025",
      author: "John Doe",
   },
   {
      id: 2,
      title: "The Rise of Boutique Hotels",
      description: "Explore how boutique hotels are redefining luxury and guest experience in the travel industry.",
      image: "https://readymadeui.com/hotel-img.webp",
      alt: "Hotel image",
      link: "#",
      date: "Jun 25, 2024",
      author: "Sarah Lee",
   },
   {
      id: 3,
      title: "Boost Team Productivity",
      description: "Discover powerful techniques to help your team collaborate better and get more done.",
      image: "https://readymadeui.com/team-image.webp",
      alt: "Team image",
      link: "#",
      date: "May 10, 2025",
      author: "Emily Clark",
   },
   {
      id: 4,
      title: "Ecommerce Trends to Watch",
      description: "Stay ahead with insights into what’s driving the future of online shopping and digital retail.",
      image: "https://readymadeui.com/images/headphone-img8.webp",
      alt: "Headphone image",
      link: "#",
      date: "Feb 20, 2025",
      author: "Michael Brown",
   },
   {
      id: 5,
      title: "Time Management Hacks",
      description: "Master your schedule with proven strategies that save hours each week and reduce stress.",
      image: "https://readymadeui.com/hacks-watch.webp",
      alt: "Watch image",
      link: "#",
      date: "Jan 30, 2025",
      author: "Jessica Davis",
   },
   {
      id: 6,
      title: "The Power of Creativity",
      description: "Uncover how creative thinking fuels innovation and helps brands stay competitive in any market.",
      image: "https://readymadeui.com/Imagination.webp",
      alt: "Imagination image",
      link: "#",
      date: "Apr 15, 2025",
      author: "David Wilson",
   }
];

export default function Blog() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-md mx-auto sm:max-w-4xl lg:max-w-7xl">
            <div className="mb-16 max-w-3xl mx-auto text-center">
               <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
                  Latest Blog Posts
               </h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Explore our latest articles, insights, and practical tips designed to help you stay updated, improve your workflow, and build better products with confidence.
               </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {posts.map((post) => (
                  <article
                     key={post.id}
                     className="bg-white border border-slate-200 shadow-sm p-2 rounded-lg overflow-hidden"
                  >
                     <div className="bg-gray-50 aspect-[23/16] rounded-lg overflow-hidden">
                        <img
                           src={post.image}
                           alt={post.alt}
                           className="w-full h-full object-cover object-top"
                           loading="lazy"
                        />
                     </div>
                     <a href={post.link} className="p-4 block mt-2">
                        <div>
                           <span className="text-sm block text-slate-500 mb-2">{post.date} | By {post.author}</span>
                           <h3 className="text-lg font-semibold text-slate-900">
                              {post.title}
                           </h3>
                        </div>

                        <hr className="my-4 border-slate-300" />

                        <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                           {post.description}
                        </p>
                     </a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}


import AnimatedSection from "@/app/animatedsection"
import Image from "next/image" 


const blogPosts = [
  {
    id: 1,
    date: "April 10, 2024",
    title: "Weighing the pros and cons of each choice.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Mrs Bella",
    readTime: "4 Min Read",
    img: "/images/blog1.jpg", 
  },
  {
    id: 2,
    date: "April 16, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Mr Ibrahim",
    readTime: "7 Min Read",
    img: "/images/blog2.jpg",
    // authorImg: "/images/author2.jpg",
  },
  {
    id: 3,
    date: "April 18, 2024",
    title: "Identifying your travel goals and preferences.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "miss Ruth",
    readTime: "4 Min Read",
    img: "/images/blog3.jpeg",
    
  },
   {
    id: 4,
    date: "June 2, 2024",
    title: "Top Business Travel Tips for Busy Workers",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Miss Bella",
    readTime: "4 Min Read",
    img: "/images/travel1.jpg",
    
  },
   {
    id: 5,
    date: "June 12, 2024",
    title: "How to Save Money on Flights Without Stress",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Miss Amaka",
    readTime: "4 Min Read",
    img: "/images/travel2.jpg",
    
  },
     {
    id: 6,
    date: "June 21, 2024",
    title: "Work-Life Balance Starts With the Right Travel Plan",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Mr Ibrahim",
    readTime: "4 Min Read",
    img: "/images/travel3.jpg",
    
  },
];
export default function Blog (){


    return(
<div>
<AnimatedSection>
<section className="mt-12 px-4 sm:px-8 lg:px-20 pb-16 bg-gray-50">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Latest Travel Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={post.img}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col h-full">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Author Section */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={post.img}
                      alt={post.author}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
</div>
    )
}
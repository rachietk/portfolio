import { FiExternalLink } from "react-icons/fi";
import Container from "./Container";

const blogs = [
  {
    title: "Dangerous site on Github Pages",
    link: "https://medium.com/@rachitk29/dangerous-site-on-git-pages-d81d119fe796",
  },
  {
    title: "Discrimination in the 21st Century: A Harsh Truth We Still Ignore",
    link: "https://rachitk29.medium.com/discrimination-in-the-21st-century-a-harsh-truth-we-still-ignore-8730c007de0a",
  },
];

const BlogList = () => (
  <Container>
    <div className="pt-4 space-y-4 font-figtree border-t border-[#27272a] tracking-wider">
      <p className="text-gray-400 mb-2 text-sm">
        Here are some <b>blogs</b> I've written
      </p>

      {blogs.map((blog, idx) => (
        <a
  key={idx}
  href={blog.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-between w-full gap-3 sm:gap-4 
             px-4 py-3 sm:px-6 sm:py-4
             border border-white/10 rounded-lg 
             bg-transparent
             text-gray-400 text-sm
             cursor-pointer
             transform-gpu transition-all duration-200
             hover:scale-[1.005] hover:border-white/50 hover:bg-[#111111]
             no-underline
             focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]"
>
  <span>{blog.title}</span>
  <FiExternalLink className="text-gray-400" size={18} />
</a>

      ))}
    </div>
  </Container>
);

export default BlogList;

import UserData from "./UserData"
import './App.css'

function App() {
// define an array of objects
  const data = [
    { // index 0
      name: "Maria Rodriguez",
      title: "Marketing Manager",
      bio: "Manages digital marketing campaigns and social media strategy. Highly skilled in SEO and content creation.",
    },
    { // index 1
      name: "Theodore Carter Junior",
      title: "Customer Service Representative",
      bio: "Handles customer inquiries and provides technical support. Known for excellent communication and problem-solving skills.",
    },
    { // index 2
      name: "Chloe Lee",
      title: "UX/UI Designer",
      bio: "Creates user-friendly interfaces and visual designs.",
    },
  ]

  return (
    <>
    {/* First Card */}
      <div className="flex flex-col justify-center items-center h-screen w-screen gap-10">
      <div className="w-[400px]">
      <div className="bg-cyan-600 text-white p-5 outline outline-cyan-700 rounnded-t-lg">
        <h1 className="text-lg text-cyan-100">
          {quotes[0].bio}
        </h1>
      </div>
      <div className="bg-stone-200 text center p-4 outline outline-stone-400 rounded-b-lg">
        <h2 className="text-2xl text-cyan-700">{quotes[0].name}</h2>
        <h3 className="text-stone-400">{quotes[0].title}</h3>
      </div>
    </div>

    {/* Second Card */}
      <div className="w-[800px] flex">
      <div className="flex justify-between mb-4 rounded-r-full">
      <div className="p-2 bg-blue-500 w-80 rounded-l-xl outline outline-blue-500">
      <h1 className="text-4xl text-white p-5 w-100">{quotes[1].name}</h1>
      <h2 className="text-xl text-gray-400 pl-4">{quotes[1].title}</h2>
      </div>
      <div className="flex items-center justify-center rounded-r-full outline outline-gray-500">
      <h1 className="text-stone-950 text-xl text-justify text-left pl-5">
        {quotes[1].bio}
      </h1>
      </div>
      </div>
    </div>
  
    {/* Third Card */}
    <div className="w-[600px]">
    <div className="bg-rose-200 w-[200px] text-center p-4 outline-2 outline-red-400 rounded-b-lg">
      <h1 className="text-lg text-white-100">
        {quotes[2].bio}
      </h1>
    </div>
    <div className="bg-red-500 w-[200px] text-center p-4 outline-2 outline-red-400 rounded-b-lg">
      <h2 className="text-xl text-rose-700 text-justify">{quotes[2].name}</h2>
      <h3 className="text-rose-400 text-xl test-justify">{quotes[2].title}</h3>
    </div>
    </div>
  </div>


    </>
  )
}

export default App

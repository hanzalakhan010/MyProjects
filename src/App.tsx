import './App.css'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        {/* <!-- Projects Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <>
              {/* <!-- Project Card --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt="Project Image" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div>
                    <a href={project.code} className="inline-block mr-10 ml-10 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">View Code</a>
                    <a href={project.link} className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Live Preview</a>
                  </div>

                </div>
              </div>
            </>
          ))}

        </div >
      </main>

    </>
  )
}

export default App

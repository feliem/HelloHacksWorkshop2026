import { useState } from 'react'

const types = [
    { name: 'Fire', className: 'bg-red-500 hover:bg-red-600' },
    { name: 'Water', className: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Fairy', className: 'bg-pink-400 hover:bg-pink-500' },
    { name: 'Dragon', className: 'bg-indigo-500 hover:bg-indigo-600' },
  ]

function App() {
  const [selectedType, setSelectedType] = useState('')

  function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setSelectedType(response);
}

  return (
    <main className="min-h-screen bg-amber-50 px-6 py-12 text-slate-900 sm:px-10">
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-8 border-slate-900 bg-red-500 shadow-[0_5px_0_0_#0f172a]">
          <span className="h-5 w-5 rounded-full border-4 border-slate-900 bg-white" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Battle ready
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Pokemon Battle Assistant
        </h1>
        <p className="mt-4 max-w-md text-lg text-slate-600">
          What type of Pokemon are you fighting?
        </p>

        <div className="mt-8 grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
          {types.map((type) => (
            <button
              key={type.name}
              type="button"
              onClick={() => handleTypeClick(type.name)}
              className={`${type.className} rounded-xl px-4 py-3 font-bold text-white shadow-[0_4px_0_0_#0f172a] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-slate-900/25 active:translate-y-1 active:shadow-none`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {selectedType && <p className="mt-6 text-lg font-bold">{selectedType}</p>}
      </section>
    </main>
  )
}

export default App

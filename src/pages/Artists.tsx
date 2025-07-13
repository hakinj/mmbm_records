import React from 'react'

const Artists = () => {

     const artists = [
    { name: "Aayo", genre: "Afrobeat", image: "/Artist1.png" },
    { name: "Aayo", genre: "Afrobeat", image: "/Artist2.png" },
    { name: "Aayo", genre: "Afrobeat", image: "/Artist3.png" },
    { name: "Aayo", genre: "Afrobeat", image: "/Artist4.png" }
  ];
  return (
    <>
      <section id="artists" className="py-20 bg-black from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Artists</h2>
              <p className="text-xl text-orange-200 max-w-2xl mx-auto">
                Meet the talented musicians who bring the authentic Afrobeat sound to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artists.map((artist, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
                      <p className="text-orange-300 text-sm">{artist.genre}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Artists
import { useEffect, useState } from 'react'


interface SocialPostType {
  id: number;
  platform: "instagram" | "twitter" | "facebook" | "tiktok" | string; // customize as needed
  content: string;
  timestamp: string;
  likes: number;
  image: string;
}

function SocialMediaFeeds() {
      const [socialFeed, setSocialFeed] = useState<SocialPostType[]>([]);


        const socialPosts = [
    {
      id: 1,
      platform: "instagram",
      content: "🎵 New track 'Afrobeat Anthem' drops tomorrow! Get ready to feel the rhythm! #AfrobeatMusic #MMBM",
      timestamp: "2 hours ago",
      likes: 142,
      image: "bgNew4.png"
    },
    {
      id: 2,
      platform: "twitter",
      content: "Behind the scenes at our latest recording session with @KemiSounds 🎤✨ #StudioLife #AfrobeatVibes",
      timestamp: "5 hours ago",
      likes: 500,
      image: "bgNew5.png"
    },
    {
      id: 3,
      platform: "instagram",
      content: "Thank you Lagos! What an incredible night at the Music Hall 🔥 #LiveMusic #AfrobeatNight",
      timestamp: "1 day ago",
      likes: 256,
      image: "100meter_cover.png"
    }
  ];


       useEffect(() => {
          setSocialFeed(socialPosts);
        }, []);
  return (
    <>
     <section id="social" className="py-20 bg-[#000000]  from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Social Feed</h2>
                <p className="text-xl text-orange-200 max-w-2xl mx-auto">
                  Stay connected with the latest updates from MMBM Records
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {socialFeed.map((post: SocialPostType) => (
                  <div key={post.id} className="">
                    <div className="bg-gradient-to-br from-black/40 to-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:border-orange-400/50 transform hover:scale-105 transition-all duration-300 h-[450px]">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                          {post.platform === 'instagram' ? (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <span className="text-orange-400 font-semibold capitalize">{post.platform}</span>
                          <span className="text-orange-300 text-sm ml-2">{post.timestamp}</span>
                        </div>
                      </div>

                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt="Social media post"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}

                      <p className="text-orange-200 mb-4 text-sm leading-relaxed">{post.content}</p>

                      <div className="flex items-center space-x-4 text-orange-300 ">
                        <div className="flex items-center space-x-1 ">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="text-center mt-12">
                <p className="text-orange-200 mb-6">Follow us on social media for more updates!</p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-yellow-600 transform hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-yellow-600 transform hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-yellow-600 transform hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.526-.73a.326.326 0 0 0-.218-.095z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default SocialMediaFeeds
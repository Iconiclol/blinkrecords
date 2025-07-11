import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, Disc3, Mail, Instagram, Twitter, Youtube, Play, Star, Zap } from "lucide-react"

export default function BlinkRecords() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,0,0.3),transparent_50%)]"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-lime-400 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(0,255,255,0.8)] filter">
              BLINK
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider drop-shadow-[0_0_20px_rgba(255,0,255,0.8)]">
              RECORDS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8)]"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Where sound meets vision. Discover the future of music with artists who push boundaries and create magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(255,0,255,0.6)] hover:shadow-[0_0_40px_rgba(255,0,255,0.8)] transition-all duration-300 hover:scale-105 border border-pink-400">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]"
            >
              <Users className="mr-2 h-5 w-5" />
              Our Artists
            </Button>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_20px_rgba(0,255,255,0.8)]"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-lime-400 rounded-full animate-bounce delay-300 shadow-[0_0_25px_rgba(0,255,0,0.8)]"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-700 shadow-[0_0_15px_rgba(255,0,255,0.8)]"></div>
        <div className="absolute top-60 left-1/2 w-5 h-5 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,0,0.8)]"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.2)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-lime-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]">
              About Blink Records
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-black/50 border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                Founded on the belief that music should transcend boundaries, Blink Records is more than just a label –
                we're a creative collective pushing the envelope of what's possible in sound.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                From electronic symphonies to genre-defying collaborations, our artists don't just make music – they
                craft experiences that resonate in the digital age.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">Artists</div>
                </div>
                <div className="p-4 rounded-lg bg-pink-500/10 border border-pink-500/50 shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                  <div className="text-3xl font-bold text-pink-500 mb-2 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">
                    200+
                  </div>
                  <div className="text-sm text-gray-400">Releases</div>
                </div>
                <div className="p-4 rounded-lg bg-lime-400/10 border border-lime-400/50 shadow-[0_0_20px_rgba(0,255,0,0.4)]">
                  <div className="text-3xl font-bold text-lime-400 mb-2 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
                    10M+
                  </div>
                  <div className="text-sm text-gray-400">Streams</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 via-pink-500/20 to-lime-400/20 rounded-2xl backdrop-blur-sm border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.5)]">
                <Music className="w-24 h-24 text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-pulse shadow-[0_0_25px_rgba(255,0,255,0.8)]"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-lime-400 rounded-full animate-pulse delay-500 shadow-[0_0_20px_rgba(0,255,0,0.8)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 bg-gradient-to-br from-purple-900/50 via-black to-pink-900/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]">
              Featured Artists
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "NEON PULSE",
                genre: "Synthwave",
                color: "from-cyan-400 to-blue-500",
                shadow: "rgba(0,255,255,0.6)",
              },
              {
                name: "ELECTRIC DREAMS",
                genre: "Electronic Pop",
                color: "from-pink-500 to-purple-500",
                shadow: "rgba(255,0,255,0.6)",
              },
              {
                name: "DIGITAL STORM",
                genre: "Future Bass",
                color: "from-lime-400 to-cyan-400",
                shadow: "rgba(0,255,0,0.6)",
              },
            ].map((artist, index) => (
              <Card
                key={index}
                className="bg-black/70 border-2 border-gray-800 hover:border-cyan-400/80 transition-all duration-300 group hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)]"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${artist.color} rounded-lg mb-6 flex items-center justify-center group-hover:shadow-[0_0_40px_${artist.shadow}] transition-all duration-300 border border-white/20`}
                  >
                    <Disc3 className="w-16 h-16 text-white animate-spin group-hover:animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {artist.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{artist.genre}</p>
                  <Button className="w-full bg-gradient-to-r from-cyan-400/30 to-pink-500/30 hover:from-cyan-400/50 hover:to-pink-500/50 border-2 border-cyan-400/50 text-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                    <Play className="mr-2 h-4 w-4" />
                    Listen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,0,128,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,255,0,0.2),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]">
              Latest Releases
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Midnight Frequency",
                artist: "NEON PULSE",
                color: "from-cyan-400 to-blue-600",
                shadow: "rgba(0,255,255,0.5)",
              },
              {
                title: "Digital Hearts",
                artist: "ELECTRIC DREAMS",
                color: "from-pink-500 to-red-500",
                shadow: "rgba(255,0,255,0.5)",
              },
              {
                title: "Storm Protocol",
                artist: "DIGITAL STORM",
                color: "from-lime-400 to-green-500",
                shadow: "rgba(0,255,0,0.5)",
              },
              {
                title: "Neon Nights",
                artist: "VARIOUS ARTISTS",
                color: "from-yellow-400 to-orange-500",
                shadow: "rgba(255,255,0,0.5)",
              },
            ].map((release, index) => (
              <Card
                key={index}
                className="bg-gray-900/70 border-2 border-gray-700 hover:border-pink-500/80 transition-all duration-300 group hover:scale-105 shadow-[0_0_25px_rgba(255,0,255,0.3)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]"
              >
                <CardContent className="p-4">
                  <div
                    className={`w-full h-40 bg-gradient-to-br ${release.color} rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_${release.shadow}] transition-all duration-300 border border-white/20`}
                  >
                    <Star className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {release.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">{release.artist}</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 hover:from-pink-500/50 hover:to-purple-500/50 border-2 border-pink-500/50 text-pink-400 shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)]"
                  >
                    <Play className="mr-1 h-3 w-3" />
                    Play
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-t from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:100px_100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-lime-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Ready to join the Blink Records family? Let's create something extraordinary together.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Demo Submissions
                  </h3>
                  <p className="text-gray-400 mb-4">Send us your best work</p>
                  <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:shadow-[0_0_35px_rgba(0,255,255,0.8)] border border-cyan-300">
                    Submit Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-400/50 shadow-[0_0_40px_rgba(255,0,255,0.4)]">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-pink-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Collaborations
                  </h3>
                  <p className="text-gray-400 mb-4">Let's work together</p>
                  <Button className="bg-pink-400 hover:bg-pink-300 text-black font-semibold shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:shadow-[0_0_35px_rgba(255,0,255,0.8)] border border-pink-300">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full p-4 shadow-[0_0_30px_rgba(255,0,255,0.6)] hover:shadow-[0_0_40px_rgba(255,0,255,0.8)] border-2 border-pink-400/50"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full p-4 shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] border-2 border-cyan-400/50"
              >
                <Twitter className="w-6 h-6" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 rounded-full p-4 shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] border-2 border-red-400/50"
              >
                <Youtube className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t-2 border-cyan-400/50 shadow-[0_-10px_30px_rgba(0,255,255,0.3)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            © 2024 Blink Records. All rights reserved. | Where sound meets vision.
          </p>
        </div>
      </footer>
    </div>
  )
}

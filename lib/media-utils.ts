// Utility functions for handling media files

export interface Track {
  id: string
  title: string
  artist: string
  album?: string
  duration: string
  genre: string
  audioUrl: string
  previewUrl?: string
  coverArt: string
  releaseDate: string
}

export interface Artist {
  id: string
  name: string
  genre: string
  bio: string
  profileImage: string
  coverImage?: string
  socialLinks: {
    instagram?: string
    twitter?: string
    spotify?: string
    soundcloud?: string
  }
}

export interface Album {
  id: string
  title: string
  artist: string
  coverArt: string
  releaseDate: string
  tracks: Track[]
  genre: string
}

// Helper function to get media URLs
export const getMediaUrl = (path: string): string => {
  return `/${path}`
}

// Helper function to format duration
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

// Helper function to validate audio file types
export const isValidAudioFile = (filename: string): boolean => {
  const validExtensions = [".mp3", ".wav", ".flac", ".aac", ".ogg"]
  return validExtensions.some((ext) => filename.toLowerCase().endsWith(ext))
}

// Helper function to validate image file types
export const isValidImageFile = (filename: string): boolean => {
  const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"]
  return validExtensions.some((ext) => filename.toLowerCase().endsWith(ext))
}

// Sample data structure for tracks
export const sampleTracks: Track[] = [
  {
    id: "1",
    title: "MDMA",
    artist: "CHE",
    album: "REST IN BASS",
    duration: "3:42",
    genre: "Synthwave",
    audioUrl: "audio/tracks/neon-pulse-midnight-frequency.mp3",
    previewUrl: "audio/previews/neon-pulse-midnight-frequency-preview.mp3",
    coverArt: "images/albums/neon-pulse-digital-dreams.jpg",
    releaseDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Digital Hearts",
    artist: "ELECTRIC DREAMS",
    album: "Cyber Romance",
    duration: "4:15",
    genre: "Electronic Pop",
    audioUrl: "audio/tracks/electric-dreams-digital-hearts.mp3",
    previewUrl: "audio/previews/electric-dreams-digital-hearts-preview.mp3",
    coverArt: "images/albums/electric-dreams-cyber-romance.jpg",
    releaseDate: "2024-01-20",
  },
  {
    id: "3",
    title: "Storm Protocol",
    artist: "DIGITAL STORM",
    album: "Future Bass Chronicles",
    duration: "3:58",
    genre: "Future Bass",
    audioUrl: "audio/tracks/digital-storm-storm-protocol.mp3",
    previewUrl: "audio/previews/digital-storm-storm-protocol-preview.mp3",
    coverArt: "images/albums/digital-storm-future-bass-chronicles.jpg",
    releaseDate: "2024-01-25",
  },
]

// Sample data structure for artists
export const sampleArtists: Artist[] = [
  {
    id: "1",
    name: "NEON PULSE",
    genre: "Synthwave",
    bio: "Pioneer of the neo-synthwave movement, blending retro aesthetics with modern production.",
    profileImage: "images/artists/neon-pulse-profile.jpg",
    coverImage: "images/artists/neon-pulse-cover.jpg",
    socialLinks: {
      instagram: "https://instagram.com/neonpulseofficial",
      twitter: "https://twitter.com/neonpulse",
      spotify: "https://open.spotify.com/artist/neonpulse",
    },
  },
  {
    id: "2",
    name: "ELECTRIC DREAMS",
    genre: "Electronic Pop",
    bio: "Creating infectious electronic pop anthems that bridge the gap between underground and mainstream.",
    profileImage: "images/artists/electric-dreams-profile.jpg",
    coverImage: "images/artists/electric-dreams-cover.jpg",
    socialLinks: {
      instagram: "https://instagram.com/electricdreamsmusic",
      twitter: "https://twitter.com/electricdreams",
      soundcloud: "https://soundcloud.com/electricdreams",
    },
  },
  {
    id: "3",
    name: "DIGITAL STORM",
    genre: "Future Bass",
    bio: "Crafting emotional future bass journeys that transport listeners to digital landscapes.",
    profileImage: "images/artists/digital-storm-profile.jpg",
    coverImage: "images/artists/digital-storm-cover.jpg",
    socialLinks: {
      instagram: "https://instagram.com/digitalstormmusic",
      twitter: "https://twitter.com/digitalstorm",
      spotify: "https://open.spotify.com/artist/digitalstorm",
    },
  },
]

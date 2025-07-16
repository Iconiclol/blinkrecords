# How to Add Images and Music to Blink Records Website

## Adding Artist Images

### Step 1: Prepare Your Images
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400px for profile images
- **Quality**: High resolution for best results

### Step 2: Add Images to the Project
1. Place artist profile images in: `public/images/artists/`
2. Use this naming convention: `artist-name-profile.jpg`

Example:
\`\`\`
public/images/artists/
├── neon-pulse-profile.jpg
├── electric-dreams-profile.jpg
└── digital-storm-profile.jpg
\`\`\`

### Step 3: Update the Data
Edit `lib/media-utils.ts` and update the `sampleArtists` array:

\`\`\`typescript
{
  id: "1",
  name: "NEON PULSE",
  genre: "Synthwave",
  bio: "Your artist bio here...",
  profileImage: "images/artists/neon-pulse-profile.jpg", // Update this path
  // ... rest of the data
}
\`\`\`

## Adding Album Cover Art

### Step 1: Add Album Covers
1. Place album covers in: `public/images/albums/`
2. Use naming: `artist-album-title.jpg`

Example:
\`\`\`
public/images/albums/
├── neon-pulse-digital-dreams.jpg
├── electric-dreams-cyber-romance.jpg
└── digital-storm-future-bass-chronicles.jpg
\`\`\`

### Step 2: Update Track Data
In `lib/media-utils.ts`, update the `sampleTracks` array:

\`\`\`typescript
{
  id: "1",
  title: "Midnight Frequency",
  artist: "NEON PULSE",
  coverArt: "images/albums/neon-pulse-digital-dreams.jpg", // Update this
  // ... rest of the data
}
\`\`\`

## Adding Music Files

### Step 1: Prepare Audio Files
- **Format**: MP3 (recommended), WAV, or AAC
- **Quality**: 320kbps MP3 or higher
- **Length**: Full tracks or 30-second previews

### Step 2: Organize Audio Files
\`\`\`
public/audio/
├── tracks/           # Full-length tracks
│   ├── neon-pulse-midnight-frequency.mp3
│   ├── electric-dreams-digital-hearts.mp3
│   └── digital-storm-storm-protocol.mp3
├── previews/         # 30-second previews
│   ├── neon-pulse-midnight-frequency-preview.mp3
│   └── ...
└── demos/           # Demo submissions
\`\`\`

### Step 3: Update Track URLs
In `lib/media-utils.ts`:

\`\`\`typescript
{
  id: "1",
  title: "Midnight Frequency",
  artist: "NEON PULSE",
  audioUrl: "audio/tracks/neon-pulse-midnight-frequency.mp3", // Full track
  previewUrl: "audio/previews/neon-pulse-midnight-frequency-preview.mp3", // Preview
  // ... rest of the data
}
\`\`\`

## Quick Setup Example

### 1. Add Your Files:
\`\`\`
public/
├── images/
│   ├── artists/
│   │   └── my-artist-profile.jpg
│   └── albums/
│       └── my-album-cover.jpg
└── audio/
    └── tracks/
        └── my-song.mp3
\`\`\`

### 2. Update the Data:
\`\`\`typescript
// In lib/media-utils.ts
export const sampleTracks: Track[] = [
  {
    id: "1",
    title: "My Amazing Song",
    artist: "MY ARTIST",
    album: "My Album",
    duration: "3:45",
    genre: "Electronic",
    audioUrl: "audio/tracks/my-song.mp3",
    coverArt: "images/albums/my-album-cover.jpg",
    releaseDate: "2024-01-15",
  },
]

export const sampleArtists: Artist[] = [
  {
    id: "1",
    name: "MY ARTIST",
    genre: "Electronic",
    bio: "My artist biography...",
    profileImage: "images/artists/my-artist-profile.jpg",
    socialLinks: {
      instagram: "https://instagram.com/myartist",
    },
  },
]
\`\`\`

## Testing Your Changes

1. **Check Images Load**: Open the website and verify images appear
2. **Test Audio Playback**: Click play buttons to ensure audio works
3. **Check Console**: Look for any error messages in browser console

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in the `public/` directory
- Verify file extensions match the code

### Audio Not Playing
- Check audio file format (MP3 recommended)
- Ensure files aren't too large (< 10MB recommended)
- Test audio files play in your browser directly

### File Size Optimization
- **Images**: Use tools like TinyPNG to compress
- **Audio**: Use 128-320kbps MP3 for web
- **Consider**: Using preview clips instead of full tracks

## Adding More Artists/Tracks

Simply add new objects to the arrays in `lib/media-utils.ts`:

\`\`\`typescript
// Add to sampleTracks array
{
  id: "4", // Increment the ID
  title: "New Track",
  artist: "NEW ARTIST",
  // ... complete the object
}

// Add to sampleArtists array  
{
  id: "4", // Increment the ID
  name: "NEW ARTIST",
  // ... complete the object
}
\`\`\`

The website will automatically display your new content!
\`\`\`

This setup gives you:

1. **Dynamic Image Loading**: Artist profiles and album covers load from your files
2. **Functional Music Player**: Play buttons actually play your audio files
3. **Fallback System**: If images fail to load, it shows the original gradient/icon
4. **Visual Feedback**: Playing tracks show different styling
5. **Easy Management**: All content managed through the data files

To add your content:
1. Put images in the `public/images/` folders
2. Put audio files in the `public/audio/` folders  
3. Update the data in `lib/media-utils.ts`
4. The website will automatically use your new content!

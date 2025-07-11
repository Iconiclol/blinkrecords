# Blink Records Media Organization

This document outlines the folder structure and organization for media files in the Blink Records website.

## Folder Structure

### `/public/images/`
- **`artists/`** - Artist profile photos, promotional images, and headshots
  - Format: `artist-name-profile.jpg`, `artist-name-cover.jpg`
  - Recommended size: 800x800px for profiles, 1920x1080px for covers
  
- **`albums/`** - Album artwork and cover images
  - Format: `artist-name-album-title.jpg`
  - Recommended size: 1000x1000px (square format)
  
- **`logos/`** - Blink Records branding assets
  - Format: `blink-records-logo.svg`, `blink-records-logo-white.png`
  - Include various formats and sizes
  
- **`backgrounds/`** - Background images and textures
  - Format: `hero-background.jpg`, `section-texture.png`
  - Recommended size: 1920x1080px or larger
  
- **`events/`** - Event photos and promotional images
  - Format: `event-name-date.jpg`
  - Various sizes for different use cases

### `/public/audio/`
- **`tracks/`** - Full-length song files
  - Format: `artist-name-song-title.mp3`
  - Quality: 320kbps MP3 or higher
  
- **`previews/`** - 30-second preview clips
  - Format: `artist-name-song-title-preview.mp3`
  - Quality: 192kbps MP3, 30 seconds max
  
- **`demos/`** - Demo submissions from artists
  - Organized by submission date or artist name
  
- **`samples/`** - Audio samples and loops for production

### `/public/videos/`
- Music videos, behind-the-scenes content, and promotional videos
- Format: MP4 (H.264 codec recommended)
- Multiple resolutions available (1080p, 720p, 480p)

### `/public/assets/`
- **`icons/`** - Custom SVG icons and graphics
- **`fonts/`** - Custom web fonts for branding

## File Naming Conventions

### Images
- Use lowercase with hyphens: `artist-name-image-type.jpg`
- Include image type in filename: `profile`, `cover`, `album`, `event`
- Use appropriate file extensions: `.jpg` for photos, `.png` for graphics with transparency, `.svg` for vectors

### Audio
- Use lowercase with hyphens: `artist-name-song-title.mp3`
- Include version if applicable: `song-title-radio-edit.mp3`, `song-title-extended-mix.mp3`
- Previews should end with `-preview`: `song-title-preview.mp3`

### Videos
- Use lowercase with hyphens: `artist-name-video-title.mp4`
- Include resolution in filename: `music-video-1080p.mp4`

## Optimization Guidelines

### Images
- Compress images for web use (aim for <500KB for most images)
- Use WebP format when possible for better compression
- Provide multiple sizes for responsive design
- Include alt text descriptions for accessibility

### Audio
- Use appropriate bitrates (320kbps for full tracks, 192kbps for previews)
- Normalize audio levels across all tracks
- Include metadata (title, artist, album, genre)
- Consider providing multiple formats (MP3, OGG, AAC)

### Videos
- Compress videos for web streaming
- Provide multiple resolutions
- Include captions/subtitles when applicable
- Use poster images for video thumbnails

## Usage in Code

\`\`\`typescript
// Import media utilities
import { getMediaUrl, sampleTracks, sampleArtists } from '@/lib/media-utils'

// Get media URLs
const trackUrl = getMediaUrl('audio/tracks/neon-pulse-midnight-frequency.mp3')
const albumArt = getMediaUrl('images/albums/neon-pulse-digital-dreams.jpg')

// Use with audio player
import { audioManager } from '@/lib/audio-player'
await audioManager.loadTrack(trackUrl)
await audioManager.play()
\`\`\`

## Adding New Media

1. **Images**: Add to appropriate subfolder with correct naming convention
2. **Audio**: Add full track to `tracks/` and preview to `previews/`
3. **Update data**: Add entries to `media-utils.ts` sample data
4. **Test**: Verify files load correctly in development
5. **Optimize**: Ensure files are properly compressed for web use

## Security Considerations

- Validate file types on upload
- Scan files for malware
- Implement proper access controls
- Use CDN for better performance and security
- Regular backups of media files

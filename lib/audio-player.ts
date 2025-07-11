// Audio player utility functions

export class AudioManager {
  private audio: HTMLAudioElement | null = null
  private currentTrack: string | null = null
  private isPlaying = false
  private volume = 0.75

  constructor() {
    if (typeof window !== "undefined") {
      this.audio = new Audio()
      this.setupEventListeners()
    }
  }

  private setupEventListeners() {
    if (!this.audio) return

    this.audio.addEventListener("ended", () => {
      this.isPlaying = false
      // Auto-play next track logic can be added here
    })

    this.audio.addEventListener("error", (e) => {
      console.error("Audio playback error:", e)
    })

    this.audio.addEventListener("loadstart", () => {
      console.log("Audio loading started")
    })

    this.audio.addEventListener("canplay", () => {
      console.log("Audio can start playing")
    })
  }

  async loadTrack(audioUrl: string): Promise<void> {
    if (!this.audio) return

    if (this.currentTrack === audioUrl) return

    this.audio.src = audioUrl
    this.currentTrack = audioUrl
    this.audio.volume = this.volume

    return new Promise((resolve, reject) => {
      if (!this.audio) return reject("Audio not initialized")

      this.audio.addEventListener("canplay", () => resolve(), { once: true })
      this.audio.addEventListener("error", reject, { once: true })
      this.audio.load()
    })
  }

  async play(): Promise<void> {
    if (!this.audio) return

    try {
      await this.audio.play()
      this.isPlaying = true
    } catch (error) {
      console.error("Playback failed:", error)
      throw error
    }
  }

  pause(): void {
    if (!this.audio) return

    this.audio.pause()
    this.isPlaying = false
  }

  stop(): void {
    if (!this.audio) return

    this.audio.pause()
    this.audio.currentTime = 0
    this.isPlaying = false
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume))
    if (this.audio) {
      this.audio.volume = this.volume
    }
  }

  getCurrentTime(): number {
    return this.audio?.currentTime || 0
  }

  getDuration(): number {
    return this.audio?.duration || 0
  }

  seek(time: number): void {
    if (this.audio) {
      this.audio.currentTime = time
    }
  }

  getIsPlaying(): boolean {
    return this.isPlaying
  }

  getCurrentTrack(): string | null {
    return this.currentTrack
  }
}

// Singleton instance
export const audioManager = new AudioManager()

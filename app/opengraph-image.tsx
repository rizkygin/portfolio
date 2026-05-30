import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Rizky — Full Stack Developer & Mobile Apps Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#111111',
            border: '1px solid #1f1f1f',
            borderRadius: '999px',
            padding: '10px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#4ade80',
            }}
          />
          <span style={{ color: '#888', fontSize: '18px' }}>Available for new opportunities</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#e5e5e5',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          Hi, I&apos;m{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a78bfa, #ec4899)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Rizky
          </span>
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: '32px',
            color: '#666',
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          Full Stack Developer · Mobile Apps Engineer · AI Agent Builder
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['React', 'Next.js', 'React Native', 'Node.js', 'AI Agents', 'Illustration'].map((tag) => (
            <div
              key={tag}
              style={{
                background: '#111',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#777',
                fontSize: '18px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            fontSize: '22px',
            color: '#6366f1',
            fontWeight: 600,
          }}
        >
          rizky.dev
        </div>
      </div>
    ),
    { ...size }
  )
}

// Reusable image wrappers that enforce correct rendering for each asset type.
// CutoutImage — transparent PNGs; never crops, uses drop-shadow for depth.
// FramedPhoto  — full rectangular JPGs/AVIFs; crops to fill, rounded + shadow.

export function CutoutImage({ src, alt, className = '', style, loading = 'lazy' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain drop-shadow-xl ${className}`}
      style={style}
      loading={loading}
      decoding="async"
    />
  )
}

export function FramedPhoto({ src, alt, className = '', imgClassName = '', loading = 'lazy' }) {
  return (
    <div className={`overflow-hidden rounded-2xl shadow-paper-lg ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        loading={loading}
        decoding="async"
      />
    </div>
  )
}

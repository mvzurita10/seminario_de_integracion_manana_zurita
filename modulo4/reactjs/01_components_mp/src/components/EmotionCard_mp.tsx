interface EmotionCardProps {
  emocion: string
  detallesTrigger?: string
  critica?: boolean
}

export default function EmotionCard_mp({
  emocion,
  detallesTrigger = 'Sin detalles',
  critica = false,
}: EmotionCardProps) {
  return (
    <div
      style={{
        border: critica ? '2px solid red' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: critica ? '#ffebea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{emocion}</h3>
      <p style={{ margin: 0, color: '#555' }}>{detallesTrigger}</p>
    </div>
  )
}

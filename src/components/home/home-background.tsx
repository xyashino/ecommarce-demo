import { Circle } from '@/components/circle'

export function HomeBackground() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Circle
        size="md"
        position={{ top: '0rem', left: '10rem' }}
        variant="blue"
      />
      <Circle
        size="sm"
        position={{ bottom: '0rem', left: '10rem' }}
        variant="cyan"
      />
      <Circle
        size="lg"
        position={{ bottom: '0rem', right: '10rem' }}
        variant="warm"
      />
      <Circle
        size="lg"
        position={{ top: '0rem', right: '12rem' }}
        variant="warm"
        center
      />
      <Circle
        size="lg"
        position={{ left: '6rem', top: '50%' }}
        variant="blue"
        center
      />
    </div>
  )
}

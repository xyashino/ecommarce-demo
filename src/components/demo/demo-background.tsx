import { Circle } from '@/components/circle'

export function DemoBackground() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Circle
        size="sm"
        position={{ top: '0rem', left: '0rem' }}
        variant="blue"
      />
      <Circle
        size="sm"
        position={{ bottom: '0rem', left: '0rem' }}
        variant="warm"
      />
    </div>
  )
}

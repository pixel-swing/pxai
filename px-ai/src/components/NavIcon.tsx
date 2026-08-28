import { Blocks, BookOpen, BrainCircuit, ChartNoAxesCombined, GraduationCap, Newspaper, ScrollText, Sparkles, TerminalSquare } from 'lucide-react'
import type { NavIcon as NavIconName } from '../types/content'

const icons = { sparkles: Sparkles, book: BookOpen, article: ScrollText, terminal: TerminalSquare, blocks: Blocks, brain: BrainCircuit, chart: ChartNoAxesCombined, newspaper: Newspaper, graduation: GraduationCap }

export function NavIcon({ name, size = 18 }: { name: NavIconName; size?: number }) {
  const Icon = icons[name]
  return <Icon size={size} strokeWidth={2.4} aria-hidden="true" />
}

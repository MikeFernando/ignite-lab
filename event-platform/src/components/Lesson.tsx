import { CheckCircle, Lock } from 'phosphor-react'
import { isPast } from 'date-fns'
import { format } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isAvailableLeassonDate = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE ' • ' dd ' de' MMMM ' • ' k'h'ms", {
    locale: ptBR
  })

  return (
    <a href="#">
      <span className="text-gray-300">
        {/* Domingo • 20 de junho • 19h00 */}
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isAvailableLeassonDate ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20}/>
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em breve
            </span>
          )}
          
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-500">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  )
}

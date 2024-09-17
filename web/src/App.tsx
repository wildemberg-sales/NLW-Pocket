import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { SummaryGoals } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <SummaryGoals /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}

export default App

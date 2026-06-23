import useNotesSide from "@/entities/notes/model/useNoteSide.js";
import useTodoSide from "@/entities/todo/model/useTodoSide.js";
import useWeather from "@/entities/weather/model/useWeather.js";
import useNotes from "@/entities/notes/model/useNotes.js";
import useTasks from "@/entities/todo/model/useTasks.js";

const useHome = () => {

  const { notes } = useNotes()
  const { allNotes } = useNotesSide(notes)
  const { tasks } = useTasks()
  const { pendingCount } = useTodoSide(tasks)
  const { temp, weatherDesc } = useWeather()

  return {
    allNotes,
    pendingCount,
    temp,
    weatherDesc,
  }
}

export default useHome
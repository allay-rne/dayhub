import './HomeOverview.scss'
import HomeCard from "@/shared/ui/HomeCard/index.js";
import Button from "@/shared/ui/Button/index.js";
import useHome from "@/pages/Home/lib/useHome.js";

const HomeOverview = () => {

  const {
    allNotes,
    pendingCount,
    temp,
    weatherDesc,
  } = useHome()

  return (
    <section className="home-overview">
      <div className="home-overview__card">
        <HomeCard
          name="todo"
          iconBg="rgba(232, 220, 200, 0.5)"
          title="Todo"
          value={pendingCount}
          subtitle="tasks remaining"
        >
          <Button
            className="home-overview__button"
            label="Open Todo"
            href="/todo"
          />
        </HomeCard>
        <HomeCard
          name="notePage"
          iconBg="rgba(201, 212, 184, 0.5)"
          title="Notes"
          value={allNotes}
          subtitle="notes in total"
        >
          <Button
            className="home-overview__button"
            label="Open Notes"
            href="/notes"
          />
        </HomeCard>
        <HomeCard
          name="sunCloud"
          iconBg="rgba(212, 184, 150, 0.5)"
          title="Weather"
          value={`${temp}°C`}
          subtitle={weatherDesc}
        >
          <Button
            className="home-overview__button"
            label="Open Weather"
            href="/weather"
          />
        </HomeCard>
      </div>
    </section>
  )
}

export default HomeOverview
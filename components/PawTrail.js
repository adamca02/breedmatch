const PAW_PATH =
  "M12 21c-3.2 0-5.6-1.7-5.6-4 0-1.5 1-2.6 2.2-3.7 1-.9 1.9-1.8 2.3-3 .2-.5.6-.8 1.1-.8s.9.3 1.1.8c.4 1.2 1.3 2.1 2.3 3 1.2 1.1 2.2 2.2 2.2 3.7 0 2.3-2.4 4-5.6 4zM5.5 11.5c-1.2.4-2.5-.4-2.9-1.7-.4-1.3.2-2.7 1.4-3.1 1.2-.4 2.5.4 2.9 1.7.4 1.3-.2 2.7-1.4 3.1zM18.5 11.5c-1.2-.4-1.8-1.8-1.4-3.1.4-1.3 1.7-2.1 2.9-1.7 1.2.4 1.8 1.8 1.4 3.1-.4 1.3-1.7 2.1-2.9 1.7zM9.4 7.6c-1.3.2-2.5-.8-2.7-2.2C6.5 4 7.4 2.7 8.7 2.5c1.3-.2 2.5.8 2.7 2.2.2 1.4-.7 2.7-2 2.9zM14.6 7.6c-1.3-.2-2.2-1.5-2-2.9.2-1.4 1.4-2.4 2.7-2.2 1.3.2 2.2 1.5 2 2.9-.2 1.4-1.4 2.4-2.7 2.2z";

export default function PawTrail({ total, current }) {
  return (
    <div className="paw-trail" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={Math.min(current, total)} aria-label="Quiz progress">
      {Array.from({ length: total }, (_, i) => {
        const cls = i < current ? "paw done" : i === current ? "paw current" : "paw";
        const tilt = i % 2 === 0 ? "-14deg" : "14deg";
        return (
          <svg key={i} className={cls} style={{ "--tilt": tilt }} viewBox="0 0 24 24" aria-hidden="true">
            <path d={PAW_PATH} />
          </svg>
        );
      })}
    </div>
  );
}

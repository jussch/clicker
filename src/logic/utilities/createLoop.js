/**
 * Created by Justin on 6/10/2018.
 */

export default function createLoop(func) {
  let cancelled = false;
  let startTime = Date.now();
  function tick() {
    const currentTime = Date.now();
    const deltaTime = (currentTime - startTime) / 1000;
    startTime = currentTime;

    func(deltaTime);
    if (!cancelled) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  return () => {
    cancelled = true;
  };
}

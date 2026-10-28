const clamp = value => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));

export function solutionsState(progress, count = 6) {
  const p = clamp(progress), total = Math.max(1, Math.floor(count) || 1);
  const index = Math.min(total - 1, Math.floor(p * total));
  const local = p === 1 ? 1 : p * total - index;
  return {
    index, local, beat: local < .26 ? 0 : local < .53 ? 1 : 2,
    builds: [-.1, .26, .53].map(start => {
      const t = clamp((local - start) / .18);
      return t * t * (3 - 2 * t);
    }),
  };
}

export const filmEase = (a,b,v) => {
  const t=clamp((v-a)/(b-a));
  return t*t*t*(t*(t*6-15)+10);
};

// The last part of every shot travels to the next set, without a camera cut.
export function solutionsFilmState(progress) {
  const state=solutionsState(progress),t=state.local;
  const travel=state.index<5?filmEase(.84,1,t):0;
  const focus=state.index+travel;
  const orbit=filmEase(.04,.76,t);
  return {...state,travel,focus,x:focus*14,
    yaw:(.44-orbit*.68)*(1-travel)+.44*travel,
    zoom:(1-filmEase(.10,.51,t)*.17)*(1-travel)+travel,
    assemble:filmEase(.025,.43,t),
    connect:filmEase(.25,.69,t),
    resolve:filmEase(.52,.78,t),
    copyOpacity:filmEase(0,.07,t)*(1-filmEase(.84,.98,t)),
  };
}

import { initTabs, initBuildSubTabs, initState, initRaces, writeBuildId, initSpecial } from './core.js?v=phase2_1';
initTabs();
initBuildSubTabs();
initState();
initRaces();
initSpecial();
writeBuildId('phase5');


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.subtab');
  if(!btn) return;
  if(btn.dataset.subtab === 'special') {
    setTimeout(() => initSpecial(), 0);
  }
});
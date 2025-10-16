// Simple toggle helpers for sport.html cards.
const athleticsPanel = document.getElementById('athletics');
const dancePanel = document.getElementById('dance');
const calisthenicsPanel = document.getElementById('calisthenics');
const challengePanel = document.getElementById('challenges');

function togglePanel(panel, hiddenClass) {
  if (!panel) return;
  panel.classList.toggle(hiddenClass);
}

window.athletics = () => togglePanel(athleticsPanel, 'hidden1');
window.dance = () => togglePanel(dancePanel, 'hidden2');
window.calisthenics = () => togglePanel(calisthenicsPanel, 'hidden3');
window.challenges = () => togglePanel(challengePanel, 'hidden4');

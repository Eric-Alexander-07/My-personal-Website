(() => {
  const initAssetMixChart = () => {
    const canvas = document.getElementById('assetMixChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const data = {
      labels: ['BTC', 'XRP', 'SUI', 'DOGE', 'SOL'],
      datasets: [
        {
          label: 'Asset Mix',
          data: [50, 18.5, 12.5, 6.75, 12.25],
          backgroundColor: ['#f7931a', '#23292f', '#6fbcf0', '#c2a633', '#4f14f1ff'],
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverOffset: 8,
        },
      ],
    };

    new Chart(ctx, {
      type: 'doughnut',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.parsed}%`,
            },
          },
        },
        animation: {
          duration: 1200,
          easing: 'easeOutQuart',
        },
      },
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAssetMixChart, { once: true });
  } else {
    initAssetMixChart();
  }
})();

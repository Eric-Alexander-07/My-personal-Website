(() => {
  const initAssetMixChart = () => {
    const canvas = document.getElementById('assetMixChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const data = {
      labels: ['BTC', 'ETH', 'SOL', 'Smallcaps'],
      datasets: [
        {
          label: 'Asset Mix',
          data: [50, 25, 10, 5],
          backgroundColor: ['#2f5869', '#4e7d92', '#7aa3b5', '#c9d7dd'],
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

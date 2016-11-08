export default () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch((err) => {
      console.warn('ServiceWorker registration failed: ', err);
    });
  }
};

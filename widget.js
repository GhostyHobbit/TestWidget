(function() {
    if (window.MyWidgetLoaded) return;
    window.MyWidgetLoaded = true;

    const iframe = document.createElement('iframe');
    iframe.src = 'https://wireextender.test';
    iframe.style.border = 'none';
    iframe.style.width = '400px';
    iframe.style.height = '600px';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '20px';
    iframe.style.right = '20px';
    iframe.style.zIndex = '9999';

    document.body.appendChild(iframe);

    const currentScript = document.currentScript;
    const widgetId = currentScript.getAttribute('data-id');
    iframe.src += `?id=${encodeURIComponent(widgetId)}`;
})();

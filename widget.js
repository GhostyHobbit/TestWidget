(() => {
    // ✅ Avoid global variable conflicts
    if (window.MyFAQWidgetLoaded) return;
    window.MyFAQWidgetLoaded = true;

    // Create the container element
    const container = document.createElement('div');
    container.id = 'faq-widget-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.fontFamily = 'sans-serif';
    document.body.appendChild(container);

    // Create the toggle button
    const button = document.createElement('button');
    button.innerText = 'FAQ Centre';
    button.style.background = '#999';
    button.style.color = '#000';
    button.style.border = 'none';
    button.style.width = '120px';
    button.style.height = '60px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
    container.appendChild(button);

    // Create the popup
    const popup = document.createElement('div');
    popup.id = 'faq-popup';
    popup.style.position = 'absolute';
    popup.style.bottom = '80px';
    popup.style.right = '0';
    popup.style.width = '300px';
    popup.style.background = '#789';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '12px';
    popup.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    popup.style.padding = '16px';
    popup.style.display = 'none';
    popup.style.transition = 'all 0.3s ease';
    popup.innerHTML = `
    <h3 style="margin-top:0;font-size:18px;color:#1e293b;">FAQ</h3>
    <p><strong>Q:</strong> How does this widget work?</p>
    <p><strong>A:</strong> You just embed one script tag!</p>
    <p><strong>Q:</strong> Can I style it?</p>
    <p><strong>A:</strong> Yep — customize it however you like.</p>
  `;
    container.appendChild(popup);

    // Toggle visibility
    button.onclick = () => {
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    };
})();

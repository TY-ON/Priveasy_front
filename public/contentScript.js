(() => {
    console.log("start content script!!");
    const pageUrl = window.location.href;
  
    // HTML과 URL을 백그라운드로 전달
    chrome.runtime.sendMessage({
      type: "PAGE_INFO",
      url: pageUrl,
    });
})();
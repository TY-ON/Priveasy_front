const getPageInfo = async () => {
    return new Promise((resolve, reject) => {
        // 현재 활성 탭 정보 가져오기
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
            // content script 실행
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        files: ["contentScript.js"],
                    },
                    () => {
                        console.log("Content script executed!");
                    }
                );
            }
        });

        // content script에서 메시지 수신
        chrome.runtime.onMessage.addListener((message) => {
            if (message.type === "PAGE_INFO") {
                resolve(message.url);
            }
        });
    });
}

export default getPageInfo;
document.addEventListener('DOMContentLoaded', function () {
    const titlebarHTML = `
        <div class="titlebar">
            <div class="title">DID CA</div>
            <div class="menu-button" onclick="window.location.href='settings.html'">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    document.querySelectorAll('.titlebar-container').forEach(container => {
        container.innerHTML = titlebarHTML;
    });

    const titlebarWithBackKeyHTML = `
        <div class="titlebar">
            <div class="back-arrow" onclick="handleBack()">←</div>
            <div class="title">DID CA</div>
            <div class="menu-button" onclick="window.location.href='settings.html'">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    document.querySelectorAll('.titlebar-backkey-container').forEach(container => {
        container.innerHTML = titlebarWithBackKeyHTML;
    });
});

function handleBack() {
    if (history.length > 1) {
        setPage('main.html');
        //history.back();
    } else {
        alert("이전 페이지가 없습니다");
    }
}
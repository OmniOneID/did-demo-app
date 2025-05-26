const basePath = window.location.origin + "/did-demo-app/v2.0.0.0/";

function setPage(page) {
    window.location.href = basePath + page;
}

function getBasePath() {
    return basePath;
}
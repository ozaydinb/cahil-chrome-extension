const searchResultDiv = document.getElementById("result-stats")
if(searchResultDiv !== undefined) {
    let removeNewsButton = document.createElement("button");
    removeNewsButton.innerHTML = "Cahilleş 🥳";
    removeNewsButton.onclick = removeNewsButtonOnClick;
    removeNewsButton.style = "margin-left:10px"

    let removeEcommerceButton = document.createElement("button");
    removeEcommerceButton.innerHTML = "fakirim :(";
    removeEcommerceButton.onclick = removeEcommerceButtonOnClick;
    removeEcommerceButton.style = "margin-left:10px"

    searchResultDiv.appendChild(removeNewsButton);
    searchResultDiv.appendChild(removeEcommerceButton);
}

function removeEcommerceButtonOnClick() {
    const ecommercePageUrls = ["hepsiburada.com",
        "trendyol.com",
        "n11.com",
        "akakce.com",
        "cimri.com",
        "ciceksepeti.com",
        "amazon.com.tr",
        "getir.com",
        "boyner.com.tr"]
    filterSearchResult(ecommercePageUrls);
}

function removeNewsButtonOnClick() {
    const newsWebPageUrls = ["hurriyet.com.tr",
        "sabah.com.tr",
        "milliyet.com.tr",
        "ensonhaberler.com",
        "haberler.com",
        "haber7.com",
        "ahaber.com.tr",
        "haberturk.com",
        "haberler.com",
        "cnnturk.com",
        "trthaber.com",
        "ntv.com.tr",
        "tgrthaber.com.tr",
        "cumhuriyet.com.tr",
        "dha.com.tr",
        "ensonhaber.com",
        "sozcu.com.tr",
        "takvim.com.tr",
        "mynet.com",
        "aksam.com.tr",
        "internethaber.com"];

    filterSearchResult(newsWebPageUrls);
}

function filterSearchResult(excludedWebSites) {
    const searchInput = document.getElementsByName("q") && document.getElementsByName("q")[0];
    const searchText = searchInput.value;

    let removedSearchTerms = "";
    for (let i = 0; i < excludedWebSites.length; i++) {
        let siteName = excludedWebSites[i];

        if (!searchText.includes(siteName)){
            removedSearchTerms += " -site:"+siteName;
        }
    }

    searchInput.value = searchText + removedSearchTerms;
    document.getElementById("tsf").submit();
}
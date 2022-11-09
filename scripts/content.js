const searchResultDiv = document.getElementById("result-stats")
if(searchResultDiv !== undefined) {
    let advancedSearchButton = document.createElement("button");
    advancedSearchButton.innerHTML = "Cahilleş";
    advancedSearchButton.onclick = search;

    searchResultDiv.appendChild(advancedSearchButton);
}

function search() {
    const searchInput = document.getElementsByName("q") && document.getElementsByName("q")[0];
    const searchText = searchInput.value;

    const excludedWebSites = ["hurriyet.com.tr",
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
// News Website



document.getElementById("news").addEventListener("click", function(e) {
    e.preventDefault()
    let url = "https://theconversation.com/ca/topics/globalization-16716"
    window.open(url, '_newtab')
})


// Quote Function
document.getElementById("quote").addEventListener("click", function(e) {
    e.preventDefault()
    let url_quote = "https://www.quoteslyfe.com/quote/Globalisation-Means-the-whole-world-not-just-223311"
    window.open(url_quote, '_newtab')
})

// Search Function (Using Google)
document.getElementById('search').addEventListener("click", function(e) {
    e.preventDefault()
    let search_box_value = document.getElementById("search-box").value
    if (search_box_value == "") {
        return {}
    } else {
        let url_search = `https://www.google.com/search?q=${search_box_value}`
        window.open(url_search, '_newtab')
    }
})

// document.getElementById('rmove').addEventListener("click", function(e) {
//     e.preventDefault()
//     document.getElementById("te").className = "animate_animated animate__slideOutRight"
// })

document.getElementById("dl").addEventListener("click", function(e) {
    e.preventDefault()
    window.open("https://d2l.cbe.ab.ca/content/enforced/940061-cbel2122winsocial101slkrausnick2/SS101GlobalTextPDF/Chap5_Opportunities.pdf", "_newTab")
})
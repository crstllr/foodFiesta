function expandCard(card) {
    var expandedCard = document.getElementById("expanded-card");
    var title = card.querySelector("p").innerText;
    var price = card.querySelector("span").innerText;
    var details = card.querySelector(".extra-details").innerHTML;

    document.getElementById("expanded-title").innerText = title;
    document.getElementById("expanded-price").innerText = price;
    document.getElementById("expanded-description").innerHTML = details;

    expandedCard.style.display = "block";
}

function closeExpandedCard() {
    var expandedCard = document.getElementById("expanded-card");
    expandedCard.style.display = "none";
}
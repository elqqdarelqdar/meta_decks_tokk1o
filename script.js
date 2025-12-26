const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const decksData = [
    {
        name: "Golem Rocket Control",
        winrate: "54.1%",
        cards: [26000015, 26000009, 26000023, 26000000, 26000018, 28000003, 28000012, 26000011],
        link: "https://link.clashroyale.com/deck/en?deck=26000015;26000009;26000023;26000000;26000018;28000003;28000012;26000011"
    },
    {
        name: "Pekka Bridge Spam",
        winrate: "56.8%",
        cards: [26000004, 26000046, 26000042, 26000016, 28000002, 26000051, 28000008, 26000062],
        link: "https://link.clashroyale.com/deck/en?deck=26000004;26000046;26000042;26000016;28000002;26000051;28000008;26000062"
    }
];

function renderDecks() {
    const list = document.getElementById('deck-list');
    list.innerHTML = ""; // Очищаем перед отрисовкой

    decksData.forEach(deck => {
        const cardElements = deck.cards.map(id => 
            `<img class="card-img" src="https://royaleapi.github.io/cr-api-assets/cards/${id}.png" alt="card" onerror="this.src='https://game-assets.swaggervesta.com/cards/${id}.png'">`
        ).join('');

        const deckHtml = `
            <div class="deck-card">
                <div class="deck-header">
                    <strong>${deck.name}</strong>
                    <span class="winrate">WR: ${deck.winrate}</span>
                </div>
                <div class="cards-grid">
                    ${cardElements}
                </div>
                <button class="copy-button" onclick="openDeck('${deck.link}')">Копировать колоду</button>
            </div>
        `;
        list.innerHTML += deckHtml;
    });
}

function openDeck(url) {
    tg.openLink(url);
    tg.HapticFeedback.notificationOccurred('success');
}

renderDecks();

const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// БАЗА ДАННЫХ (Меняй эти данные раз в 2 дня)
const decksData = [
    {
        name: "Pekka Ram Rider",
        winrate: "56.2%",
        // Список ID карт (можно найти на RoyaleApi или в справочниках)
        cards: [26000004, 26000051, 28000015, 26000036, 28000000, 27000006, 26000012, 26000042],
        link: "https://link.clashroyale.com/deck/en?deck=26000004;26000051;28000015;26000036;28000000;27000006;26000012;26000042"
    },
    {
        name: "Log Bait Classic",
        winrate: "51.8%",
        cards: [26000011, 26000041, 27000003, 28000011, 28000004, 26000014, 26000010, 26000002],
        link: "https://link.clashroyale.com/deck/en?deck=26000011;26000041;27000003;28000011;28000004;26000014;26000010;26000002"
    }
];

function renderDecks() {
    const list = document.getElementById('deck-list');
    
    decksData.forEach(deck => {
        const cardElements = deck.cards.map(id => 
            `<img class="card-img" src="https://cdn.royaleapi.com/static/img/cards-150/${id}.png" alt="card">`
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
    tg.HapticFeedback.notificationOccurred('success'); // Вибрация при клике
}

renderDecks();

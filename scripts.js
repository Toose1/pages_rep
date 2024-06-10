let tg = window.Telegram.WebApp;
tg.expand();
Telegram.WebApp.setHeaderColor(tg.themeParams.header_bg_color);

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#F36D91";

let items = [];

function toggleItem(btn, itemId, price) {

};


Telegram.WebApp.onEvent("mainButtonClicked", () => {
    let data = {
        name: "nice))",
        price: "2000$"
    };
    tg.sendData(JSON.stringify(data));
});

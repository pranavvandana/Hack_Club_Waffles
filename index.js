function showText() {
    const menu = document.getElementById("menu");
    const output = document.getElementById("output");

    if (menu.value === "Messi") {
        output.textContent = "FC Barcelona!";
    }   else if (menu.value === "Ronaldo") {
        output.textContent = "Real Madrid!";
    }   else if (menu.value === "Neymar") {
        output.textContent = "FC Barcelona!";
    }   else if (menu.value === "MBappé") {
        output.textContent = "Real Madrid!";
    }   else {
        output.textContent = "";    
    }
}   

function changeDescription(playerId) {
    const infoBox = document.getElementById(playerId + '-info');
    if (infoBox.style.display === 'none') {
        infoBox.style.display = 'block'
    }   else {
        infoBox.style.display = 'none';
    }
}

function showText() {
    const selected = document.getElementById("menu").value;
    console.log("Dropdown selected:", selected);
    const output = document.getElementById("output")
    const body = document.getElementById("main-body");
    const container = document.getElementById("container");
    if (!output) {
        console.error("#output element not found!");
        return;
    }
    
    let clubText = "";
    
    switch (selected) {
        case "Messi":
            body.style.backgroundColor = '#f0f8ff';
            container.style.borderColor = '#007bff';
            clubText = "Favorite Club: FC Barcelona!";
            break;
        case "Ronaldo":
            body.style.backgroundColor = "#fff0f5";
            container.style.borderColor = '#ffa500';
            clubText = "Favorite Club: Real Madrid!";
            break;
        case "Neymar":
            body.style.backgroundColor = '#f5fff0';
            container.style.borderColor = '#007bff';
            clubText = "Favorite Club: FC Barcelona!";
            break;
        case "MBappé":
            body.style.backgroundColor = '#fdf5e6';
            container.style.borderColor = '#9370db';
            clubText = "Favorite Club: Real Madrid!";
            break;
        default:
            body.style.backgroundColor = '#ffffff';
            container.style.borderColor = '#cc9600';
            clubText = "";
    }

    output.textContent = clubText;
}
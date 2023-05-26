function initServerData(serverIp,serverPort){
    console.log(serverIp);
    console.log(serverPort);
    const serverIpElement = document.getElementById('server-ip');
    serverIpElement.innerHTML = serverIp;
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }
        const motd = document.getElementById("motd");
        motd.innerHTML = data.motd;

        const playerCounter = document.getElementById("player-count");
        playerCounter.innerHTML = data.players.now;

        const logo = document.getElementById("server-icon");
        logo.src = data.favicon;
    } 
}

initServerData("192.46.214.6","25565");
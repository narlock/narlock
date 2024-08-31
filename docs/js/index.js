window.onload = function() {
    const rootDiv = document.getElementById('snowflakes');
    createSnowflakes(rootDiv, 20);
}

function createSnowflakes(rootDiv, numberOfSnowflakes) {
    for(let i = 0; i < numberOfSnowflakes; i++) {
        let snowflakeDiv = document.createElement('div');
        snowflakeDiv.classList.add('snowflake');
        snowflakeDiv.textContent = "•";
        rootDiv.appendChild(snowflakeDiv);
    }
}
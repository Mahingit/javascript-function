document.getElementById('add-border').addEventListener('click', function () {
    document.getElementById('friend-container').style.border = '2px solid red';
})

document.getElementById('add-background').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightGreen';
    }
})

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Obcaecati, enim!</p>
    `;
    container.appendChild(friendDiv);
})
let lists = document.getElementsByClassName("lists");
let onelists = document.querySelector(".one");
let twolists = document.querySelector(".two");

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        onelists.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        onelists.addEventListener("drop", function(e) {
            e.preventDefault();
            onelists.appendChild(selected);
            selected = null;
        });

        twolists.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        twolists.addEventListener("drop", function(e) {
            e.preventDefault();
            twolists.appendChild(selected);
            selected = null;
        });
    });
}

function addItem() {
    const newItemInput = document.getElementById("newItemInput");
    const newItemText = newItemInput.value.trim();
    
    if (newItemText !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('lists');
        newItem.draggable = true;
        newItem.textContent = newItemText;
        
        newItem.addEventListener('dragstart', function(e) {
            let selected = e.target;

            onelists.addEventListener('dragover', function(e) {
                e.preventDefault();
            });

            onelists.addEventListener('drop', function(e) {
                e.preventDefault();
                onelists.appendChild(selected);
                selected = null;
            });

            twolists.addEventListener('dragover', function(e) {
                e.preventDefault();
            });

            twolists.addEventListener('drop', function(e) {
                e.preventDefault();
                twolists.appendChild(selected);
                selected = null;
            });
        });
        
        onelists.appendChild(newItem);
        newItemInput.value = '';
    }
}
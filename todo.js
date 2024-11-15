var inputbox = document.getElementById("inputbox");
var listbox = document.getElementById("listbox");

function addtask() {
    if (inputbox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.className = "bg-gray-100 text-left flex pl-9 py-2 rounded-lg shadow-md"; // Tailwind CSS classes
        li.innerHTML = inputbox.value;
        listbox.appendChild(li);
        let img = document.createElement("img")
        img.src = "croos.png"
        img.className = "h-5 w-5 mt-1 ml-72 absolute shadow-xl cursor-pointer"
        li.appendChild(img)

    }
    inputbox.value = "";
    savedata()
}

        listbox.addEventListener("click" , function(e) {
            if (e.target.tagName === "LI") {
                e.target.classlist.toggle("checked")
                savedata()
            } else if (e.target.tagName === "IMG") {
                e.target.parentElement.remove()
                savedata()
            }
        } , false)


        function savedata() {
            localStorage.setItem("data", listbox.innerHTML); // Correctly call setItem as a function
        }
        
        function showtask() {
            listbox.innerHTML = localStorage.getItem("data") || ""; // Ensure there's no null value
        }
        
        showtask();
        
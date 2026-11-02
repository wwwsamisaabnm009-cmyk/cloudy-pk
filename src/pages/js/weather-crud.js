// =====================================
// CLOUDY.PK - JAVASCRIPT CRUD SYSTEM
// =====================================

// Get HTML elements
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const temperatureInput = document.getElementById("temperature");
const conditionInput = document.getElementById("condition");
const categoryInput = document.getElementById("category");

const recordsContainer = document.getElementById("recordsContainer");
const emptyMessage = document.getElementById("emptyMessage");

const searchInput = document.getElementById("searchInput");
const filterCondition = document.getElementById("filterCondition");
const submitButton = document.getElementById("submitButton");

// Local Storage Key
const STORAGE_KEY = "cloudyWeatherRecords";

// Array of Objects
let weatherRecords = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Edit Record ID
let editingId = null;


// =====================================
// LOCAL STORAGE FUNCTION
// =====================================

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weatherRecords));
}


// =====================================
// CREATE - ADD NEW RECORD
// =====================================

weatherForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const city = cityInput.value.trim();
    const temperature = Number(temperatureInput.value);
    const condition = conditionInput.value;
    const category = categoryInput.value;

    if (!city || !condition || !category || temperatureInput.value === "") {
        alert("Please fill all fields.");
        return;
    }

    if (!Number.isFinite(temperature) || temperature < -100 || temperature > 100) {
        alert("Please enter a valid temperature between -100 and 100.");
        return;
    }

    // some() checks for an existing duplicate record
    const duplicate = weatherRecords.some(function (record) {
        return record.city.toLowerCase() === city.toLowerCase()
            && record.condition === condition
            && record.id !== editingId;
    });

    if (duplicate) {
        alert("This city and weather condition already exist.");
        return;
    }

    if (editingId !== null) {

        // UPDATE RECORD
        const record = weatherRecords.find(function (item) {
            return item.id === editingId;
        });

        if (record) {
            record.city = city;
            record.temperature = temperature;
            record.condition = condition;
            record.category = category;
        }

        editingId = null;
        submitButton.textContent = "Save Record";

    } else {

        // CREATE RECORD
        const newRecord = {
            id: Date.now().toString(),
            city: city,
            temperature: temperature,
            condition: condition,
            category: category
        };

        weatherRecords.push(newRecord);
    }

    saveToLocalStorage();

    weatherForm.reset();

    displayRecords();

});


// =====================================
// READ - DISPLAY RECORDS
// =====================================

function displayRecords() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCondition = filterCondition.value;

    // filter() searches and filters records
    const filteredRecords = weatherRecords.filter(function (record) {

        const matchesSearch =
            record.city.toLowerCase().includes(searchText) ||
            record.condition.toLowerCase().includes(searchText) ||
            record.category.toLowerCase().includes(searchText);

        const matchesCondition =
            selectedCondition === "" ||
            record.condition === selectedCondition;

        return matchesSearch && matchesCondition;

    });

    // map() transforms records into HTML cards
    const cards = filteredRecords.map(function (record) {

        return `
            <div class="bg-blue-50 border border-blue-100 p-5 rounded-2xl shadow-sm">

                <h3 class="text-xl font-bold text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                    ${escapeHTML(record.city)}
                </h3>

                <p class="text-3xl font-bold mt-4">
                    ${record.temperature}°C
                </p>

                <p class="text-slate-600 mt-2">
                    Condition: ${escapeHTML(record.condition)}
                </p>

                <p class="text-slate-600 mt-1">
                    Category: ${escapeHTML(record.category)}
                </p>

                <div class="flex gap-3 mt-5">

                    <button
                        onclick="editRecord('${record.id}')"
                        class="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
                        <i class="fa-solid fa-pen"></i> Edit
                    </button>

                    <button
                        onclick="deleteRecord('${record.id}')"
                        class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                        <i class="fa-solid fa-trash"></i> Delete
                    </button>

                </div>

            </div>
        `;

    });

    recordsContainer.innerHTML = cards.join("");

    emptyMessage.style.display =
        filteredRecords.length === 0 ? "block" : "none";


    const allRecordsValid = weatherRecords.every(function (record) {
        return record.city.trim() !== "" &&
            Number.isFinite(record.temperature);
    });

    console.log("All records valid:", allRecordsValid);
    console.log("Total records:", weatherRecords.length);

}


// =====================================
// UPDATE - EDIT RECORD
// =====================================

function editRecord(id) {

    // find() locates the selected record
    const record = weatherRecords.find(function (item) {
        return item.id === id;
    });

    if (!record) {
        alert("Record not found.");
        return;
    }

    cityInput.value = record.city;
    temperatureInput.value = record.temperature;
    conditionInput.value = record.condition;
    categoryInput.value = record.category;

    editingId = id;

    submitButton.textContent = "Update Record";

    weatherForm.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================
// DELETE - REMOVE RECORD
// =====================================

function deleteRecord(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) {
        return;
    }

    weatherRecords = weatherRecords.filter(function (record) {
        return record.id !== id;
    });

    saveToLocalStorage();

    if (editingId === id) {
        editingId = null;
        weatherForm.reset();
        submitButton.textContent = "Save Record";
    }

    displayRecords();

}


// =====================================
// SEARCH FUNCTION
// =====================================

searchInput.addEventListener("input", function () {
    displayRecords();
});


// =====================================
// FILTER FUNCTION
// =====================================

filterCondition.addEventListener("change", function () {
    displayRecords();
});


// =====================================
// HTML SECURITY FUNCTION
// =====================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function (character) {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });

}



displayRecords();
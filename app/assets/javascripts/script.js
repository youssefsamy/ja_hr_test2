var currentTab = 0; // Current tab is set to be the first tab (0)

$(document).ready(function () {
    showTab(currentTab); // Display the current tab
    // $('#q3').multiSelect({
    //     buttonHTML: '<span class="multi-select-button q3button">'
    // });
})

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    console.log(x);
    if (x.length == 0) return;
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    //   // Exit the function if any field in the current tab is invalid:
    //   if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        setMultiSelectItem();
        document.getElementById("form").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function toggleQuestion(event, id) {
    var targetEle = document.getElementById(id);
    console.log(targetEle);
    if (event.value == 'No') {
        console.log('block');
        targetEle.style.display = "block";
    } else if (event.value == 'Yes') {
        console.log('none');
        targetEle.style.display = "none";
    }
}

function setMultiSelectItem() {
    //// Q3
    var selectedItems = [];

    var q3_1 = document.getElementById('q3_1'); if (q3_1.checked) selectedItems.push(q3_1.value);
    var q3_2 = document.getElementById('q3_2'); if (q3_2.checked) selectedItems.push(q3_2.value);
    var q3_3 = document.getElementById('q3_3'); if (q3_3.checked) selectedItems.push(q3_3.value);
    var q3_4 = document.getElementById('q3_4'); if (q3_4.checked) selectedItems.push(q3_4.value);
    var q3_5 = document.getElementById('q3_5'); if (q3_5.checked) selectedItems.push(q3_5.value);
    var q3_6 = document.getElementById('q3_6'); if (q3_6.checked) selectedItems.push(q3_6.value);
    var q3_7 = document.getElementById('q3_7'); if (q3_7.checked) selectedItems.push(q3_7.value);
    var q3_8 = document.getElementById('q3_8'); if (q3_8.checked) selectedItems.push(q3_8.value);

    var q3 = document.getElementById('q3');
    q3.value = selectedItems.join('; ');


    //// Q27
    var selectedItems = [];

    var q27_1 = document.getElementById('q27_1'); if (q27_1.checked) selectedItems.push(q27_1.value);
    var q27_2 = document.getElementById('q27_2'); if (q27_2.checked) selectedItems.push(q27_2.value);
    var q27_3 = document.getElementById('q27_3'); if (q27_3.checked) selectedItems.push(q27_3.value);
    var q27_4 = document.getElementById('q27_4'); if (q27_4.checked) selectedItems.push(q27_4.value);
    var q27_5 = document.getElementById('q27_5'); if (q27_5.checked) selectedItems.push(q27_5.value);
    var q27_6 = document.getElementById('q27_6'); if (q27_6.checked) selectedItems.push(q27_6.value);

    var q27 = document.getElementById('q27');
    q27.value = selectedItems.join('; ');


    //// Q34
    var selectedItems = [];

    var q34_1 = document.getElementById('q34_1'); if (q34_1.checked) selectedItems.push(q34_1.value);
    var q34_2 = document.getElementById('q34_2'); if (q34_2.checked) selectedItems.push(q34_2.value);
    var q34_3 = document.getElementById('q34_3'); if (q34_3.checked) selectedItems.push(q34_3.value);
    var q34_4 = document.getElementById('q34_4'); if (q34_4.checked) selectedItems.push(q34_4.value);
    var q34_5 = document.getElementById('q34_5'); if (q34_5.checked) selectedItems.push(q34_5.value);

    var q34 = document.getElementById('q34');
    q34.value = selectedItems.join('; ');


}


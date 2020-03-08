// This is the Budget Application Project called Budgety

// This is an example of the Module Pattern (IIFE + Closures)
// Can be used like: modulePattern.publicTest(4)
// Keeps all data and function details private

var modulePattern = (function() {
    
    var x = 23;

    var add = function(a) {
        return x+a;
    };

    return {
        publicTest: function(b) {
            return(add(b));
        }
    }

})();

// Budget Controller
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value= value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;

            // Create a new ID for the array element
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1] + 1;
            } else {
                ID = 0;
            }
 
            // Create a new item based on expense or income type
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            };

            // Add the new item to the related array
            data.allItems[type].push(newItem);

            // return the new item created
            return(newItem);
        },

        calculateBudget: function() {
        // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

        // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

        // calculate the percentage of income we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

        },

        getBudget: function() {
            return {
                budget: data.budget,
                incomeTotal: data.totals.inc,
                expenseTotal: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            console.log(data)
        }
    };

})();

// UI Controller
var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var newHtml, element;

            // create HTML string with placeholder text
            if (type === 'exp' ) {
                element = DOMStrings.expenseContainer;
                // create expense HTML string
                newHtml = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">21%</div><div class="item__delete"></div><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                // create income HTML string
                newHtml = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            };

            // Replace placeholder test with actual data
            newHtml = newHtml.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);

            // convert received list of selected fields into an array for easier loop processing
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListerners = function() {
        var DOM = UIController.getDOMStrings();


    // set up button even listener
        document.querySelector(DOM.inputBtn).addEventListener('click', controlAddItem);


        document.addEventListener('keypress', function(key) {
            if (event.keyCode === 13 || event.which === 13) {
                controlAddItem();
            }
        });
    };

    var updateBudget = function() {

    // calculate the budget
        budgetController.calculateBudget();
    // return the budget
        var budget = budgetController.getBudget();
    // display the budget on the UI
        console.log(budget);
    };

    var controlAddItem = function() {
        var input, newItem;

    // get input data
        input = UIController.getInput();

    // check the input fields for valid inputs
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

    // add item to budget control
            newItem = budgetController.addItem(input.type, input.description, input.value);

    // add the new item to the UI
            UIController.addListItem(newItem, input.type);

    // calculate and update the budget
            updateBudget();

        };

    // clear input fields
        UIController.clearFields();
        
    };

    return {
        init: function() {
            console.log('Application has started...');
            setupEventListerners();
        }
    };

})(budgetController, UIController);

controller.init();  // starts the whole application

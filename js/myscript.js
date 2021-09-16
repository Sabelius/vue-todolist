let root = new Vue({
    el: "#root",

    data: {

        shoppingList: ["pane", "patate", "pasta integrale", "parmigiano", "banane", "mele", "riso basmati"],

        newItem: "",
    },

    methods: {

        removeItem: function (indice){
            this.shoppingList.splice(indice, 1);
        },

        addNewItem: function () {
            if (this.newItem.trim().length > 0 && isNaN(this.newItem)){
                this.shoppingList.push(this.newItem);
                this.newItem = "";
            };
        },
    },
});

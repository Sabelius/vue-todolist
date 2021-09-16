let root = new Vue({
    el: "#root",

    data: {
        shoppingList : ["pane", "patate", "pasta integrale", "parmigiano", "banane", "mele", "riso basmati"],
    },

    
    
    methods : {

        removeItem: function(indice){
            this.shoppingList.splice(indice, 1);
        }
    },
});

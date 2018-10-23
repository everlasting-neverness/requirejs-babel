define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        let instanceOfKos = { color: "white", size: "max" };
        let instanceOfMart = { ...instanceOfKos, size: "min" };
        return {
            color: "blue",
            size: "large",
            instanceOfKos,
            instanceOfMart,
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);

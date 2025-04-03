var app = new Vue({
    el: "#mandarin",
    data: {
        products: [
            {
                id: 1,
                title: "Early Mandarin",
                short_text: "Sweet and Juicy Early Season Mandarin",
                image: 'img/mandarin1.png',
                desc: {
                    plant: {
                        p1: "Medium-sized tree with strong disease resistance.",
                        p2: "High yield and excellent adaptability to different climates.",
                        p3: "Produces fruit in 7-9 months after planting."
                    },
                    fruit: {
                        f1: "Bright orange peel with a delicate, sweet flavor.",
                        f2: "Rich in vitamin C and antioxidants.",
                        f3: "Average fruit size: 6-8 cm in diameter."
                    },
                    cycle: {c1: "Autumn", c2: "Winter"},
                    color: "Orange"
                }
            },
            {
                id: 2,
                title: "Late Mandarin",
                short_text: "Long-Lasting and Aromatic Late Season Mandarin",
                image: 'img/mandarin2.png',
                desc: {
                    plant: {
                        p1: "Strong tree resistant to common citrus diseases.",
                        p2: "Perfect for fresh consumption and storage.",
                        p3: "Fruits mature in 10-12 months after planting."
                    },
                    fruit: {
                        f1: "Deep orange peel with a balanced sweet-tart taste.",
                        f2: "Excellent for juicing and fresh eating.",
                        f3: "Average fruit size: 7-9 cm in diameter."
                    },
                    cycle: {c1: "Winter", c2: "Spring"},
                    color: "Deep Orange"
                }
            },
            {
                id: 3,
                title: "Seedless Mandarin",
                short_text: "Convenient and Sweet Seedless Mandarin",
                image: 'img/mandarin3.png',
                desc: {
                    plant: {
                        p1: "Compact tree suitable for high-density planting.",
                        p2: "Highly productive with excellent disease resistance.",
                        p3: "Fruits mature in 8-10 months."
                    },
                    fruit: {
                        f1: "Smooth, thin peel that is easy to remove.",
                        f2: "Completely seedless with a honey-like sweetness.",
                        f3: "Average fruit size: 5-7 cm in diameter."
                    },
                    cycle: {c1: "Autumn", c2: "Winter"},
                    color: "Bright Orange"
                }
            },
            {
                id: 4,
                title: "Mini Mandarin",
                short_text: "Small-Sized, Fragrant Mini Mandarin",
                image: 'img/mandarin4.png',
                desc: {
                    plant: {
                        p1: "Dwarf tree ideal for small gardens and containers.",
                        p2: "Produces multiple flushes per season.",
                        p3: "Fruits mature in 6-8 months."
                    },
                    fruit: {
                        f1: "Thin-skinned, small fruit with intense sweetness.",
                        f2: "Great for fresh consumption and garnishes.",
                        f3: "Average fruit size: 4-6 cm in diameter."
                    },
                    cycle: {c1: "Spring", c2: "Autumn"},
                    color: "Golden Orange"
                }
            },
            {
                id: 5,
                title: "Honey Mandarin",
                short_text: "Exceptionally Sweet and Fragrant Honey Mandarin",
                image: 'img/mandarin5.png',
                desc: {
                    plant: {
                        p1: "Medium-sized tree with high productivity.",
                        p2: "Adapted to various climates with strong disease resistance.",
                        p3: "Fruits mature in 7-9 months."
                    },
                    fruit: {
                        f1: "Thin, easy-to-peel skin with a rich honey-like sweetness.",
                        f2: "Excellent for snacking and desserts.",
                        f3: "Average fruit size: 6-8 cm in diameter."
                    },
                    cycle: {c1: "Autumn", c2: "Winter"},
                    color: "Golden Yellow"
                }
            }
        ],
        product: [],
        cart: [],
        contactFields: [{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible: 0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted: function () {
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        checkInCart: function () {
            console.log("Checking if product is in cart");
        },
        getCart: function () {
            console.log("Fetching cart data");
        }
    }
});

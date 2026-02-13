import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  message: string = '';

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
 
    this.cartService.addToCart(product);

    this.message = `"${product.name}" added to cart 🛒`;
    setTimeout(() => {
      this.message = '';
    }, 800);
  }

  menuSections = [
    {
      category: "🍫 Death By Chocolate",
      items: [
        {
          name: "Classic DBC",
          price: 220,
          image: "data:image/jpeg;base64,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"
        },
        {
          name: "Choco Lava Bliss",
          price: 240,
          image: "https://thumbs.dreamstime.com/b/chocolate-lava-cake-melting-vanilla-bliss-ai-generated-369623519.jpg"
        },
        {
          name: "Triple Choco Crunch",
          price: 260,
          image: "data:image/jpeg;base64,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"
        },
        {
          name: "Dark Chocolate Heaven",
          price: 280,
          image: "https://thecakerybakery.pk/wp-content/uploads/2025/08/11.jpg"
        }
      ]
    },

    {
      category: "🍓 Sugar Free Scoops",
      items: [
        {
          name: "Sugar Free Vanilla",
          price: 180,
          image: "https://thebigmansworld.com/wp-content/uploads/2024/04/sugar-free-ice-cream-recipe.jpg"
        },
        {
          name: "Sugar Free Strawberry",
          price: 190,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2Kq_LUDwlolzR9HlISIjPZQOkrKlrZUZ_g&s"
        },
        {
          name: "Sugar Free Chocolate",
          price: 200,
          image: "https://bakewithshivesh.com/wp-content/uploads/2024/05/IMG_1581-1.jpg"
        },
        {
          name: "Sugar Free Fudgy Fudge",
          price: 190,
          image: "https://emilylaurae.com/wp-content/uploads/2022/08/chocolate-brownie-ice-cream-11.jpg"
        }
      ]
    },

    {
      category: "🍪 Brownies",
      items: [
        {
          name: "Walnut Brownie",
          price: 150,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5cIYIZ4x3gHMt09gNQUxGf6NdhGlJBe_Vg&s"
        },
        {
          name: "Choco Fudge Brownie",
          price: 170,
          image: "https://i.ytimg.com/vi/qdxqip0Bgt8/sddefault.jpg"
        },
        {
          name: "Brownie Blast",
          price: 190,
          image: "https://thumbs.dreamstime.com/b/generated-image-395673651.jpg"
        },
        {
          name: "Caramel Brownie",
          price: 180,
          image: "https://thefoodcharlatan.com/wp-content/uploads/2020/03/Salted-Caramel-Brownies-12-e1585287189194.jpg"
        }
      ]
    },

    {
      category: "🥤 Bliss In A Bottle (Thickshakes)",
      items: [
        {
          name: "Oreo Thickshake",
          price: 220,
          image: "https://hotelbeachgarden.com/wp-content/uploads/2024/08/Oreo-Milkshake-2-3.jpg"
        },
        {
          name: "KitKat Shake",
          price: 230,
          image: "https://flavourscafe.com/wp-content/uploads/2023/10/Kitkat-Shake_Flavours-Cafe.jpg"
        },
        {
          name: "Strawberry Shake",
          price: 200,
          image: "https://www.butteredsideupblog.com/wp-content/uploads/2023/06/How-to-Make-a-Strawberry-Milkshake-Without-Ice-Cream-17-scaled.jpg"
        },
        {
          name: "Chocolate Overload",
          price: 240,
          image: "https://i.pinimg.com/736x/ce/b5/35/ceb53556c33d9a2b81c19a79e5dd7c11.jpg"
        }
      ]
    },

    {
      category: "🎂 Ice Cream Cakes",
      items: [
        {
          name: "Chocolate Ice Cream Cake",
          price: 750,
          image: "https://www.oliveandmango.com/images/uploads/2018_08_15_chocolate_oreo_cookie_ice_cream_cake_1.jpg"
        },
        {
          name: "Strawberry Delight Cake",
          price: 720,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjg839edRIgu6Xbl54uqg3RjTEx2RPgpqPg&s"
        },
        {
          name: "Oreo Ice Cream Cake",
          price: 800,
          image: "https://thefirstyearblog.com/wp-content/uploads/2023/05/Oreo-Ice-Cream-Cake-Square.png"
        },
        {
          name: "Butterscotch Cream Cake",
          price: 700,
          image: "https://5.imimg.com/data5/RQ/IL/GLADMIN-47469855/butterscotch-cake-500x500.png"
        }
      ]
    },

    {
      category: "🍬 Ice Cream Candy",
      items: [
        {
          name: "Choco Candy Pop",
          price: 120,
          image: "https://www.easyhomemeals.com/wp-content/uploads/003copy-1-e1751983797793.jpg"
        },
        {
          name: "Mango Candy Stick",
          price: 110,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST65P-W2BwRd_DFUWChhkmKVDIoa7wDL_AYQ&s"
        },
        {
          name: "Strawberry Candy Bar",
          price: 130,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe90RLyAQaiUYs7GyXRRdwMkHpnI400ANACg&s"
        },
        {
          name: "Choco Almond Candy",
          price: 140,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaT1DyiP89u87NOhDXdE3P7yFkF9aqLo-Ng&s"
        }
      ]
    }
  ];
}

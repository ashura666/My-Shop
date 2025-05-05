let container = document.getElementById("ctn");
        fetch("https://dummyjson.com/products").then((e)=>{
            return e.json();
        }).then((e)=>{
            console.log(e.products);
            displayData(e.products);
        }).catch((err)=>{
            alert(err.message);
        })


// Function to display product data
function displayData(productData){
            input=""
            productData.map((e)=>{
                console.log(e.images);
                input +=`
                <div class="flex items-center justify-center h-auto rounded-lg  productCard">
  <div class="w-80  rounded-lg shadow-md p-4">
  <!-- Discount Badge -->
  <div class="relative">
    <span
      class="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
      -${e.discountPercentage}%
    </span>
    <!-- Wishlist Icon -->
    <button
      class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    </button>
    <!-- Product Image -->
  <div>
      <Image
      src=${e.images[0]}
      alt=${e.title}
      class="object-contain w-full h-[270px] fill"
      
    />
  </div>
  
   
  </div>

  <!-- Product Details -->
  <div class="mt-4">
    <h3 class="text-gray-800 font-medium text-base">
      ${e.title}
    </h3>806.33
    <p class="uppercase text-green-600 text-xs font-medium ">
      ${e.category}
    </p>
    <!-- Ratings -->
    <i class="fa-solid fa-star"></i>
      ${e.rating}
    </div>
    <!-- Pricing -->
    <div class="flex items-end justify-between">
      <div class="flex items-baseline space-x-2 mt-2">
      <span class="text-blue-600 text-xl font-semibold">$${Math.floor(e.price-(e.price*e.discountPercentage/100))}</span>
      <span class="text-gray-400 text-sm line-through">${e.price}</span>
    </div>
     <button
      class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
     <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
    </button>
    </div>
  </div>
</div>

</div>
                `
            })
            container.innerHTML = input;
}
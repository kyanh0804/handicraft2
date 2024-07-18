const fetchDetailProduct = () => {

  const params = new URLSearchParams(window.location.search);
  const filterById = +params.get('productId');

  const listProducts = window.listData;

  const matchItem = listProducts.find(o => o.id === filterById);




  document.querySelector('#product-detail').innerHTML = `
  <!-- card right -->
    
    <div class="col-md-4">
      <img src="${matchItem.image_urls}"  alt="${matchItem.id} style="width=500px;heigh=500px">
    
    </div>
  </div>
<!-- card right -->
<div class="product-content" >
  <h2 class="product-title" >${matchItem.name}</h2>
  <div class="product-rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    <span>4.7(21)</span>
  </div>

  <div class="product-price">
    <p class="last-price fw-bold" >Old Price: <span>${matchItem.old_price} $</span></p>
    <p class="new-price fw-bolder" i>New Price: <span class="fw-bolder">${matchItem.sale_price} $</span></p>
  </div>

  <div class="product-detail">
    <h2>about this item: </h2>
    <p>${matchItem.description}</p>
    <ul>
     
      <li>Available: <span>in stock</span></li>
      <li>Category: <span>${matchItem.category}</span></li>
      <li>Shipping Area: <span>All over the world</span></li>
      <li>Shipping Fee: <span>Free</span></li>
    </ul>
    <a href="#" class="btn btn-primary mt-2">
    <i class="fa-solid fa-bag-shopping m-lg-1"></i>Add to Cart <a/>
  </div>

    `
  const listproductsame = listData.filter((o) => {
    return o.category === matchItem.category
  })
  console.log(listproductsame)
  let str4 = '';
  for (let i = 0; i < listproductsame.length - 4; i += 5) {
    let str1 = '';
    let str2 = '';
    let str3 = '';


    for (let j = i; j < i + 5; j++) {

      str3 += `
                <div class="card d-none d-md-block card-hover "
                  onClick="parent.location='homepage.html'">
                  <img
                    src="${listproductsame[j].image_urls}"
                    class="card-img-top" alt="...">
                  <div class="card-body text-center mt-4">
                    <h5 class="card-title card-content text-capitalize">${listproductsame[j].name}</h5>
                    <p class="card-price card-content fs-4">${listproductsame[j].old_price}$</p>
                    <a href="/productdetail.html?productId=${listproductsame[j].id}" class="add-card-btn btn btn-primary "> 
                      <i class="fa-solid fa-bag-shopping m-lg-1"></i>
                      Add to card
                    </a>
                  </div>
                </div>
                
                `;
    }
    str2 = '<div class="cards-wrapper m-lg-5 gap-4">' + str3 + '</div>';
    str1 += str2 + '</div>';
    str4 = str1 + str4;

  }
  document.querySelector('#related').innerHTML = str4;

};

fetchDetailProduct();


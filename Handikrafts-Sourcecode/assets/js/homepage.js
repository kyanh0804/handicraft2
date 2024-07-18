const renderListProduct = () => {
  const listData = window.listData;
  const listDataSales = listData.filter((o) => {
    return o.old_price !== o.sale_price
  })
  console.log(listDataSales);

  let str4 = '';
  for (let i = 0; i < listData.length - 4; i += 5) {
    let str1 = '';
    let str2 = '';
    let str3 = '';


    for (let j = i; j < i + 5; j++) {

      str3 += `
                <div class="card d-none d-md-block card-hover col-3"
                  onClick="parent.location='homepage.html'">
                  <img
                    src="${listData[j].image_urls}"
                    class="card-img-top" alt="...">
                  <div class="card-body text-center mt-4">
                    <h5 class="card-title card-content text-capitalize">${listData[j].name}</h5>
                    <p class="card-price card-content fs-4">${listData[j].old_price}$</p>
                    <a href="/productdetail.html?productId=${listData[j].id}" class="add-card-btn btn btn-primary "> 
                      <i class="fa-solid fa-bag-shopping m-lg-1"></i>
                      Add to card
                    </a>
                  </div>
                </div>
                `;
    }


    str1 = i === 0 ? '<div class="carousel-item active">' : '<div class="carousel-item">';
    str2 = '<div class="cards-wrapper">' + str3 + '</div>';
    str1 += str2 + '</div>';
    str4 = str1 + str4;

  }
  let str5 = '';
  for (let i = 0; i < listDataSales.length - 3; i += 4) {

    let str7 = '';
    let str8 = '';
    let str9 = '';

    for (let j = i; j < i + 4; j++) {

      str9 += `<div class="card d-none d-md-block card-hover mt-4"
      onClick="parent.location='homepage.html'">
      <img
        src="${listDataSales[j].image_urls}"
        class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title m-0 text-capitalize">${listDataSales[j].name} </h5>
        <p
          class="m-0 ">
          <span
            class="text-decoration-line-through text-muted">${listDataSales[j].old_price} $</span>
          <span
            style="color:  rgb(255, 136, 0); margin:0 8px;">
            ${((1 - (listDataSales[j].sale_price / listDataSales[j].old_price)) * 100).toFixed(2)}%</span>
        </p>
        <p class="m-0 card-price fs-4">${listDataSales[j].sale_price} $</p>
       <div class="add-card">
       <a href="/productdetail.html?productId=${listData[j].id}" class="add-card-btn btn btn-primary m-0"
       style="display: block;">
       <i class="fa-solid fa-bag-shopping m-lg-1"></i>
       Add to card
     </a>
       </div>
      </div>
    </div>`

    }
    str7 = i === 0 ? '<div class="carousel-item active">' : '<div class="carousel-item">';
    str8 = '<div class="cards-wrapper">' + str9 + '</div>';
    str7 += str8 + '</div>';
    str5 = str7 + str5;

  }
  document.querySelector('#listProductWrapper-s2').innerHTML = str4;
  document.querySelector('#listProductWrapper-s4').innerHTML = str4;
  document.querySelector('#listProductWrapper-s5').innerHTML = str5;

}
renderListProduct();
//////

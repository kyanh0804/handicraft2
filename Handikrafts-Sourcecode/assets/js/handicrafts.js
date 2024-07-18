const params = new URLSearchParams(window.location.search);
const pickedCate = params.get('data')

const fakeListData = window.listData
//product tableWares
const renderListProduct = () => {
  const listProductWrapper = document.querySelector('#listProductWrapper');
  let str = '';
  const checkedCheckboxes = [];

  listItemFilter.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCheckboxes.push(checkbox.getAttribute('id'));
    }
  });

  fakeListData.forEach((o) => {
    if (checkedCheckboxes.length === 0 || checkedCheckboxes.includes(o.category)) {
      str += `<div class="col-md-3">
          <div class="card " >
              <img src="${o.image_urls}" class="card-img-top"style="width: 220px; height: 220px"
                  alt="${o.name}">
              <div class="card-body">
                  <h6 class="card-title card-content text-capitalize fw-medium m-0">${o.name}</h6>
                  <p class="card-text card-content fs-4 m-0">$${o.old_price}</p>
                  <a href="/productdetail.html?productId=${o.id}" class="btn btn-primary mt-2">
                  <i class="fa-solid fa-bag-shopping m-lg-1"></i>Add to Cart <a/>
              </div>
          </div>
      </div>`;
    }
  });

  listProductWrapper.innerHTML = str || '<h1>No data found</h1>';

  const params = new URLSearchParams();
  checkedCheckboxes.forEach((category) => {
    params.append('category', category);
  });
  window.history.replaceState({}, '', window.location.pathname + '?' + params.toString());
}

const filterWrapper = document.querySelector('#filterWrapper');
const listItemFilter = filterWrapper.querySelectorAll('.form-check input');

listItemFilter.forEach((checkbox) => {
  checkbox.addEventListener('change', renderListProduct);
});

renderListProduct();



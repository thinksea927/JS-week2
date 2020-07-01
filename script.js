window.onload = function(){
    
    const uuid = '3802fa0c-830d-47a0-a19f-9616c3fcd8ae';
    const apiPath = 'https://course-ec-api.hexschool.io/';
    
    
    function getData(){
        const url = `${apiPath}api/${uuid}/ec/products`;
        
        axios.get(url)
            .then((res) => {
                const productData = res.data.data;
                // console.log(res);
                render(productData);
            })
            .catch((err) => console.log('取值失敗'))

    }

    function render(productData){

        let productList = document.querySelector('#productList');
        let str = '';

        productData.forEach((item, i) => {
            str += `
            <div class="card shadow m-3"><img src="${item.imageUrl[0]}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.content}</p>
              <a class="btn btn-primary" href="">Order now</a>
            </div></div>`
        });
        // console.log(str);
        productList.innerHTML = str;   


    }
    
    getData();

    
    
    
    
    
    
    
    
    
}
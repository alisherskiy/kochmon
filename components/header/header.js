class Header {
  handlerOpenShopppingPage(){
    shoppingPage.render();
  }

    render (counter) {
      const html = `
        <div class="header__container">
          <nav class="nav">
          <a href="./index.html"> <img class="img" width="180" src="./images/img/kochmon.png" alt="Kochmon"></a>
            <div class="nav__basket" onclick="headerPage.handlerOpenShopppingPage();" >
            <h3>
             🛒
            </h3>
            <div class="basket-radius" >
              <span >${counter}</span>
            </div>
            </div>
          </nav>
        </div>
      `
      ROOT_HEADER.innerHTML = html
    }
}
  
  const headerPage = new Header();
  
  const productsStore = localStorageUtil.getProducts()
  headerPage.render(productsStore.length);
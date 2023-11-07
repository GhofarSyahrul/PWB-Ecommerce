document.addEventListener("DOMContentLoaded", function () {
    const listBarang = document.getElementById("listBarang");
    const keywordInput = document.getElementById("keyword");
    let totalBarangDiKeranjang = 0;

    let items = [
        [
            "001",
            "Keyboard Logitek",
            "60.000",
            "Keyboard yang mantap untuk kantoran",
            "/src/logitek.jpg",
        ],
        [
            "002",
            "Keyboard MSI",
            "300.000",
            "Keyboard gaming MSI mekanik",
            "/src/msi.jpg",
        ],
        [
            "003",
            "Mouse Genius",
            "50.000",
            "Mouse Genius biar lebih pinter",
            "/src/genius.jpeg",
        ],
        [
            "004",
            "Mouse Jerry",
            "30.000",
            "Mouse yang disukai kucing",
            "/src/jerry.jpg",
        ],
        [
            "005",
            "Monitor lenovo",
            "99.999",
            "Monitor gacor",
            "/src/lenovo_monitor.png",
        ],
        [
            "005",
            "Monitor Samsung",
            "99.000",
            "Monitor lebih gacor untuk nonton",
            "/src/samsung_monitor.avif",
        ],
        [
            "006",
            "HyperX Cloud wireless",
            "16.490.000",
            "Gacor untuk dengarkan suara imut dia",
            "/src/hyperX_headset.avif",
        ],
        [
            "007",
            "G733 LIGHTSPEED wireless",
            "1.649.000",
            "cocok untuk mabar bersama doi",
            "/src/lucitik_headset.png",
        ],
        [
            "008",
            "Najam",
            "Free",
            "bagus untuk jadi penjaga rumah",
            "/src/najem.png",
        ],
    ];

    function renderBarang(item) {
        const card = document.createElement("div");
        card.classList.add("col-4", "mt-3",);
        card.innerHTML = `
        <div class="row">
          <div class="col-4 mt-2">
            <div class="card" style="width: 20rem; height: 25rem;">
              <img src="${item[4]}" class="card-img-top" alt="..." style="width: 18rem; height: 13rem; padding-left: 20px">
              <div class="card-body">
                <h5 class="card-title">${item[1]}</h5>
                <p class="card-text">${item[3]}</p>
                <p class="card-text">Rp. ${item[2]}</p>
                <button class="btn btn-primary tmbh-ke-keranjang" data-id="${item[0]}">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      `;
        listBarang.appendChild(card);
    }

    // cari barang
    function Cari(keyword) {
        listBarang.innerHTML = "";
        items.forEach((item) => {
            if (item[1].toLowerCase().includes(keyword.toLowerCase())) {
                renderBarang(item);
            }
        });
        const btnTambahKeKeranjang =
            document.querySelectorAll(".tmbh-ke-keranjang");
        btnTambahKeKeranjang.forEach((button) => {
            button.addEventListener("click", (event) => {
                const itemId = event.target.getAttribute("data-id");
                tambahKeranjang(itemId);
            });
        });
    }
    keywordInput.addEventListener("input", function (){
        const keyword = keywordInput.value;
        Cari(keyword);});
    
    Cari("");
});
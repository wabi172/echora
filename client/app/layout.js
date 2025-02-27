import React from 'react';
import "../styles/globals.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   

      <div>
        {/* fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
          integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
       <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </div>

      <body>
      <nav className="g-header">
  <div className="container-fluid">
    <div className="g-nav-top row">
      <div className="g-logo col-lg-4 col-6 order-1 ps-0">
        <img className="g-pc-logo" src="./images/logo.svg" alt />
        <img className="g-mb-logo" src="./images/logo-mb.svg" alt />
      </div>
      <form action className="col-lg-4 col-12 order-lg-2 order-3 d-flex align-items-center  p-0 mt-lg-0 mt-3">
        <input type="search" className="form-control focus-ring g-search-field" placeholder="搜尋商品關鍵字" />
      </form>
      <div className="g-right-menu d-flex gap-4 col-lg-4 col-6 order-2 d-flex justify-content-end align-items-center p-0">
        <a href><img src="./images/heart.svg" alt /></a>
        <a href><img src="./images/account.svg" alt /></a>
        <a href><img src="./images/cart.svg" alt /></a>
        <a href className="hamburger"><img src="./images/hamburger.svg" alt /></a>
      </div>
    </div>
    <div className="g-nav-bottom">
      <ul className="d-flex justify-content-center gap-5 list-unstyled">
        <li>
          <a href>
            <div className="d-flex">
              <h6 className="h7">ELECTRIC GUITARS</h6>
              <p className="px-1">/</p>
              <p style={{fontWeight: 500}}>電吉他商品</p>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div className="d-flex">
              <h6 className="h7">MUSIC FESTIVALS</h6>
              <p className="px-1">/</p>
              <p style={{fontWeight: 500}}>音樂活動</p>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div className="d-flex">
              <h6 className="h7">RENTAL SERVICE</h6>
              <p className="px-1">/</p>
              <p style={{fontWeight: 500}}>商品租借</p>
            </div>
          </a>
        </li>
        <li>
          <a href>
            <div className="d-flex">
              <h6 className="h7">SPECIAL EVENTS</h6>
              <p className="px-1">/</p>
              <p style={{fontWeight: 500}}>特別優惠</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    {/* <form action="" class="col-5">
          <input type="search" class="form-control focus-ring g-search-field" placeholder="搜尋商品關鍵字">
      </form> */}
  </div>
</nav>
        {children}
        <footer>
          <div>
            <ul className="nav justify-content-center d-flex row">
              <li className="col-xxl-4 col-lg-12 col-md-12 col-sm-12">
                NEWSLETTER
                <div className="email">
                  <div className="group">
                    <input placeholder="請輸入email訂閱電子報" type="text" />
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                  <hr />
                </div>
                <p>
                  點擊&quot;訂閱&quot;即表示您確認您已閱讀和理解
                  <a href="#">隱私權政策</a>
                  ，並且同
                  <br />
                  意接收時事通訊及其他如政策中所述的行銷資訊。
                </p>
              </li>
              <li className="col-xxl-1 col-lg-5 col-md-5 col-sm-5">
                INFO
                <div>常見問題</div>
                <div>購物說明</div>
                <div>物流配送</div>
                <div>退貨流程</div>
              </li>
              <li className="col-xxl-1 col-lg-5 col-md-5 col-sm-5">
                COMPANY
                <div>關於我們</div>
                <div>品牌合作</div>
                <div>最新消息</div>
                <div>服務條款</div>
              </li>
              <li className="col-xxl-2 col-lg-5 col-md-5 col-sm-5">
                GET IN TOUCH
                <div>service@echora.com</div>
                <div>聯絡客戶服務</div>
                <div>165反詐騙諮詢專線</div>
              </li>
              <li className="col-xxl-2 col-lg-5 col-md-5 col-sm-5">
                ACCOUNT
                <div>我的帳戶</div>
                <div>訂單狀態</div>
                <div>退貨與換貨</div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="mise">
            <p className>Copyright © 2025 Echora Company</p>
            <button className="btn btn-outline-dark ">
              <i className="fa-solid fa-location-dot" /> 查找專門店
            </button>
          </div>
        </footer>
      </body>
    </html>
  )
}

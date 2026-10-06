<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INDUMA | Premium Hing</title>
    <meta
      name="description"
      content="INDUMA brings premium Indian hing and hing-based food products to modern kitchens with authenticity, warmth and trust."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="#top" class="brand-mark" aria-label="INDUMA home">
          <img src="/images/induma-logo.svg" alt="INDUMA logo" />
        </a>

        <nav class="main-nav" aria-label="Main menu">
          <a href="#top">Home</a>
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#recipes">Recipes</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQs</a>
        </nav>

        <button class="cart-toggle" id="cartToggle" aria-label="Open cart">
          Cart <span id="cartCount">0</span>
        </button>
      </div>
    </header>

    <main id="top">
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">PREMIUM HING FROM INDIA</p>
            <h1>PURE HING. PURE INDIAN.</h1>
            <p class="subhead">
              An age-old Indian ingredient, thoughtfully brought to the modern kitchen.
            </p>
            <div class="cta-row">
              <a href="#shop" class="btn btn-primary">SHOP NOW</a>
              <a href="#story" class="btn btn-secondary">OUR STORY</a>
            </div>
            <div class="hero-highlights">
              <div>
                <strong>Single-origin</strong>
                <span>Traditional sourcing</span>
              </div>
              <div>
                <strong>Pure & authentic</strong>
                <span>Slow crafted</span>
              </div>
              <div>
                <strong>Modern kitchen</strong>
                <span>Easy daily use</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-card frame-one">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Premium asafoetida ingredients"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="feature-strip">
        <div class="container feature-grid">
          <div>
            <span>Traditional</span>
            <strong>Indian purity</strong>
          </div>
          <div>
            <span>Modern ritual</span>
            <strong>Everyday flavour</strong>
          </div>
          <div>
            <span>Handpicked</span>
            <strong>Premium ingredients</strong>
          </div>
        </div>
      </section>

      <section class="story-section" id="story">
        <div class="container split-section">
          <div class="story-copy">
            <p class="eyebrow accent">ABOUT INDUMA</p>
            <h2>Rooted in Tradition. Made for Today.</h2>
            <p>
              INDUMA was born from the timeless Indian relationship with hing — a spice of depth,
              aroma and memory. We bring this age-old ingredient into a premium, modern form that fits
              the way families cook today.
            </p>
            <p>
              Inspired by heritage kitchens and the warmth of home-cooked food, INDUMA celebrates the
              earthy richness of hing while delivering purity, consistency and elegance in every jar.
            </p>
          </div>
          <div class="story-visual">
            <div class="story-photo">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="Indian kitchen lifestyle"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="why-section">
        <div class="container">
          <p class="eyebrow center">WHY INDUMA</p>
          <div class="why-grid">
            <article class="why-card">
              <span>PURE</span>
              <p>Uncompromised purity and integrity in every batch.</p>
            </article>
            <article class="why-card">
              <span>AUTHENTIC</span>
              <p>Inspired by traditional Indian culinary wisdom.</p>
            </article>
            <article class="why-card">
              <span>PREMIUM</span>
              <p>Refined quality, elevated packaging and rich aroma.</p>
            </article>
            <article class="why-card">
              <span>MODERN</span>
              <p>Designed for busy kitchens, real routines and everyday use.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="shop-section" id="shop">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow accent">PRODUCT COLLECTION</p>
              <h2>Crafted for the everyday Indian kitchen</h2>
            </div>
          </div>
          <div id="productGrid" class="product-grid"></div>
        </div>
      </section>

      <section class="recipe-section" id="recipes">
        <div class="container">
          <p class="eyebrow accent">RECIPES</p>
          <h2>A Little Hing Goes a Long Way</h2>
          <div class="recipe-grid">
            <div class="recipe-item"><span>Dal</span></div>
            <div class="recipe-item"><span>Kadhi</span></div>
            <div class="recipe-item"><span>Chole</span></div>
            <div class="recipe-item"><span>Rajma</span></div>
            <div class="recipe-item"><span>Raita</span></div>
            <div class="recipe-item"><span>Sabzi</span></div>
            <div class="recipe-item"><span>Chaat</span></div>
          </div>
        </div>
      </section>

      <section class="checkout-section">
        <div class="container checkout-grid">
          <div class="panel order-panel">
            <div class="panel-head">
              <p class="eyebrow accent">CHECKOUT</p>
              <h3>Complete your order</h3>
            </div>

            <form id="orderForm" class="checkout-form">
              <div class="form-grid two-col">
                <label>
                  <span>Full Name</span>
                  <input type="text" name="fullName" required />
                </label>
                <label>
                  <span>Mobile Number</span>
                  <input type="tel" name="mobile" required />
                </label>
                <label>
                  <span>Email Address</span>
                  <input type="email" name="email" required />
                </label>
                <label>
                  <span>House/Flat Number</span>
                  <input type="text" name="houseNumber" required />
                </label>
                <label>
                  <span>Street/Area</span>
                  <input type="text" name="streetArea" required />
                </label>
                <label>
                  <span>City</span>
                  <input type="text" name="city" required />
                </label>
                <label>
                  <span>State</span>
                  <input type="text" name="state" required />
                </label>
                <label>
                  <span>PIN Code</span>
                  <input type="text" name="pinCode" required />
                </label>
              </div>

              <label>
                <span>Delivery Address</span>
                <textarea name="deliveryAddress" rows="3" required></textarea>
              </label>

              <label>
                <span>Order Notes</span>
                <textarea name="orderNotes" rows="3" placeholder="Any delivery instructions or preferences"></textarea>
              </label>

              <div class="payment-options">
                <p>Payment Options</p>
                <div class="payment-grid">
                  <label><input type="radio" name="paymentMethod" value="UPI" checked /> UPI</label>
                  <label><input type="radio" name="paymentMethod" value="Credit/Debit Card" /> Credit/Debit Card</label>
                  <label><input type="radio" name="paymentMethod" value="Net Banking" /> Net Banking</label>
                  <label><input type="radio" name="paymentMethod" value="Cash on Delivery" /> Cash on Delivery</label>
                  <label><input type="radio" name="paymentMethod" value="Manual/Offline Payment" /> Manual/Offline Payment</label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block">PLACE ORDER</button>
            </form>
          </div>

          <aside class="panel summary-panel">
            <div class="panel-head">
              <p class="eyebrow accent">ORDER SUMMARY</p>
              <h3>Your basket</h3>
            </div>
            <div id="checkoutItems" class="checkout-items"></div>
            <div class="totals-box">
              <div class="row"><span>Subtotal</span><strong id="checkoutSubtotal">₹0</strong></div>
              <div class="row"><span>Shipping</span><strong id="checkoutShipping">₹0</strong></div>
              <div class="row total"><span>Total</span><strong id="checkoutTotal">₹0</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section class="dashboard-section" id="dashboard">
        <div class="container">
          <p class="eyebrow accent">ORDER DASHBOARD</p>
          <h2>Manage orders and enquiries</h2>
          <div class="dashboard-grid">
            <div class="panel">
              <h3>Recent Orders</h3>
              <div id="ordersList" class="mini-list"></div>
            </div>
            <div class="panel">
              <h3>Recent Enquiries</h3>
              <div id="enquiriesList" class="mini-list"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="container contact-grid">
          <div>
            <p class="eyebrow accent">CONTACT US</p>
            <h2>We’d love to hear from you.</h2>
            <p>Questions about products, gifting, bulk orders or recipes? Reach out and we’ll be happy to help.</p>
            <div class="contact-details">
              <p>Email: <a href="mailto:ecog.india1@gmail.com">ecog.india1@gmail.com</a></p>
              <a class="whatsapp-btn" href="https://wa.me/919999999999?text=Hi%20INDUMA%2C%20I%20want%20to%20know%20more%20about%20your%20products." target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>

          <form id="contactForm" class="contact-form panel">
            <label>
              <span>Name</span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span>Mobile Number</span>
              <input type="tel" name="mobile" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit" class="btn btn-primary btn-block">SEND ENQUIRY</button>
          </form>
        </div>
      </section>

      <section class="faq-section" id="faq">
        <div class="container">
          <p class="eyebrow accent">FAQs</p>
          <div class="faq-grid">
            <article>
              <h4>How do I use hing?</h4>
              <p>Use a small pinch in tadka, dals, curries and chaat for depth and aroma.</p>
            </article>
            <article>
              <h4>Is your hing pure?</h4>
              <p>Yes. INDUMA focuses on authentic, premium and clean products made for modern use.</p>
            </article>
            <article>
              <h4>Do you offer shipping?</h4>
              <p>Yes, with nationwide shipping and transparent delivery information.</p>
            </article>
            <article>
              <h4>Can I order in bulk?</h4>
              <p>Yes. Please contact us through the enquiry form for gifting and wholesale inquiries.</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <aside id="cartDrawer" class="cart-drawer" aria-hidden="true">
      <div class="drawer-header">
        <h3>Your Cart</h3>
        <button id="closeCart" class="icon-button" aria-label="Close cart">×</button>
      </div>
      <div id="cartItems" class="cart-items"></div>
      <div class="drawer-summary">
        <div class="row"><span>Subtotal</span><strong id="cartSubtotal">₹0</strong></div>
        <div class="row"><span>Shipping</span><strong id="cartShipping">₹0</strong></div>
        <div class="row total"><span>Total</span><strong id="cartTotal">₹0</strong></div>
      </div>
      <button id="checkoutCartBtn" class="btn btn-primary btn-block">PROCEED TO CHECKOUT</button>
    </aside>

    <div id="orderSuccessModal" class="modal hidden" aria-live="polite">
      <div class="modal-card">
        <h3>Thank You for Choosing INDUMA.</h3>
        <p>Your order has been received successfully.</p>
        <p><strong>Order Number:</strong> <span id="successOrderNumber">-</span></p>
        <p><strong>Total Amount:</strong> <span id="successTotal">₹0</span></p>
        <button class="btn btn-primary" id="closeSuccess">Continue Shopping</button>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="/images/induma-logo.svg" alt="INDUMA brand logo" class="footer-logo" />
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="mailto:ecog.india1@gmail.com">ecog.india1@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </footer>

    <script src="/app.js"></script>
  </body>
</html>

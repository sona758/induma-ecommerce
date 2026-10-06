const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
const BUSINESS_EMAIL = 'ecog.india1@gmail.com';

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(ORDERS_FILE)) fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(ENQUIRIES_FILE)) fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '2mb' }));

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (error) {
    return [];
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function generateOrderNumber() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `INDUMA-${stamp}-${random}`;
}

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function sendBusinessEmail(subject, htmlBody) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER || 'ecog.india1@gmail.com',
      pass: process.env.SMTP_PASS || ''
    }
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || 'INDUMA <ecog.india1@gmail.com>',
    to: BUSINESS_EMAIL,
    subject,
    html: htmlBody
  };

  if (!process.env.SMTP_PASS || !process.env.SMTP_USER) {
    console.log('Business email notification prepared for:', BUSINESS_EMAIL);
    console.log(subject);
    console.log(htmlBody);
    return Promise.resolve({ ok: true, fallback: true });
  }

  return transporter.sendMail(mailOptions);
}

function sendCustomerEmail(customerEmail, subject, htmlBody) {
  if (!customerEmail) return Promise.resolve({ ok: true, skipped: true });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER || 'ecog.india1@gmail.com',
      pass: process.env.SMTP_PASS || ''
    }
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || 'INDUMA <ecog.india1@gmail.com>',
    to: customerEmail,
    subject,
    html: htmlBody
  };

  if (!process.env.SMTP_PASS || !process.env.SMTP_USER) {
    console.log('Customer confirmation email prepared for:', customerEmail);
    console.log(subject);
    console.log(htmlBody);
    return Promise.resolve({ ok: true, fallback: true });
  }

  return transporter.sendMail(mailOptions);
}

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 'pure-hing',
      name: 'Pure Hing',
      description: 'Single-origin premium asafoetida made for traditional Indian cooking and mindful wellness.',
      weight: '100 g',
      price: 690,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
      ingredients: '100% pure asafoetida (hing)',
      storage: 'Store in an airtight container away from humidity and sunlight.',
      reviews: ['Aromatic and pure — perfect for tadka and dals.', 'Rich fragrance and authentic taste.'],
      category: 'Premium Hing'
    },
    {
      id: 'hing-jeera-masala',
      name: 'Hing Jeera Masala',
      description: 'A balanced blend of hing and jeera designed for everyday sabzis, dals and khichdi.',
      weight: '120 g',
      price: 420,
      image: 'https://images.unsplash.com/photo-1604908556852-7d6a2f51f84d?auto=format&fit=crop&w=900&q=80',
      ingredients: 'Asafoetida, roasted cumin, Himalayan salt, spice oils',
      storage: 'Keep sealed and dry; use a dry spoon for best freshness.',
      reviews: ['Adds a warm aroma to daily meals.', 'Tastes premium and authentic.'],
      category: 'Masala Blend'
    },
    {
      id: 'hing-chaat-masala',
      name: 'Hing Chaat Masala',
      description: 'A lively masala with hing that brightens fruit chaat, sprouts and savory snacks.',
      weight: '120 g',
      price: 450,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      ingredients: 'Hing, black salt, roasted chaat masala, mint, tangy citrus notes',
      storage: 'Store in a cool, dry place and use a dry spoon.',
      reviews: ['Perfect for chaat and street-food inspired plates.', 'Fresh, zesty and clean flavor.'],
      category: 'Chaat Mix'
    },
    {
      id: 'hing-raita-masala',
      name: 'Hing Raita Masala',
      description: 'A gentle, cooling seasoning that enhances yogurt-based dishes and fresh lunches.',
      weight: '100 g',
      price: 390,
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=900&q=80',
      ingredients: 'Hing, roasted cumin, dried mint, black salt, coriander',
      storage: 'Keep in a sealed jar away from moisture.',
      reviews: ['Works beautifully in raita and curd dishes.', 'Light and aromatic without overpowering.'],
      category: 'Raita Blend'
    },
    {
      id: 'hing-candy',
      name: 'Hing Candy',
      description: 'A refined, traditional sweet-and-savory treat for a quick pick-me-up after meals.',
      weight: '60 g',
      price: 320,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
      ingredients: 'Hing extract, jaggery, natural sweeteners, cardamom',
      storage: 'Keep in a cool dry place. Refrigeration not required.',
      reviews: ['A unique and delightful flavor.', 'Great as a digestive bite.'],
      category: 'Wellness Treat'
    }
  ];

  res.json(products);
});

app.get('/api/orders', (req, res) => {
  res.json(readJson(ORDERS_FILE));
});

app.get('/api/enquiries', (req, res) => {
  res.json(readJson(ENQUIRIES_FILE));
});

app.post('/api/checkout', async (req, res) => {
  const { customer, items, subtotal, shipping, total, paymentMethod, orderNotes } = req.body;

  if (!customer || !items || !items.length) {
    return res.status(400).json({ message: 'Order information is incomplete.' });
  }

  const orderNumber = generateOrderNumber();
  const createdAt = new Date().toISOString();
  const order = {
    id: Date.now().toString(),
    orderNumber,
    customer,
    items,
    subtotal,
    shipping,
    total,
    paymentMethod: paymentMethod || 'Cash on Delivery',
    notes: orderNotes || '',
    createdAt,
    status: 'Received'
  };

  const orders = readJson(ORDERS_FILE);
  orders.unshift(order);
  writeJson(ORDERS_FILE, orders);

  const orderSummary = items.map(item => `${item.name} x ${item.quantity}`).join('<br>');
  const address = `${customer.houseNumber}, ${customer.streetArea}, ${customer.city}, ${customer.state} - ${customer.pinCode}`;

  const businessHtml = `
    <h2>New INDUMA Order</h2>
    <p><strong>Order Number:</strong> ${orderNumber}</p>
    <p><strong>Name:</strong> ${customer.fullName}</p>
    <p><strong>Mobile:</strong> ${customer.mobile}</p>
    <p><strong>Email:</strong> ${customer.email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Notes:</strong> ${order.notes || 'None'}</p>
    <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
    <p><strong>Products Ordered:</strong><br>${orderSummary}</p>
    <p><strong>Subtotal:</strong> ${formatPrice(subtotal)}</p>
    <p><strong>Shipping:</strong> ${formatPrice(shipping)}</p>
    <p><strong>Total:</strong> ${formatPrice(total)}</p>
    <p><strong>Order Date:</strong> ${new Date(createdAt).toLocaleString('en-IN')}</p>
  `;

  const customerHtml = `
    <h2>Thank You for Choosing INDUMA.</h2>
    <p>Your order has been received successfully.</p>
    <p><strong>Order Number:</strong> ${orderNumber}</p>
    <p><strong>Order Summary:</strong><br>${orderSummary}</p>
    <p><strong>Total Amount:</strong> ${formatPrice(total)}</p>
    <p>We will contact you shortly on ${customer.mobile}.</p>
  `;

  await sendBusinessEmail(`New INDUMA Order - ${orderNumber}`, businessHtml);
  await sendCustomerEmail(customer.email, `INDUMA Order Confirmation - ${orderNumber}`, customerHtml);

  res.status(201).json({ success: true, order, message: 'Order placed successfully.' });
});

app.post('/api/contact', async (req, res) => {
  const { name, mobile, email, message } = req.body;

  if (!name || !mobile || !email || !message) {
    return res.status(400).json({ message: 'Please complete all contact fields.' });
  }

  const enquiry = {
    id: Date.now().toString(),
    name,
    mobile,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  const enquiries = readJson(ENQUIRIES_FILE);
  enquiries.unshift(enquiry);
  writeJson(ENQUIRIES_FILE, enquiries);

  const enquiryHtml = `
    <h2>New Contact Enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Submitted:</strong> ${new Date(enquiry.createdAt).toLocaleString('en-IN')}</p>
  `;

  await sendBusinessEmail('New INDUMA Contact Enquiry', enquiryHtml);
  res.json({ success: true, message: 'Your enquiry has been received.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`INDUMA store server running on http://localhost:${PORT}`);
});

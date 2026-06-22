# TyroCore Integrated ERP/POS System

## Overview

TyroCore is a unified, all-in-one system that **replaces Digitot Back Office, GAAP Unity, and Data Flow** while **integrating with Sage Accounting**. It combines:

- **Point of Sale (POS)** - Daily sales, cash ups, payments
- **Inventory Management** - Stock takes, stock on hand, valuations
- **Recipe & Production** - Recipe management, batch production with automatic stock consumption
- **Purchase Order Automation** - Auto-generate POs based on stock levels and recipes
- **Checklists & Maintenance** - Daily/weekly maintenance logs
- **Financial Integration** - Direct Sage Accounting sync

## System Architecture

```
TyroCore-ERP-POS/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Recipe.js
│   │   ├── RecipeIngredient.js
│   │   ├── ProductionBatch.js
│   │   ├── Sale.js
│   │   ├── PurchaseOrder.js
│   │   ├── StockTake.js
│   │   ├── Checklist.js
│   │   ├── ChecklistItem.js
│   │   ├── Inventory.js
│   │   ├── Customer.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── sales.js
│   │   ├── customers.js
│   │   ├── payments.js
│   │   ├── inventory.js
│   │   ├── recipes.js
│   │   ├── ingredients.js
│   │   ├── batches.js
│   │   ├── purchaseOrders.js
│   │   ├── stockTakes.js
│   │   ├── checklists.js
│   │   ├── tasks.js
│   │   ├── reports.js
│   │   ├── sage.js
│   │   ├── analytics.js
│   │   ├── warehouse.js
│   │   ├── production.js
│   │   ├── suppliers.js
│   │   ├── goodsReceived.js
│   │   └── maintenance.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── sageIntegration.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── js/
│       ├── app.js
│       ├── dashboard.js
│       ├── pos.js
│       ├── inventory.js
│       ├── customers.js
│       ├── recipes.js
│       ├── production.js
│       ├── reports.js
│       └── settings.js
├── main.js
├── preload.js
├── package.json
├── .env.example
└── README.md
```

## Database Models

### Core Models

- **Product** - All inventory items (finished goods, ingredients, consumables)
- **Recipe** - Production recipes with instructions and estimated time
- **RecipeIngredient** - Ingredient quantities for recipes
- **ProductionBatch** - Production batches with status tracking
- **Sale** - POS transactions with Sage sync
- **Customer** - Customer profiles with loyalty tracking
- **Payment** - Payment methods and status
- **Inventory** - All stock transactions (sales, production, adjustments)

### Ordering & Procurement

- **PurchaseOrder** - Purchase orders with Sage sync
- **StockTake** - Physical stock counting

### Operations

- **Checklist** - Daily/weekly maintenance checklists
- **ChecklistItem** - Individual checklist items with completion tracking

## API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Soft delete product

### Sales & POS
- `POST /api/sales` - Create sale
- `GET /api/sales` - List sales
- `POST /api/sales/:id/void` - Void sale
- `POST /api/sales/:id/refund` - Process refund

### Inventory
- `POST /api/inventory` - Log transaction
- `GET /api/inventory/history/:productId` - Inventory history
- `GET /api/inventory/low-stock` - Low stock items

### Recipes & Production
- `GET /api/recipes` - List recipes
- `POST /api/recipes` - Create recipe
- `GET /api/ingredients/recipe/:recipeId` - Get recipe ingredients
- `POST /api/ingredients` - Add ingredient to recipe
- `GET /api/batches` - List production batches
- `POST /api/batches` - Create batch
- `POST /api/batches/:id/start` - Start production
- `POST /api/batches/:id/complete` - Complete production (auto-consumes stock)

### Purchase Orders
- `GET /api/purchase-orders` - List POs
- `POST /api/purchase-orders` - Create PO
- `POST /api/purchase-orders/:id/send` - Send PO

### Stock Management
- `GET /api/stock-takes` - List stock takes
- `POST /api/stock-takes` - Create stock take
- `POST /api/stock-takes/:id/start` - Start stock take
- `POST /api/stock-takes/:id/complete` - Complete stock take

### Checklists & Tasks
- `GET /api/checklists` - List checklists
- `POST /api/checklists` - Create checklist
- `POST /api/tasks/:id/complete` - Mark task complete
- `POST /api/tasks/:id/reopen` - Reopen task

### Reporting
- `GET /api/reports/daily` - Daily sales report
- `GET /api/reports/period` - Period report
- `GET /api/reports/inventory-value` - Stock valuation
- `GET /api/reports/production` - Production report

### Sage Integration
- `POST /api/sage/sync-sales` - Sync sales to Sage
- `POST /api/sage/sync-products` - Sync products to Sage
- `GET /api/sage/status` - Check sync status

## Features

### POS Module
✅ Daily sales tracking per item
✅ Multiple payment methods (cash, card, wallet, check, bank transfer)
✅ Receipt generation
✅ Customer profiles with loyalty points
✅ Discount management
✅ Sale voiding and refunds

### Inventory Module
✅ Real-time stock tracking
✅ Automatic stock reduction on sales
✅ Manual stock adjustments
✅ Stock take management
✅ Low stock alerts
✅ Stock valuation reports

### Production Module
✅ Recipe creation with ingredients and instructions
✅ Batch production planning
✅ Automatic ingredient consumption on completion
✅ Finished product addition to inventory
✅ Production cost tracking
✅ Batch status management

### Ordering Module
✅ Automatic PO generation for low stock items
✅ Supplier management
✅ PO status tracking
✅ Goods received tracking

### Operations Module
✅ Daily/weekly/monthly checklists
✅ Maintenance task tracking
✅ Automatic checklist completion
✅ Notes and documentation

### Reporting
✅ Daily sales summary
✅ Period-based reports
✅ Top products analysis
✅ Customer insights
✅ Inventory valuation
✅ Production analytics

### Sage Integration
✅ Automatic invoice sync
✅ Product catalog sync
✅ Purchase order sync
✅ Real-time accounting integration

## Installation & Setup

### Prerequisites
- Node.js 14+
- MySQL 5.7+
- Electron 23+

### Setup Steps

1. **Clone repository**
```bash
git clone https://github.com/yasiensamodien-sys/pos.git
cd pos
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure database**
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. **Create database**
```bash
mysql -u root -p
CREATE DATABASE tyrocore_erp_pos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

5. **Start application**
```bash
npm start
```

The application will start on `http://localhost:5000`

### Production Build
```bash
npm run build-win   # Windows
npm run build-mac   # macOS
npm run build-linux # Linux
```

## Environment Variables

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tyrocore_erp_pos

# Server
PORT=5000
NODE_ENV=production

# Sage Integration
SAGE_API_URL=https://api.columbus.sage.com/v3.1
SAGE_API_KEY=your_sage_api_key
SAGE_BUSINESS_ID=your_business_id

# Security
JWT_SECRET=your_jwt_secret

# System
DEFAULT_TAX_RATE=0.20
CURRENCY=GBP
```

## Data Flow

### Sales Process
1. Customer makes purchase at POS
2. Items added to cart
3. Inventory automatically reduced
4. Sale recorded in database
5. Sage sync triggered (background)
6. Receipt generated
7. Payment recorded

### Production Process
1. Production batch created from recipe
2. Status: Planned → In Progress → Completed
3. On completion:
   - Ingredient stock reduced (based on recipe quantities)
   - Production cost calculated
   - Finished product added to inventory
   - Stock levels updated

### Purchase Order Process
1. System monitors stock levels
2. When stock < minimum, recommendations generated
3. User creates PO from suggestion
4. PO sent to supplier
5. On goods received:
   - Stock increased
   - Invoice recorded
   - Sage sync triggered

## Key Features & Advantages

✅ **Unified System** - No more switching between Digitot, GAAP Unity, and Data Flow
✅ **Real-time Inventory** - Automatic updates from sales and production
✅ **Production Automation** - Recipes automatically consume ingredients
✅ **Smart Ordering** - PO suggestions based on stock levels and recipes
✅ **Complete Tracking** - Every transaction logged and reportable
✅ **Sage Integrated** - Accounting data synced automatically
✅ **Checklists Built-in** - Daily operations management
✅ **Mobile Ready** - Responsive design for tablets and phones
✅ **Offline Capable** - Electron desktop app works offline, syncs when online
✅ **Comprehensive Reports** - Sales, inventory, production, financial analytics

## Support & Documentation

For detailed API documentation, see individual route files in `/backend/routes/`

For frontend implementation, see files in `/frontend/js/`

## License

MIT

## Author

TyroCore Systems

import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

// Purchase Orders
import PurchaseOrders from '@/views/purchase_orders/PurchaseOrders'

// Purchase Invoices
import PurchaseInvoices from '@/views/purchase_invoices/PurchaseInvoices'

// Sales Invoices
import SalesInvoices from '@/views/sales_invoice/SalesInvoices'

// Invoice Payment
import InvoicePayments from '@/views/invoice_payments/InvoicePayments'

// Suppliers
import Suppliers from '@/views/suppliers/Suppliers'

// Customers
import Customers from '@/views/customers/Customers'

// Products
import Products from '@/views/products/Products'

// Categories
import Categories from '@/views/categories/Categories'

// Units
import Units from '@/views/units/Units'

// Departments
import Departments from '@/views/departments/Departments'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home', // caption on the breadcrumb
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard', // caption on the breadcrumb
          component: Dashboard
        },
        {
          path: 'purchases',
          name: 'Purchases', // caption on the breadcrumb
          redirect: '/purchases/purchase-orders',
          component: { render (c) { return c('router-view') } },
          children: [
            {
              path: 'purchase-orders',
              name: 'Purchase Orders', // caption on the breadcrumb
              component: PurchaseOrders
            },
            {
              path: 'purchase-invoices',
              name: 'Purchase Invoice', // caption on the breadcrumb
              component: PurchaseInvoices
            }
          ]
        },
        {
          path: 'sales',
          name: 'Sales', // caption on the breadcrumb
          redirect: '/sales/sales-invoice',
          component: { render (c) { return c('router-view') } },
          children: [
            {
              path: 'sales-invoice',
              name: 'Sales Invoice', // caption on the breadcrumb
              component: SalesInvoices
            },
            {
              path: 'invoice-payments',
              name: 'Invoice Payments', // caption on the breadcrumb
              component: InvoicePayments
            }
          ]
        },
        {
          path: 'master-files',
          name: 'Master Files', // caption on the breadcrumb
          redirect: '/master-files/suppliers',
          component: { render (c) { return c('router-view') } },
          children: [
            {
              path: 'suppliers',
              name: 'Suppliers', // caption on the breadcrumb
              component: Suppliers
            },
            {
              path: 'customers',
              name: 'Customers', // caption on the breadcrumb
              component: Customers
            }
          ]
        },
        {
          path: 'maintenance',
          name: 'Maintenance', // caption on the breadcrumb
          redirect: '/maintenance/products',
          component: { render (c) { return c('router-view') } },
          children: [
            {
              path: 'products',
              name: 'Products', // caption on the breadcrumb
              component: Products
            },
            {
              path: 'categories',
              name: 'Categories', // caption on the breadcrumb
              component: Categories
            },
            {
              path: 'units',
              name: 'Units', // caption on the breadcrumb
              component: Units
            },
            {
              path: 'departments',
              name: 'Departments', // caption on the breadcrumb
              component: Departments
            }
          ]
        }

      ]
    }
  ]
})

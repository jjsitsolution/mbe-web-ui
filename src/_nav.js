export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-home'
    },
    {
      name: 'Purchases',
      url: '/purchases',
      icon: 'fa fa-archive',
      children: [
        {
          name: 'Purchase Order',
          url: '/purchases/purchase-orders'
        },
        {
          name: 'Purchase Invoice',
          url: '/purchases/purchase-invoices'
        }
      ]
    },
    {
      name: 'Sales',
      url: '/sales',
      icon: 'fa fa-star',
      children: [
        {
          name: 'Sales Invoice',
          url: '/sales/sales-invoice'
        },
        {
          name: 'Invoice Payment',
          url: '/sales/invoice-payments'
        }
      ]
    },
    {
      name: 'Master files',
      url: '/master-files',
      icon: 'fa fa-user-circle',
      children: [
        {
          name: 'Suppliers',
          url: '/master-files/suppliers'
        },
        {
          name: 'Customers',
          url: '/master-files/customers'
        }
      ]
    },
    {
      name: 'Maintenance',
      url: '/maintenance',
      icon: 'fa fa-bars',
      children: [
        {
          name: 'Products',
          url: '/maintenance/products'
        },
        {
          name: 'Categories',
          url: '/maintenance/categories'
        },
        {
          name: 'Units',
          url: '/maintenance/units'
        },
        {
          name: 'Departments',
          url: '/maintenance/departments'
        }
      ]
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'fa fa-cogs',
      children: [
        {
          name: 'User Roles',
          url: '/settings/user-roles'
        },
        {
          name: 'System Users',
          url: '/settings/system-users'
        }
      ]
    }
  ]
}


export default {

  selector: {
    frontend: {
      guest: {
        email: '',
        name: '',
        lastname: '',
        address: '',
        city: '',
        country: '',
        phone: '',
      },
    },
    backend: {

    },
  },
  value: {
    url: {
      magento_base: 'http://magento-2-travis.dev',
      admin_path: '/admin',
      catalog_path: '/admin/catalog/product/',
      payments_path: '/admin/admin/system_config/edit/section/payment/',
      product_path: '/fusion-backpack.html',
      sign_in_path: '/customer/account/login/',
      sign_up_path: '/customer/account/create/',
      orders_path: '/admin/sales/order/',
      invoices_path: '/admin/sales/invoice/',
    },
    guest: {
      email: 'john@smith.com',
      name: 'John',
      lastname: 'Smith',
      address: '42 Ealing Broadway',
      city: 'London',
      country: 'GB',
      phone: '07123456789',
    },
    customer: {
      email: 'test@checkout.com',
      name: 'Test',
      lastname: 'Checkout',
      address: '1 Wall Street',
      city: 'London',
      country: 'GB',
      phone: '07987654321',
    },
    admin: {
      username: 'checkout',
      password: 'fjin38gi278gbko8v',
      three_d_password: 'Checkout1!',
    },
    card: {
      visa: {
        card_number: '4242424242424242',
        mounth: '06',
        year: '18',
        cvv: '100',
      },
      mastercard: {
        card_number: '5436031030606378',
        mounth: '06',
        year: '25',
        cvv: '257',
      },
      amex: {
        card_number: '345678901234564',
        mounth: '06',
        year: '25',
        cvv: '1051',
      },
      diners: {
        card_number: '30123456789019',
        mounth: '06',
        year: '25',
        cvv: '257',
      },
      jcb: {
        card_number: '3530111333300000',
        mounth: '06',
        year: '18',
        cvv: '100',
      },
      discover: {
        card_number: '6011111111111117',
        mounth: '06',
        year: '18',
        cvv: '100',
      },
    },
  },

};

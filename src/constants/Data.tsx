import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";


export const registerFormData = [
  {
    title: 'First Name',
    id: 'first_name',
    type: 'text',
    name: 'first_name',
    defaultValue: '',
    errorMessage: 'Please enter your first name',
    placeholder: 'Enter your first name',
    required: true,
    // icon: 'UserOutlined',
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your first name!',
      },
    ],
  },
  {
    title: 'Last Name',
    id: 'last_name',
    type: 'text',
    name: 'last_name',
    defaultValue: '',
    errorMessage: 'Please enter your last name',
    placeholder: 'Enter your Last Name',
    required: true,
    // icon: 'UserOutlined',
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your last name!',
      },
    ],
  },
  {
    title: 'Email Address',
    id: 'email',
    type: 'text',
    name: 'email',
    defaultValue: '',
    errorMessage: 'Please enter your email',
    placeholder: 'Enter your email address',
    required: true,
    // icon: 'MailOutlined',
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your email address!',
        validateTrigger: 'onSubmit',
      },
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
        validateTrigger: 'onSubmit',
      },
    ],
  },
  {
    title: 'Phone Number',
    id: 'phone',
    type: 'number',
    name: 'phone',
    defaultValue: '',
    errorMessage: 'Please input your phone number!',
    placeholder: 'Enter your Phone Number',
    required: true,
    // icon: 'PhoneOutlined',
    icon: <PhoneOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your phone number!',
      },
    ],
  },
  {
    title: 'Password',
    id: 'password',
    type: 'password',
    name: 'password',
    defaultValue: '',
    errorMessage: 'Please input your password!',
    placeholder: 'Enter your Password',
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
          if (re.test(getFieldValue('password'))) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Invalid Password'));
          }
        },
        validateTrigger: 'onSubmit',
      }),
    ],
  },
  {
    title: 'Re Enter Password',
    id: 'confirm_password',
    type: 'password',
    name: 'confirm_password',
    defaultValue: '',
    errorMessage: 'Please input your password again!',
    placeholder: 'Re Enter your Password',
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your password again!',
        validationTrigger: 'onBlur',
      },
      ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('Passwords do not match!'));
        },
        validateTrigger: 'onSubmit',
      }),
    ],
  },
];




export const logInFormData = [

  {
    title: 'Email Address',
    id: 'email',
    type: 'text',
    name: 'email',
    defaultValue: '',
    errorMessage: 'Please enter your email',
    placeholder: 'Enter your email address',
    required: true,
    // icon: 'MailOutlined',
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your email address!',
        validateTrigger: 'onSubmit',
      },
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
        validateTrigger: 'onSubmit',
      },
    ],
  },

  {
    title: 'Password',
    id: 'password',
    type: 'password',
    name: 'password',
    defaultValue: '',
    errorMessage: 'Please input your password!',
    placeholder: 'Enter your Password',
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
          if (re.test(getFieldValue('password'))) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error('Invalid Password'));
          }
        },
        validateTrigger: 'onSubmit',
      }),
    ],
  },


];




// Table const
export const userDataSource = [
  {
    id: 1,
    name: 'Mike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  },
  {
    id: 2,
    name: 'Aike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  },
  {
    id: 3,
    name: 'ssike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 4,
    name: 'fike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 5,
    name: 'dike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 6,
    name: 'tike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  },
  {
    id: 2,
    name: 'Aike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  },
  {
    id: 3,
    name: 'ssike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 4,
    name: 'fike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 5,
    name: 'dike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  }, {
    id: 6,
    name: 'tike',
    email: 'mike@getMaxListeners.com',
    phone: 67767767676,
    status: 'enable',

  },
];

const organizationData: any = []
for (let i = 0; i < 20; i++) {
  organizationData.push({
    id: 1,
    organizationName: `Zydus ${i + 1}`,
    email: 'Zydus@Zydus.com',
    phone: 67767767676,
    created: Date.now().toString(),
    status: 'Inactive',

  })
}
export { organizationData }

const rolesData: any = []

export const integrationsCards = [
  {
    title: 'Connect With Quickbooks Online',
    buttonText: 'Connect to Quickbooks',
    logo: '/assets/Connection/Intuit_QuickBooks_logo.png',
    ghost: false,
  },
  {
    title: 'Connect With ZohoBooks',
    buttonText: 'Connect',
    logo: '/assets/Connection/Zoho-Books.png',
    ghost: false,
  },
  {
    title: 'Connect With Xero',
    buttonText: 'Connect to Xero',
    logo: '/assets/Connection/Xero-logo-v2.png',
    ghost: false,
  },
  {
    title: 'Connect With NetSuite',
    buttonText: 'Connect',
    logo: '/assets/Connection/oracle.png',
    ghost: false,
  },
  {
    title: 'Connect With Sage',
    buttonText: 'Connect',
    logo: '/assets/Connection/Sage_logo.png',
    ghost: true,
  },
  {
    title: 'Connect With ClearBooks',
    buttonText: 'Connect',
    logo: '/assets/Connection/clear-books-logo-cmyk.png',
    ghost: true,
  },
  {
    title: 'Connect With Business Central',
    buttonText: 'Connect',
    logo: '/assets/Connection/Business-CentralLogo-v2.png',
    ghost: true,
  },
  {
    title: 'Connect With FreshBooks',
    buttonText: 'Connect',
    logo: '/assets/Connection/freshbooks-logo-1.png',
    ghost: false,
  },
];







export const userDrawerBody = {
  userFields: [
    {
      title: 'First Name',
      id: 'fistName',
      type: 'text',
      name: 'fistName',
      defaultValue: '',
      errorMessage: 'Please enter the first name',
      placeholder: 'Enter your first name',
    },
    {
      title: 'Last Name',
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      defaultValue: '',
      errorMessage: 'Please enter the last name',
      placeholder: 'Enter your last name',
    },
    {
      title: 'Email Address',
      id: 'email',
      type: 'text',
      name: 'email',
      defaultValue: '',
      errorMessage: 'Please enter the email address',
      placeholder: 'Enter your email address',
    },
    {
      title: 'Phone Number',
      id: 'phoneNumber',
      type: 'text',
      name: 'phoneNumber',
      defaultValue: '',
      errorMessage: 'Please enter the phone number',
      placeholder: 'Enter your phone number',
    },
  ],

  organizationFields: [
    {
      title: 'Organization Name',
      id: 'organizationName',
      type: 'text',
      name: 'organizationName',
      defaultValue: '',
      errorMessage: 'Please enter the organization name',
      placeholder: 'Enter your Organization Name',
    },
    {
      title: 'Email Address',
      id: 'email',
      type: 'text',
      name: 'email',
      defaultValue: '',
      errorMessage: 'Please enter the email address',
      placeholder: 'Enter your email address',
    },
    {
      title: 'Phone Number',
      id: 'phoneNumber',
      type: 'text',
      name: 'phoneNumber',
      defaultValue: '',
      errorMessage: 'Please enter the phone number',
      placeholder: 'Enter your phone number',
    }
  ]
}



export const subscriptionCard = [
  {
    title: 'Plan Details',
    manageSubscription: 'Manage Subscription',
    plan: 'Current Plan',
    pricing: `$199/ month`,
    logo: '/assets/Gold/Gold-v2.png',
    ghost: false,
  }
]


export const preferencesData = [
  {
    title: 'Simply Dummy Preference 1',
    status: true,
    preferences: [
      {
        title: 'Preference 1',
        status: true,
      },
      {
        title: 'Preference 2',
        status: true,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: false,
      },
      {
        title: 'Preference 5',
        status: false,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
      {
        title: 'Preference 10',
        status: true,
      },
      {
        title: 'Preference 11',
        status: false,
      },
      {
        title: 'Preference 12',
        status: true,
      },
    ],
  },
  {
    title: 'Simply Dummy Preference 2',
    status: false,
    preferences: [
      {
        title: 'Preference 1',
        status: false,
      },
      {
        title: 'Preference 2',
        status: false,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: true,
      },
      {
        title: 'Preference 5',
        status: true,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
    ],
  },

];



import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  EditOutlined,
  DeleteOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";
import React from "react";

export const registerFormData = [
  {
    title: "First Name",
    id: "first_name",
    type: "text",
    name: "first_name",
    defaultValue: "",
    errorMessage: "Please enter your first name",
    placeholder: "Enter your first name",
    required: true,
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your first name!",
      },
    ],
  },
  {
    title: "Last Name",
    id: "last_name",
    type: "text",
    name: "last_name",
    defaultValue: "",
    errorMessage: "Please enter your last name",
    placeholder: "Enter your Last Name",
    required: true,
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your last name!",
      },
    ],
  },
  {
    title: "Email Address",
    id: "email",
    type: "email",
    name: "email",
    defaultValue: "",
    errorMessage: "Please enter your email",
    placeholder: "Enter your email address",
    required: true,
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your email address!",
        validateTrigger: "onSubmit",
      },
      {
        type: "email",
        message: "The input is not valid E-mail!",
        validateTrigger: "onSubmit",
      },
    ],
  },
  {
    title: "Phone Number",
    id: "phone",
    type: "number",
    name: "phone",
    defaultValue: "",
    errorMessage: "Please input your phone number!",
    placeholder: "Enter your Phone Number",
    required: true,
    icon: <PhoneOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your phone number!",
        validationTrigger: "onBlur",
      },
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^\d{10}$/;
          if (getFieldValue('phone') !== undefined) {
            if (re.test(getFieldValue('phone'))) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error('Invalid phone number'))
            }
          }
          return Promise.reject()
        },
        validateTrigger: "onSubmit",
      })
    ],
  },
  {
    title: "Password",
    id: "password",
    type: "password",
    name: "password",
    defaultValue: "",
    errorMessage: "Please input your password!",
    placeholder: "Enter your Password",
    required: true,
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please Enter your Password ",
        validationTrigger: "onBlur",
      },
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
          console.log(getFieldValue("password"));
          if (getFieldValue("password") !== undefined) {
            if (re.test(getFieldValue("password"))) {
              return Promise.resolve();
            } else {
              return Promise.reject(
                new Error(
                  "The password must be 6 to 16 characters long and contain at least one digit and one special character (!@#$%^&*)."
                )
              );
            }
          }
          return Promise.reject();
        },
        validateTrigger: "onSubmit",
      }),
    ],
  },
  {
    title: "Re Enter Password",
    id: "confirm_password",
    type: "password",
    name: "confirm_password",
    defaultValue: "",
    placeholder: "Re Enter your Password",
    required: true,
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please Re Enter your Password ",
        validationTrigger: "onBlur",
      },
      ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Passwords do not match!"));
        },
        validateTrigger: "onSubmit",
      }),
    ],
  },
];

export const logInFormData = [
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    defaultValue: "",
    errorMessage: "Please enter your email",
    placeholder: "Enter your email address",
    required: true,
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your email address!",
        validateTrigger: "onSubmit",
      },
      {
        type: "email",
        message: "The input is not valid E-mail!",
        validateTrigger: "onSubmit",
      },
    ],
  },

  {
    title: "Password",
    id: "password",
    type: "password",
    name: "password",
    defaultValue: "",
    errorMessage: "Please input your password!",
    placeholder: "Enter your Password",
    required: true,
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your Password ",
        validateTrigger: "onBlur",
      },
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
          if (getFieldValue('password') !== undefined) {
            if (re.test(getFieldValue("password"))) {
              return Promise.resolve();
            } else {
              return Promise.reject(new Error("The password must be 6 to 16 characters long and contain at least one digit and one special character (!@#$%^&*)"));
            }
          }
          return Promise.reject()
        },
        validateTrigger: "onSubmit",
      }),
    ],
  },
];

// Table const
// user Table
export const userDataSource = [
  {
    id: 1,
    name: "Mike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "disable",
  },
  {
    id: 2,
    name: "Aike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 3,
    name: "ssike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "disable",
  },
  {
    id: 4,
    name: "fike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 5,
    name: "dike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "disable",
  },
  {
    id: 6,
    name: "tike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 7,
    name: "Aike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 8,
    name: "ssike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 9,
    name: "fike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 10,
    name: "dike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
  {
    id: 11,
    name: "tike",
    email: "mike@getMaxListeners.com",
    phone: 67767767676,
    status: "enable",
  },
];

// organization Table
const organizationData: any = [];
for (let i = 0; i < 20; i++) {
  organizationData.push({
    id: i + 1,
    organizationName: `Zydus ${i + 1}`,
    email: "Zydus@Zydus.com",
    phone: 67767767676,
    created: Date.now().toString(),
    status: "Inactive",
  });
}
export { organizationData };

// roles Table
const rolesData: any = [];

for (let i = 0; i < 20; i++) {
  rolesData.push({
    id: i + 1,
    name: `Admin ${i + 1}`,
    description: "lorem ipsum granted",
    status: "Active",
  });
}
export { rolesData };

// Integration
export const integrationsCards = [
  {
    title: "Connect With Quickbooks Online",
    buttonText: "Connect to Quickbooks",
    logo: "/assets/Connection/Intuit_QuickBooks_logo.png",
    ghost: false,
    color : "#3DA02A"
  },
  {
    title: "Connect With ZohoBooks",
    buttonText: "Connect",
    logo: "/assets/Connection/Zoho-Books.png",
    ghost: false,
    color : '#376FD1'
  },
  {
    title: "Connect With Xero",
    buttonText: "Connect to Xero",
    logo: "/assets/Connection/Xero-logo-v2.png",
    ghost: false,
    color : '#367EA3'
  },
  {
    title: "Connect With NetSuite",
    buttonText: "Connect",
    logo: "/assets/Connection/oracle.png",
    ghost: false,
    color : '#376FD1'

  },
  {
    title: "Connect With Sage",
    buttonText: "Connect",
    logo: "/assets/Connection/Sage_logo.png",
    ghost: true,
  },
  {
    title: "Connect With ClearBooks",
    buttonText: "Connect",
    logo: "/assets/Connection/clear-books-logo-cmyk.png",
    ghost: true,
  },
  {
    title: "Connect With Business Central",
    buttonText: "Connect",
    logo: "/assets/Connection/Business-CentralLogo-v2.png",
    ghost: true,
  },
  {
    title: "Connect With FreshBooks",
    buttonText: "Connect",
    logo: "/assets/Connection/freshbooks-logo-1.png",
    ghost: true,
  },
];

export const userDrawerBody = {
  userFields: [
    {
      title: "First Name",
      id: "fistName",
      type: "text",
      name: "fistName",
      defaultValue: "",
      errorMessage: "Please enter the first name",
      placeholder: "Enter your first name",
    },
    {
      title: "Last Name",
      id: "lastName",
      type: "text",
      name: "lastName",
      defaultValue: "",
      errorMessage: "Please enter the last name",
      placeholder: "Enter your last name",
    },
    {
      title: "Email Address",
      id: "email",
      type: "email",
      name: "email",
      defaultValue: "",
      errorMessage: "Please enter the email address",
      placeholder: "Enter your email address",
      rules: [
        {
          required: true,
          message: "Please input your email address!",
          validateTrigger: "onSubmit",
        },
        {
          type: "email",
          message: "The input is not valid E-mail!",
          validateTrigger: "onSubmit",
        },
      ],
    },
    {
      title: "Phone Number",
      id: "phoneNumber",
      type: "text",
      name: "phoneNumber",
      defaultValue: "",
      errorMessage: "Please enter the phone number",
      placeholder: "Enter your phone number",
    },
  ],

  organizationFields: [
    {
      title: "Organization Name",
      id: "organizationName",
      type: "text",
      name: "organizationName",
      defaultValue: "",
      errorMessage: "Please enter the organization name",
      placeholder: "Enter your Organization Name",
    },
    {
      title: "Email Address",
      id: "email",
      type: "text",
      name: "email",
      defaultValue: "",
      errorMessage: "Please enter the email address",
      placeholder: "Enter your email address",
    },
    {
      title: "Phone Number",
      id: "phoneNumber",
      type: "text",
      name: "phoneNumber",
      defaultValue: "",
      errorMessage: "Please enter the phone number",
      placeholder: "Enter your phone number",
    },
  ],

  rolesFields: [
    {
      title: "Role Name",
      id: "roleName",
      type: "text",
      name: "roleName",
      defaultValue: "",
      errorMessage: "Please enter the role name",
      placeholder: "Enter your role Name",
    },
    {
      title: "Description",
      id: "description",
      type: "text",
      name: "description",
      defaultValue: "",
      errorMessage: "Please enter the description ",
      placeholder: "Enter your description ",
    },
  ],
};

export const PermissionData: any = [
  {
    moduleName: `Admin`,
    all: ``,
    view: ``,
    edit: ``,
    delete: ``,
  },
  {
    moduleName: `User`,
    all: ``,
    view: ``,
    edit: ``,
    delete: ``,
  },
  {
    moduleName: `Organization`,
    all: ``,
    view: ``,
    edit: ``,
    delete: ``,
  },
  {
    moduleName: `Roles`,
    all: ``,
    view: ``,
    edit: ``,
    delete: ``,
  },
];

export const subscriptionCard = [
  {
    title: "Plan Details",
    manageSubscription: "Manage Subscription",
    plan: "Current Plan",
    pricing: `$199/ month`,
    logo: "/assets/Gold/Gold-v2.png",
    ghost: false,
  },
];

export const preferencesData = [
  {
    title: "Simply Dummy Preference 1",
    status: true,
    preferences: [
      {
        title: "Preference 1",
        status: true,
      },
      {
        title: "Preference 2",
        status: true,
      },
      {
        title: "Preference 3",
        status: true,
      },
      {
        title: "Preference 4",
        status: false,
      },
      {
        title: "Preference 5",
        status: false,
      },
      {
        title: "Preference 6",
        status: true,
      },
      {
        title: "Preference 7",
        status: true,
      },
      {
        title: "Preference 8",
        status: false,
      },
      {
        title: "Preference 9",
        status: true,
      },
      {
        title: "Preference 10",
        status: true,
      },
      {
        title: "Preference 11",
        status: false,
      },
      {
        title: "Preference 12",
        status: true,
      },
    ],
  },
  {
    title: "Simply Dummy Preference 2",
    status: false,
    preferences: [
      {
        title: "Preference 1",
        status: false,
      },
      {
        title: "Preference 2",
        status: false,
      },
      {
        title: "Preference 3",
        status: true,
      },
      {
        title: "Preference 4",
        status: true,
      },
      {
        title: "Preference 5",
        status: true,
      },
      {
        title: "Preference 6",
        status: true,
      },
      {
        title: "Preference 7",
        status: true,
      },
      {
        title: "Preference 8",
        status: false,
      },
      {
        title: "Preference 9",
        status: true,
      },
    ],
  },
];

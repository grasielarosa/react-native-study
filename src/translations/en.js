export default {
  signin: {
    title: 'Control your finances in a very simple way',
    subtitle: 'Log in with one of the accounts below',
    buttonGoogle: 'Login with Google',
    buttonApple: 'Login with Apple',
  },
  report: {
    title: 'Report by category',
  },
  register: {
    title: 'Registration',
    input: {
      name: 'name',
      amount: 'price',
    },
    schema: {
      fieldName: 'name field is required',
      fieldNumber: 'enter a numeric value',
      fieldValue: 'the value cannot be negative',
      fieldPrice: 'price field is required',
    },
    typeAlert: 'Select transaction type.',
    categoryAlert: 'Select a category.',
    errorAlert: 'Could not save this transaction.',

    income: 'income',
    outcome: 'outcome',
    button: 'send',
  },
  dashboard: {
    greeting: 'Hello,',
    total: 'total',
    incomes: 'incomes',
    outcomes: 'outcomes',
    list: 'Transactions list',
    noTransactions: 'There are no transactions.',
    lastIncome: 'Last entry transaction day ',
    lastOutcome: 'Last expense transaction day ',
  },
  categorySelect: {
    title: 'Categories',
    button: 'Select',
  },
  highLightCard: {
    message: 'Last transaction: ',
  },
  categories: {
    purchases: 'Purchases',
    food: 'Food',
    salary: 'Salary',
    car: 'Car',
    leisure: 'Leisure',
    studies: 'Studies',
  },
  navigation: {
    dashboard: 'Dashboard',
    add: 'Add Transaction',
    reports: 'Reports',
  },
};

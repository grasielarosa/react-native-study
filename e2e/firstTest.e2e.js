describe('Login Screens', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // it('should setup screen', async () => {
  //   await waitFor(element(by.text('No'))).toBeVisible();
  //   await element(by.text('No')).tap();
  // });

  it('should render login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
    const button = await element(by.id('login-button'));

    await button.tap();
  });

  // it('logged', async () => {
  //   await waitFor(element(by.text('Yes'))).toBeVisible();
  //   await element(by.text('Yes')).tap();
  // });

  it('should register new transaction 1', async () => {
    await expect(element(by.id('dashboard-screen'))).toBeVisible();
    const addTransaction = await element(by.id('menu-register'));

    await addTransaction.tap();
    await expect(element(by.id('register-screen'))).toBeVisible();

    await element(by.id('input-name')).tap();
    await element(by.id('input-name')).typeText('dinner\n');

    await element(by.id('input-amount')).tap();
    await element(by.id('input-amount')).typeText('70\n');

    await element(by.id('outcome-button')).tap();

    await element(by.id('outcome-button')).tap();

    await expect(element(by.id('category-select'))).toBeVisible();
    await element(by.id('category-select')).tap();

    await expect(element(by.id('food'))).toBeVisible();
    await element(by.id('food')).tap();

    await element(by.id('category-select-button')).tap();

    await element(by.id('register-button')).tap();
  });

  it('should register new transaction 2', async () => {
    const addTransaction = await element(by.id('menu-register'));

    await addTransaction.tap();
    await expect(element(by.id('register-screen'))).toBeVisible();

    await element(by.id('input-name')).tap();
    await element(by.id('input-name')).typeText('books\n');

    await element(by.id('input-amount')).tap();
    await element(by.id('input-amount')).typeText('100\n');

    await element(by.id('outcome-button')).tap();

    await element(by.id('outcome-button')).tap();

    await expect(element(by.id('category-select'))).toBeVisible();
    await element(by.id('category-select')).tap();

    await expect(element(by.id('studies'))).toBeVisible();
    await element(by.id('studies')).tap();

    await element(by.id('category-select-button')).tap();

    await element(by.id('register-button')).tap();
  });

  it('should register new transaction 3', async () => {
    const addTransaction = await element(by.id('menu-register'));

    await addTransaction.tap();
    await expect(element(by.id('register-screen'))).toBeVisible();

    await element(by.id('input-name')).tap();
    await element(by.id('input-name')).typeText('landing page\n');

    await element(by.id('input-amount')).tap();
    await element(by.id('input-amount')).typeText('700\n');

    await element(by.id('income-button')).tap();

    await element(by.id('income-button')).tap();

    await expect(element(by.id('category-select'))).toBeVisible();
    await element(by.id('category-select')).tap();

    await expect(element(by.id('salary'))).toBeVisible();
    await element(by.id('salary')).tap();

    await element(by.id('category-select-button')).tap();

    await element(by.id('register-button')).tap();
  });

  it('should render register screen', async () => {
    await expect(element(by.id('dashboard-screen'))).toBeVisible();
    await element(by.id('menu-reports')).tap();

    await expect(element(by.id('report-screen'))).toBeVisible();
  });

  it('should render dashboard screen', async () => {
    await element(by.id('menu-dashboard')).tap();
    await expect(element(by.id('dashboard-screen'))).toBeVisible();

    const dashboardCards = await element(by.id('dashboard-cards'));
    await dashboardCards.scrollTo('right');
    await dashboardCards.scrollTo('left');

    await waitFor(element(by.id('transaction-list')))
      .toBeVisible()
      .whileElement(by.id('dashboard-screen'))
      .scroll(50, 'down');

    await element(by.id('transaction-list')).scrollTo('bottom');
    await element(by.id('transaction-list')).scrollTo('top');
  });

  it('logout', async () => {
    await element(by.id('menu-dashboard')).tap();
    await element(by.id('logout-button')).tap();
    await expect(element(by.id('login-screen'))).toBeVisible();
  });
});

describe('Login Screens', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should setup screen', async () => {
    await waitFor(element(by.text('No'))).toBeVisible();
    await element(by.text('No')).tap();
  });

  it('should render login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
    const button = await element(by.id('login-button'));

    await button.tap();
  });

  it('test', async () => {
    await waitFor(element(by.text('Yes'))).toBeVisible();
    await element(by.text('Yes')).tap();
  });

  it('should render dashboard screen', async () => {
    await expect(element(by.id('dashboard-screen'))).toBeVisible();

    const dashboardCards = await element(by.id('dashboard-cards'));
    await dashboardCards.scrollTo('right');
    await dashboardCards.scrollTo('left');

    await element(by.id('dashboard-screen')).scrollTo('down');
    await element(by.id('dashboard-screen')).scrollTo('top');
  });

  it('should register new transaction', async () => {
    const addTransaction = await element(by.id('menu-register'));

    await addTransaction.tap();
    await expect(element(by.id('register-screen'))).toBeVisible();

    await element(by.id('input-name')).tap();
    await element(by.id('input-name')).typeText('dinner\n');

    await element(by.id('input-amount')).tap();
    await element(by.id('input-amount')).typeText('30\n');

    await element(by.id('outcome-button')).tap();

    await element(by.id('outcome-button')).tap();

    await expect(element(by.id('category-select'))).toBeVisible();
    await element(by.id('category-select')).tap();

    await expect(element(by.id('food'))).toBeVisible();
    await element(by.id('food')).tap();

    await element(by.id('category-select-button')).tap();

    await element(by.id('register-button')).tap();
  });

  it('should render register screen', async () => {
    await expect(element(by.id('dashboard-screen'))).toBeVisible();
    await element(by.id('menu-reports')).tap();

    await expect(element(by.id('report-screen'))).toBeVisible();
  });

  it('logout', async () => {
    await element(by.id('menu-dashboard')).tap();
    await element(by.id('logout-button')).tap();
  });
});

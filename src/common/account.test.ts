import Account from './account';

test('test account', () => {
    const account = Account.create();
    console.log(account);

    const account2 = Account.createWithMnemonic('mima');
    console.log(account2);
});

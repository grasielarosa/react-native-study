export function Home({navigation}) {
    const theme = useTheme();
    const wallets = useSelector(state => state.wallet?.wallets);
    const dispatch = useDispatch();
  
    useEffect(() => {
      async function GetCoinData() {
        console.log('Requesting Coin Data');
        let coins = [];
  
        await GetWallet()
          .then(data => {
            coins = data.map(x => ({
              ...x,
              balance: Number(x.balance),
              realCurrency: x.currency,
              icon: CURRENCY_ICON[x.currency],
              flatIcon: CURRENCY_FLAT_ICON[x.currency],
            }));
          })
          .catch(error => console.log('GetWallet error:', error.message));
  
        if (coins.length === 0) {
          return;
        }
  
        const euroCoin = coins.find(x => x.currency === 'EUR');
        if (euroCoin) {
          euroCoin.currency = 'EUR_S';
          euroCoin.currencyName = 'Euro_S';
          euroCoin.euroValue = 1;
          euroCoin.isEuro = true;
        }
  
        async function UpdateCoin(coin) {
          return GetMarketChartData(
            coin.currencyName.toLowerCase(),
            'eur',
            '1',
            'hourly',
          )
            .then(priceData => {
              let prices = priceData.prices.map(x => x[1]);
              coin.prices = prices;
              const first = prices ? prices[0] : null;
              const last = prices ? prices[prices.length - 1] : null;
              coin.euroValue = last;
              coin.change = first ? (last / first - 1) * 100 : 0;
            })
            .catch(error => console.log(error, coin.currencyName));
        }
  
        await Promise.all(
          coins.map(async x => !x.isEuro && (await UpdateCoin(x))),
        );
  
        coins = coins.sort(
          (a, b) => b.balance * b.euroValue - a.balance * a.euroValue,
        );
  
        dispatch(setWallets(coins));
      }
  
      GetCoinData();
  
      GetWalletOverview()
        .then(data => {
          dispatch(setBalance(Number(data[0].amount)));
        })
        .catch(error => console.log('GetWallet error', JSON.stringify(error)));
    }, [dispatch]);
  
    return (
      <ScrollView>
        <PromoCard />
        <MarketsCard />
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
          Main crypto today
        </Text>
        <ScrollView
          nestedScrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.cryptoScroll}>
            {wallets?.map(
              x =>
                x.prices && (
                  <CryptoChartCard
                    key={x.currency}
                    title={x.currencyName}
                    symbol={x.currency}
                    prices={x.prices}
                    icon={x.icon}
                  />
                ),
            )}
          </View>
        </ScrollView>
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
          Market
        </Text>
        <PromoCard />
        <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
          Promotions for you
        </Text>
        <PromoCard />
        <Text style={[styles.copyright, {color: theme.colors.textDark}]}>
          Copyright © 2022 Novapago OÜ. All Rights Reserved.
        </Text>
      </ScrollView>
    );
  }
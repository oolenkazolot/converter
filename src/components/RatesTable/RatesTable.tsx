import styles from './RatesTable.module.scss';

type TProps = {
  baseCurrency: string;
  exchangeRates: {
    [key: string]: number;
  };
};

export default function RatesTable({ baseCurrency, exchangeRates }: TProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Base currency</th>
          <th>Converted to</th>
        </tr>
      </thead>

      {Object.keys(exchangeRates).map((currency, index) => {
        if (currency !== baseCurrency) {
          return (
            <tbody key={index}>
              <tr>
                <td>1 {baseCurrency}</td>
                <td>
                  {exchangeRates[currency]} {currency}
                </td>
              </tr>
            </tbody>
          );
        }
      })}
    </table>
  );
}

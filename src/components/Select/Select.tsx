import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Select.module.scss';

type ISelect = {
  options: string[];
  defaultOption?: string;
  content?: string;
  register?: UseFormRegisterReturn<string>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: (props: ISelect) => JSX.Element = ({ options, defaultOption, content, register, onChange }: ISelect) => {
  return (
    <div className={styles.select}>
      <label className={styles.select__label}>
        {content}
        <select defaultValue={defaultOption} className={styles.select__select} {...register} onChange={onChange}>
          {options.map((value: string) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

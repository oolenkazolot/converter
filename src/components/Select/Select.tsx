import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Select.module.scss';

type ISelect = {
  options: string[];
  classNameTwo?: string;
  defaultOption?: string;
  content?: string;
  value?: string;
  register?: UseFormRegisterReturn<string>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: (props: ISelect) => JSX.Element = ({ options, classNameTwo, defaultOption, content, register, onChange }: ISelect) => {
  const classNames = `${styles.select} ${classNameTwo}`;
  return (
    <div className={classNames}>
      <label className={styles.select__label}>
        {content}
        <select className={styles.select__select} {...register} defaultValue={defaultOption} onChange={onChange}>
          {options.map((value: string, index: number) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

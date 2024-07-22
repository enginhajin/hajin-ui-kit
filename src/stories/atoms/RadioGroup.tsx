import { css, Palette, useTheme } from '@emotion/react';
import { Radio } from './Radio';
import { ChangeEvent } from 'react';

export interface RadioOption {
  label: string | React.ReactNode;
  name: string;
  value: string | number;
}
export interface RadioGroup {
  label?: string | React.ReactNode;
  options: RadioOption[];
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string | number;
  palette: Palette;
  direction?: 'row' | 'column';
}

export const RadioGroup = ({
  label,
  options,
  disabled,
  onChange,
  currentValue,
  palette,
  direction = 'row',
  ...props
}: RadioGroup) => {
  const theme = useTheme();
  const containerCss = css({
    display: 'flex',
    flexDirection: direction,
    flexWrap: 'wrap',
    gap: '0.75rem',
  });
  const labelStyles = css({
    width: '100%',
    fontSize: `${theme.text.size.md}`,
    fontWeight: 700,
    color: `${theme.palette.content.secondary}`,
  });
  return (
    <div css={containerCss} {...props}>
      {label && <div css={labelStyles}>{label}</div>}
      {options.map(({ label, name, value }: RadioOption) => {
        console.log(`currentValue:${currentValue}, value:${value}`);
        return (
          <Radio
            key={name}
            name={name}
            value={value}
            checked={currentValue === value}
            onChange={onChange}
            disabled={disabled}
            palette={palette}
          >
            {label}
          </Radio>
        );
      })}
    </div>
  );
};

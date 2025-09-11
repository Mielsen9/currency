/**
 * Форматує валюту для відображення
 * @param value - число або рядок, може містити коми/пробіли
 * @param options - додаткові налаштування
 *   - isCents: true якщо значення в сотих (копійках), наприклад 4174 -> 41.74
 *   - fractionDigits: кількість десяткових знаків (default 2)
 */
interface FormatCurrencyOptions {
  isCents?: boolean;
  fractionDigits?: number;
}

function formatCurrency(
  value: number | string,
  options: FormatCurrencyOptions = {}
): string {
  const { isCents = false, fractionDigits = 2 } = options;

  // Перетворюємо рядок у число, прибираємо пробіли та замінюємо кому на крапку
  let num = typeof value === 'string'
    ? parseFloat(value.replace(/\s/g, '').replace(',', '.'))
    : value;

  if (isNaN(num)) return '0.00';

  // Ділимо на 100, якщо в копійках
  if (isCents) {
    num = num / 100;
  }

  // Форматування числа з точкою як десятковим роздільником
  return num.toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export default formatCurrency;
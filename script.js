console.log('script.js підключено');

const wishes = [
  { title: 'Новий ноутбук', price: 109999, priority: 'високий' },
  { title: 'Навушники', price: 3399, priority: 'середній' },
  { title: 'Книга з програмування', price: 1500, priority: 'високий' },
  { title: 'Настільна лампа', price: 850, priority: 'низький' },
];

   // Рахує загальну вартість усіх бажань за допомогою циклу for
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const totalPrice = calculateTotal(wishes);
console.log(`Кількість бажань: ${wishes.length}`);
console.log(`Загальна вартість: ${totalPrice} грн`);

// Виводить кожне бажання й позначає ті, що мають високий пріоритет
function markHighPriority(items) {
  for (const wish of items) {
    if (wish.priority === 'високий') {
      console.log(`⭐ ${wish.title} — ВИСОКИЙ пріоритет`);
    } else {
      console.log(`   ${wish.title} — пріоритет: ${wish.priority}`);
    }
  }
}

markHighPriority(wishes);

// Перевіряє, чи вкладається ціна бажання в заданий бюджет
const withinBudget = (price, budget) => price <= budget;

const budget = 5000;
console.log(`Бюджет: ${budget} грн`);
for (const wish of wishes) {
  const result = withinBudget(wish.price, budget) ? 'вкладається' : 'не вкладається';
  console.log(`${wish.title} (${wish.price} грн) — ${result}`);
}
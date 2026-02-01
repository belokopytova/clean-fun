import { healthStatus } from '../user';


test("Должен возвращать healthy при здоровье > 50", () => {
  expect(healthStatus({ name: "Anna", health: 70 })).toBe("healthy");
});

test("Должен возвращать wounded при здоровье 15-50", () => {
  expect(healthStatus({ name: "Bob", health: 35 })).toBe("wounded");
});

test("Должен возвращать critical при здоровье < 15", () => {
  expect(healthStatus({ name: "Ivan", health: 2 })).toBe("critical");
});

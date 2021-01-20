export function addItem(list, taskName) {
  if (!taskName) return;
  return list.push({ id: list.length() + 1, value: taskName });
}

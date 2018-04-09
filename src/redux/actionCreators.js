export function toggleShouldShowForm() {
  return {type: 'TOGGLE_SHOULD_SHOW_FORM'};
}

export function addWord(en, vn) {
  const word = {
    id: Math.random() + 'abc',
    en,
    vn,
    isMemorized: false
  }
  return {type: 'ADD_WORD', word};
}

export function setFilterMode(filterMode) {
  return { type: 'SET_FILTER_MODE', filterMode };
}
export function toggleWord(id) {
  return {type: 'TOGGLE_WORD', id};
}
export function removeWord(id) {
  return {type: 'REMOVE_WORD', id};
}
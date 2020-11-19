export default function getBooks() {
  return fetch('/books').then((res) => res.json())
}

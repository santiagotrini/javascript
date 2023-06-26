function handleSubmit() {
  event.preventDefault();
  let word = event.target.word.value;
  let isPalindrome = true;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length-1-i])
      isPalindrome = false;
  }
  let p = document.querySelector('#result');
  p.textContent = isPalindrome ? 'es palindroma' : 'no es palindroma';
  event.target.word.value = '';
}

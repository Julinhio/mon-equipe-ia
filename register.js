import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://gbdturqxlxyvdtezjwxa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZHR1cnF4bHh5dmR0ZXpqd3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NzgzMjMsImV4cCI6MjA2MzQ1NDMyM30.JbO7l0jJwF2-9AuCzf8vhApgFky8L2culhOmlItiUoM';

const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('registerForm');
const errorBox = document.getElementById('errorMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const confirm = form.confirmPassword.value.trim();

  errorBox.style.display = 'none';
  errorBox.textContent = '';

  if (password !== confirm) {
    errorBox.textContent = 'Les mots de passe ne correspondent pas.';
    errorBox.style.display = 'block';
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      redirectTo: 'https://julinhio.github.io/mon-equipe-ia/'
    }
  });

  if (error) {
    errorBox.textContent = error.message;
    errorBox.style.display = 'block';
    return;
  }

  alert('Compte créé ! Veuillez vérifier votre email.');
  window.location.href = 'login.html';
});
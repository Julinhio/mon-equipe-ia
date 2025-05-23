import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://gbdturqxlxyvdtezjwxa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZHR1cnF4bHh5dmR0ZXpqd3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NzgzMjMsImV4cCI6MjA2MzQ1NDMyM30.JbO7l0jJwF2-9AuCzf8vhApgFky8L2culhOmlItiUoM';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        console.log('data:', data);

        if (error) {
            console.log(error);
            throw error;
        }

        window.location.href = '/mon-equipe-ia/accueil';
    } catch (error) {
        errorMessage.textContent = error.message || 'Une erreur est survenue lors de la connexion.';
        errorMessage.style.display = 'block';
    }
});

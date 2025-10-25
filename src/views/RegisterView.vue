<script setup>
</script>

<template>
  <div class="box">
    <div class="card">
      <!-- Partie droite avec formulaire -->
      <div class="card_right">
        <form action="" class="form">
          <p class="form_title">S'inscrire</p>

          <div class="form_item">
            <label>Nom</label>
            <input type="text" required />
          </div>

          <div class="form_item">
            <label>Prénom</label>
            <input type="text" required />
          </div>

          <div class="form_item">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div class="form_item">
            <label>Mot de passe</label>
            <input type="password" required />
          </div>

          <div class="remember_me">
            <label><input type="checkbox" /> J'accepte les conditions d'utilisation</label>
          </div>

          <button type="submit" class="form_button">S'inscrire</button>

          <div class="login_link">
            <p>Vous avez déjà un compte ? <a href="#">Se connecter</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00000099, #000000b3), url('../assets/images/authimg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card {
  width: 500px;
  border-radius: 15px;
  background-color: #fff;
}


.card_right {
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form_title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.form_item {
  position: relative;
  margin-bottom: 20px;
}

.form_item input {
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.remember_me {
  margin-bottom: 20px;
}

.remember_me input {
  margin-right: 5px;
}

.form_button {
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
}

.form_button:hover {
  background-color: #333;
}

.login_link {
  text-align: center;
  margin-top: 15px;
}

.login_link a {
  color: #007bff;
  text-decoration: none;
}

.login_link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
  }

  .card_right {
    padding: 20px;
  }
}
</style>
